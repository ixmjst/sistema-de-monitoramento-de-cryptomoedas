import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PortfolioService, PortfolioItem } from '../../core/services/portfolio.service';
import { CryptoService, Cryptocurrency } from '../../core/services/crypto.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  portfolioItems: PortfolioItem[] = [];
  filteredCryptos: Cryptocurrency[] = [];
  loading = true;
  showForm = false;
  editingId: number | null = null;
  searchQuery = '';
  
  portfolioForm: FormGroup;
  totalValue = 0;
  totalInvested = 0;
  totalGain = 0;
  totalGainPercent = 0;

  constructor(
    private portfolioService: PortfolioService,
    private cryptoService: CryptoService,
    private toast: ToastService,
    private fb: FormBuilder
  ) {
    this.portfolioForm = this.fb.group({
      crypto_code: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(0.00001)]],
      purchase_price: [0, [Validators.required, Validators.min(0)]],
      purchase_date: ['', Validators.required],
      notes: [''],
      keepOpen: [false]
    });
  }

  ngOnInit(): void {
    this.loadPortfolio();
    this.loadCryptos();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadPortfolio(): void {
    this.loading = true;
    this.portfolioService.getPortfolio()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (items) => {
          this.portfolioItems = items;
          this.calculateTotals();
          this.loading = false;
        },
        error: (err) => {
          this.toast.error('Erro ao carregar portfólio');
          this.loading = false;
        }
      });
  }

  loadCryptos(): void {
    this.cryptoService.getCryptocurrencies(1, 100)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (cryptos) => {
          this.filteredCryptos = cryptos;
        },
        error: (err) => {
          this.toast.error('Erro ao carregar criptomoedas');
        }
      });
  }

  calculateTotals(): void {
    this.totalValue = 0;
    this.totalInvested = 0;

    this.portfolioItems.forEach(item => {
      const currentValue = item.quantity * (item.current_price || item.purchase_price);
      const invested = item.quantity * item.purchase_price;
      
      this.totalValue += currentValue;
      this.totalInvested += invested;
    });

    this.totalGain = this.totalValue - this.totalInvested;
    this.totalGainPercent = this.totalInvested > 0 ? (this.totalGain / this.totalInvested) * 100 : 0;
  }

  toggleForm(): void {
    if (this.showForm) {
      this.closeForm();
    } else {
      this.openForm();
    }
  }

  openForm(): void {
    this.showForm = true;
    this.editingId = null;
    this.portfolioForm.reset({
      crypto_code: '',
      quantity: 0,
      purchase_price: 0,
      purchase_date: new Date().toISOString().substring(0, 10),
      notes: '',
      keepOpen: false
    });
  }

  closeForm(): void {
    this.showForm = false;
    this.editingId = null;
    this.portfolioForm.reset();
  }

  saveItem(): void {
    if (!this.portfolioForm.valid) {
      this.toast.error('Preencha todos os campos obrigatórios');
      return;
    }

    const { keepOpen, ...formData } = this.portfolioForm.value;

    if (this.editingId) {
      this.portfolioService.updatePortfolioItem(this.editingId, formData)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: () => {
            this.toast.success('Item atualizado com sucesso');
            this.closeForm();
            this.loadPortfolio();
          },
          error: () => this.toast.error('Erro ao atualizar item')
        });
    } else {
      this.portfolioService.addPortfolioItem(formData)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: () => {
            this.toast.success('Item adicionado ao portfólio');
            if (keepOpen) {
              this.portfolioForm.reset({
                crypto_code: '',
                quantity: 0,
                purchase_price: 0,
                purchase_date: formData.purchase_date,
                notes: '',
                keepOpen: true
              });
            } else {
              this.closeForm();
            }
            this.loadPortfolio();
          },
          error: () => this.toast.error('Erro ao adicionar item')
        });
    }
  }

  editItem(item: PortfolioItem): void {
    this.editingId = item.id!;
    this.portfolioForm.patchValue({
      crypto_code: item.crypto_code,
      quantity: item.quantity,
      purchase_price: item.purchase_price,
      purchase_date: item.purchase_date ? item.purchase_date.substring(0, 10) : '',
      notes: item.notes,
      keepOpen: false
    });
    this.showForm = true;
  }

  deleteItem(item: PortfolioItem): void {
    if (!confirm(`Deseja remover ${item.name || item.crypto_code} do portfólio?`)) return;

    this.portfolioService.deletePortfolioItem(item.id!)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.toast.success('Item removido do portfólio');
          this.loadPortfolio();
        },
        error: () => this.toast.error('Erro ao remover item')
      });
  }

  getCryptoName(code: string): string {
    const crypto = this.filteredCryptos.find(c => c.id === code || c.symbol?.toLowerCase() === code?.toLowerCase());
    return crypto ? `${crypto.name} (${crypto.symbol})` : code;
  }

  getCryptoImage(code: string): string {
    const crypto = this.filteredCryptos.find(c => c.id === code || c.symbol?.toLowerCase() === code?.toLowerCase());
    return crypto ? crypto.imageUrl || '' : '';
  }

  clearCryptoImage(code: string): void {
    const crypto = this.filteredCryptos.find(c => c.id === code || c.symbol?.toLowerCase() === code?.toLowerCase());
    if (crypto) {
      crypto.imageUrl = '';
    }
  }

  getGainClass(gain: number): string {
    return gain >= 0 ? 'positive' : 'negative';
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  }

  formatQuantity(quantity: number): string {
    return Number(quantity).toLocaleString('en-US', { 
      minimumFractionDigits: 2,
      maximumFractionDigits: 8 
    });
  }

  trackById(_index: number, item: PortfolioItem): number {
    return item.id || _index;
  }
}
