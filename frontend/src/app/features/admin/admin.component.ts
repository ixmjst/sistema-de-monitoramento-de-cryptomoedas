import { Component, OnInit } from '@angular/core';
import { AdminService, AdminUser, AdminPasswordResetRequest, DashboardData, AdminCrypto, SystemInfo } from '../../core/services/admin.service';
import { ToastService } from '../../core/services/toast.service';

interface NewUser {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
}

interface NewCrypto {
  name: string;
  symbol: string;
  code: string;
  current_price: string;
  market_cap?: string;
  market_cap_rank?: string;
  price_change_24h?: string;
}

interface AdminHealthItem {
  label: string;
  value: string;
  status: 'ok' | 'warn' | 'danger';
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  activeTab: 'dashboard' | 'users' | 'cryptocurrencies' | 'system' | 'password-resets' = 'dashboard';

  // Dashboard
  dashboard: DashboardData | null = null;

  // Users
  users: AdminUser[] = [];
  filteredUsers: AdminUser[] = [];
  searchQuery = '';
  showNewUserForm = false;
  newUser: NewUser = { name: '', email: '', password: '', role: 'user' };

  // Password reset requests
  passwordResetRequests: AdminPasswordResetRequest[] = [];
  loadingRequests = false;
  approvingId: number | null = null;

  // Cryptocurrencies
  cryptos: AdminCrypto[] = [];
  filteredCryptos: AdminCrypto[] = [];
  cryptoPage = 1;
  cryptoTotal = 0;
  cryptoTotalPages = 0;
  cryptoLimit = 10;
  cryptoSearchQuery = '';
  showNewCryptoForm = false;
  editingCrypto: AdminCrypto | null = null;
  newCrypto: NewCrypto = { name: '', symbol: '', code: '', current_price: '', market_cap: '', market_cap_rank: '', price_change_24h: '' };

  // System
  systemInfo: SystemInfo | null = null;

  loading: {
    dashboard: boolean;
    users: boolean;
    cryptocurrencies: boolean;
    system: boolean;
    requests: boolean;
  } = {
    dashboard: false,
    users: false,
    cryptocurrencies: false,
    system: false,
    requests: false
  };
  savingId: number | null = null;

  constructor(
    private adminService: AdminService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadDashboard();
  }

  setTab(tab: 'dashboard' | 'users' | 'cryptocurrencies' | 'system' | 'password-resets'): void {
    this.activeTab = tab;
    if (tab === 'users' && this.users.length === 0) this.loadUsers();
    if (tab === 'cryptocurrencies' && this.cryptos.length === 0) this.loadCryptos();
    if (tab === 'system' && !this.systemInfo) this.loadSystemInfo();
    if (tab === 'password-resets' && this.passwordResetRequests.length === 0) this.loadPasswordResetRequests();
  }

  refreshActiveTab(): void {
    if (this.activeTab === 'dashboard') {
      this.loadDashboard();
    } else if (this.activeTab === 'users') {
      this.loadUsers();
    } else if (this.activeTab === 'cryptocurrencies') {
      this.loadCryptos(this.cryptoPage);
    } else if (this.activeTab === 'system') {
      this.loadSystemInfo();
    } else if (this.activeTab === 'password-resets') {
      this.loadPasswordResetRequests();
    }
  }

  exportLogs(): void {
    this.adminService.exportLogs().subscribe({
      next: (blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `cryptomonitor_logs_${new Date().toISOString().slice(0, 10)}.csv`;
        link.click();
        URL.revokeObjectURL(link.href);
        this.toast.success('Logs exportados com sucesso');
      },
      error: (err) => {
        console.error('Erro ao exportar logs:', err);
        this.toast.error('Falha ao exportar os logs. Tente novamente.');
      }
    });
  }

  get isLoadingActiveTab(): boolean {
    switch (this.activeTab) {
      case 'dashboard': return this.loading.dashboard;
      case 'users': return this.loading.users;
      case 'cryptocurrencies': return this.loading.cryptocurrencies;
      case 'system': return this.loading.system;
      case 'password-resets': return this.loading.requests;
    }
  }

  get inactiveUserRate(): number {
    return this.totalUsers ? (this.inactiveUsersCount / this.totalUsers) * 100 : 0;
  }

  get adminUserRate(): number {
    return this.totalUsers ? (this.adminCount / this.totalUsers) * 100 : 0;
  }

  get adminHealthItems(): AdminHealthItem[] {
    if (!this.dashboard) {
      return [];
    }

    const inactiveRate = this.dashboard.users.total_users
      ? (this.dashboard.users.total_inactive / this.dashboard.users.total_users) * 100
      : 0;
    const adminRate = this.dashboard.users.total_users
      ? (this.dashboard.users.total_admins / this.dashboard.users.total_users) * 100
      : 0;
    const lastActivity = this.hoursSince(this.dashboard.history.last_activity);

    return [
      {
        label: 'Ambiente',
        value: this.dashboard.system.app_env || '-',
        status: this.dashboard.system.app_env === 'production' ? 'ok' : 'warn'
      },
      {
        label: 'Utilizadores inativos',
        value: `${inactiveRate.toFixed(1)}%`,
        status: inactiveRate > 30 ? 'warn' : 'ok'
      },
      {
        label: 'Proporção de administradores',
        value: `${adminRate.toFixed(1)}%`,
        status: adminRate > 25 ? 'warn' : 'ok'
      },
      {
        label: 'Atividade recente',
        value: lastActivity === null ? '-' : `${lastActivity.toFixed(1)}h`,
        status: lastActivity === null || lastActivity > 24 ? 'warn' : 'ok'
      }
    ];
  }

  get adminRecommendations(): string[] {
    const items: string[] = [];
    if (!this.dashboard) {
      return items;
    }

    if (this.dashboard.users.total_admins === 0) {
      items.push('Criar pelo menos um administrador de reserva para recuperação operacional.');
    }
    if (this.dashboard.users.total_admins > Math.max(2, this.dashboard.users.total_users * 0.25)) {
      items.push('Rever perfis de admin: há uma proporção alta de administradores.');
    }
    if (this.dashboard.users.total_inactive > 0) {
      items.push('Auditar utilizadores inativos e restaurar ou remover acessos desnecessários.');
    }
    if (!this.dashboard.history.last_activity) {
      items.push('Ativar monitoramento de histórico para rastrear ações sensíveis.');
    }
    if (items.length === 0) {
      items.push('Estado operacional saudável. Continue acompanhando acessos, histórico e dados de mercado.');
    }
    return items;
  }

  loadDashboard(): void {
    this.loading.dashboard = true;
    this.adminService.getDashboard().subscribe({
      next: data => {
        this.dashboard = data || {} as DashboardData;
        this.loading.dashboard = false;
      },
      error: (err) => {
        console.error('Erro ao carregar dashboard:', err);
        this.loading.dashboard = false;
        this.toast.error('Erro ao carregar dashboard');
      }
    });
  }

  loadUsers(): void {
    this.loading.users = true;
    this.adminService.getUsers().subscribe({
      next: users => {
        this.users = users;
        this.applyFilter();
        this.loading.users = false;
      },
      error: () => { this.loading.users = false; this.toast.error('Erro ao carregar utilizadores'); }
    });
  }

  loadPasswordResetRequests(): void {
    this.loading.requests = true;
    this.adminService.getPasswordResetRequests().subscribe({
      next: requests => {
        this.passwordResetRequests = requests;
        this.loading.requests = false;
      },
      error: () => {
        this.loading.requests = false;
        this.toast.error('Erro ao carregar pedidos de recuperação de senha');
      }
    });
  }

  approveResetRequest(requestId: number): void {
    this.approvingId = requestId;
    this.adminService.approvePasswordResetRequest(requestId).subscribe({
      next: (data) => {
        this.passwordResetRequests = this.passwordResetRequests.filter(r => r.id !== requestId);
        this.approvingId = null;
        const token = data?.token;
        if (token) {
          alert(`Pedido aprovado com sucesso!\n\nCódigo de Redefinição: ${token}\n\nPor favor, copie e envie este código ao utilizador para que ele possa redefinir a senha.`);
        } else {
          this.toast.success('Pedido aprovado com sucesso');
        }
      },
      error: () => {
        this.approvingId = null;
        this.toast.error('Erro ao aprovar o pedido de recuperação');
      }
    });
  }

  applyFilter(): void {
    const q = this.searchQuery.trim().toLowerCase();
    this.filteredUsers = !q ? [...this.users] : this.users.filter(u =>
      (u.name || '').toLowerCase().includes(q) || 
      (u.email || '').toLowerCase().includes(q) || 
      (u.role || '').toLowerCase().includes(q)
    );
  }

  get totalUsers(): number { return this.users.length; }
  get adminCount(): number { return this.users.filter(u => u.role === 'admin').length; }
  get activeUsersCount(): number { return this.users.filter(u => !u.deleted_at).length; }
  get inactiveUsersCount(): number { return this.users.filter(u => !!u.deleted_at).length; }

  onSearchChange(value: string): void {
    this.searchQuery = value;
    this.applyFilter();
  }

  getUserInitial(name: string): string {
    return name?.charAt(0) || '?';
  }

  cryptoPageIndex(i: number): number {
    return (this.cryptoPage - 1) * this.cryptoLimit + i + 1;
  }

  loadCryptos(page = 1): void {
    this.loading.cryptocurrencies = true;
    this.adminService.getCryptocurrencies(page, this.cryptoLimit).subscribe({
      next: data => {
        this.cryptoPage = data?.page || page;
        this.cryptoTotalPages = data?.totalPages || 1;
        this.cryptos = Array.isArray(data?.data) ? data.data : (Array.isArray(data) ? data : []);
        this.filteredCryptos = [...this.cryptos];
        this.cryptoTotal = data?.total || this.cryptos.length;
        this.applyCryptoFilter();
        this.loading.cryptocurrencies = false;
      },
      error: (err) => {
        console.error('Erro ao carregar criptomoedas:', err);
        this.loading.cryptocurrencies = false;
        this.toast.error('Erro ao carregar criptomoedas');
      }
    });
  }

  onCryptoSearchChange(value: string): void {
    this.cryptoSearchQuery = value;
    this.applyCryptoFilter();
  }

  changeCryptoPage(page: number): void {
    if (page < 1 || page > this.cryptoTotalPages || page === this.cryptoPage) {
      return;
    }
    this.loadCryptos(page);
  }

  updateUser(user: AdminUser, changes: Partial<AdminUser>): void {
    this.savingId = user.id;
    this.adminService.updateUser(user.id, changes).subscribe({
      next: updated => {
        this.replaceUser(updated);
        this.savingId = null;
        this.toast.success('Utilizador atualizado');
      },
      error: () => { this.savingId = null; this.toast.error('Erro ao atualizar'); }
    });
  }

  deactivateUser(user: AdminUser): void {
    this.savingId = user.id;
    this.adminService.deactivateUser(user.id).subscribe({
      next: () => {
        this.replaceUser({ ...user, deleted_at: new Date().toISOString() });
        this.savingId = null;
        this.toast.success('Utilizador desativado');
      },
      error: () => { this.savingId = null; this.toast.error('Erro ao desativar'); }
    });
  }

  restoreUser(user: AdminUser): void {
    this.savingId = user.id;
    this.adminService.restoreUser(user.id).subscribe({
      next: updated => {
        this.replaceUser(updated);
        this.savingId = null;
        this.toast.success('Utilizador restaurado');
      },
      error: () => { this.savingId = null; this.toast.error('Erro ao restaurar'); }
    });
  }

  createUser(): void {
    if (!this.newUser.name || !this.newUser.email || !this.newUser.password) {
      this.toast.error('Preencha todos os campos do formulário de utilizador.');
      return;
    }

    this.adminService.createUser(this.newUser).subscribe({
      next: user => {
        this.users.unshift(user);
        this.applyFilter();
        this.newUser = { name: '', email: '', password: '', role: 'user' };
        this.showNewUserForm = false;
        this.toast.success('Novo utilizador criado com sucesso');
      },
      error: (err) => {
        console.error('Erro ao criar utilizador:', err);
        this.toast.error(err?.error?.message || 'Erro ao criar utilizador');
      }
    });
  }

  editCrypto(crypto: AdminCrypto): void {
    this.editingCrypto = { ...crypto };
  }

  cancelEditCrypto(): void {
    this.editingCrypto = null;
  }

  saveCryptoChanges(): void {
    if (!this.editingCrypto) {
      return;
    }

    const payload: Partial<AdminCrypto> = {
      name: this.editingCrypto.name,
      symbol: this.editingCrypto.symbol,
      current_price: this.editingCrypto.current_price ? Number(this.editingCrypto.current_price) : 0,
      image_url: this.editingCrypto.image_url,
      market_cap: this.editingCrypto.market_cap ? Number(this.editingCrypto.market_cap) : undefined,
      market_cap_rank: this.editingCrypto.market_cap_rank ? Number(this.editingCrypto.market_cap_rank) : undefined,
      price_change_24h: this.editingCrypto.price_change_24h ? Number(this.editingCrypto.price_change_24h) : undefined
    };

    this.savingId = this.editingCrypto.id;
    this.adminService.updateCryptocurrency(this.editingCrypto.id, payload).subscribe({
      next: updated => {
        this.replaceCrypto(updated);
        this.editingCrypto = null;
        this.savingId = null;
        this.toast.success('Criptomoeda atualizada');
      },
      error: () => {
        this.savingId = null;
        this.toast.error('Erro ao atualizar criptomoeda');
      }
    });
  }

  createCrypto(): void {
    if (!this.newCrypto.name || !this.newCrypto.symbol || !this.newCrypto.code || this.newCrypto.current_price === '' || this.newCrypto.current_price === null || this.newCrypto.current_price === undefined) {
      this.toast.error('Preencha os campos obrigatórios da criptomoeda.');
      return;
    }

    const payload: Partial<AdminCrypto> = {
      name: this.newCrypto.name,
      symbol: this.newCrypto.symbol,
      code: this.newCrypto.code,
      current_price: this.newCrypto.current_price ? Number(this.newCrypto.current_price) : 0,
      market_cap: this.newCrypto.market_cap ? Number(this.newCrypto.market_cap) : undefined,
      market_cap_rank: this.newCrypto.market_cap_rank ? Number(this.newCrypto.market_cap_rank) : undefined,
      price_change_24h: this.newCrypto.price_change_24h ? Number(this.newCrypto.price_change_24h) : undefined
    };

    this.adminService.createCryptocurrency(payload).subscribe({
      next: crypto => {
        this.cryptos.unshift(crypto);
        this.applyCryptoFilter();
        this.newCrypto = { name: '', symbol: '', code: '', current_price: '', market_cap: '', market_cap_rank: '', price_change_24h: '' };
        this.showNewCryptoForm = false;
        this.toast.success('Criptomoeda adicionada com sucesso');
      },
      error: (err) => {
        console.error('Erro ao criar criptomoeda:', err);
        this.toast.error(err?.error?.message || 'Erro ao criar criptomoeda');
      }
    });
  }

  deleteCrypto(id: number): void {
    this.savingId = id;
    this.adminService.deleteCryptocurrency(id).subscribe({
      next: () => {
        this.cryptos = this.cryptos.filter(c => c.id !== id);
        this.filteredCryptos = this.filteredCryptos.filter(c => c.id !== id);
        this.cryptoTotal = Math.max(0, this.cryptoTotal - 1);
        this.savingId = null;
        this.toast.success('Criptomoeda eliminada');
      },
      error: () => {
        this.savingId = null;
        this.toast.error('Erro ao eliminar criptomoeda');
      }
    });
  }

  applyCryptoFilter(): void {
    const q = this.cryptoSearchQuery.trim().toLowerCase();
    this.filteredCryptos = !q ? [...this.cryptos] : this.cryptos.filter(c =>
      (c.name || '').toLowerCase().includes(q) ||
      (c.symbol || '').toLowerCase().includes(q) ||
      (c.code || '').toLowerCase().includes(q)
    );
  }

  loadSystemInfo(): void {
    this.loading.system = true;
    this.adminService.getSystemInfo().subscribe({
      next: info => {
        this.systemInfo = info || {} as SystemInfo;
        this.loading.system = false;
      },
      error: (err) => {
        console.error('Erro ao carregar info do sistema:', err);
        this.loading.system = false;
        this.toast.error('Erro ao carregar info do sistema');
      }
    });
  }

  formatDate(value?: string | null): string {
    if (!value) return '-';
    return new Intl.DateTimeFormat('pt-PT', {
      day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    }).format(new Date(value));
  }

  toNumber(value: any): number {
    return Number(value) || 0;
  }

  formatBytes(bytes: number): string {
    if (bytes >= 1e9) return (bytes / 1e9).toFixed(2) + ' GB';
    if (bytes >= 1e6) return (bytes / 1e6).toFixed(2) + ' MB';
    if (bytes >= 1e3) return (bytes / 1e3).toFixed(2) + ' KB';
    return bytes + ' B';
  }

  private hoursSince(value?: string | null): number | null {
    if (!value) return null;
    const timestamp = new Date(value).getTime();
    if (!Number.isFinite(timestamp)) return null;
    return Math.max(0, (Date.now() - timestamp) / 3600000);
  }

  private replaceUser(user: AdminUser): void {
    this.users = this.users.map(u => u.id === user.id ? user : u);
    this.applyFilter();
  }

  private replaceCrypto(crypto: AdminCrypto): void {
    this.cryptos = this.cryptos.map(c => c.id === crypto.id ? crypto : c);
    this.filteredCryptos = this.filteredCryptos.map(c => c.id === crypto.id ? crypto : c);
  }
}
