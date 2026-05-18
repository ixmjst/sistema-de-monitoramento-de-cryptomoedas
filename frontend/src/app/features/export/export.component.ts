import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class ExportComponent {
  private apiUrl = 'http://localhost:8000/api/v1/export';
  exporting = false;

  constructor(
    private http: HttpClient,
    private toast: ToastService
  ) {}

  exportCSV(): void {
    this.exporting = true;

    this.http.get(`${this.apiUrl}/csv`, { responseType: 'blob' }).subscribe({
      next: (blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `portfolio_${new Date().toISOString().slice(0, 10)}.csv`;
        link.click();
        URL.revokeObjectURL(link.href);
        this.exporting = false;
        this.toast.success('Relatório CSV exportado com sucesso');
      },
      error: () => {
        window.open(`${this.apiUrl}/csv`, '_blank');
        this.exporting = false;
        this.toast.success('Exportação CSV iniciada');
      }
    });
  }

  exportPDF(): void {
    this.exporting = true;

    this.http.get(`${this.apiUrl}/pdf`, { responseType: 'text' }).subscribe({
      next: (html) => {
        const blob = new Blob([html], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
        URL.revokeObjectURL(url);
        this.exporting = false;
        this.toast.success('Relatório aberto — use Ctrl+P para salvar como PDF');
      },
      error: () => {
        window.open(`${this.apiUrl}/pdf`, '_blank');
        this.exporting = false;
        this.toast.success('Exportação PDF iniciada — use Ctrl+P para salvar');
      }
    });
  }
}
