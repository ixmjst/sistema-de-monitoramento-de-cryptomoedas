import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface AdminUser {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
  last_login?: string | null;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string | null;
}

export interface DashboardData {
  users: {
    total_users: number;
    total_admins: number;
    total_active: number;
    total_inactive: number;
    last_login_any: string | null;
  };
  cryptocurrencies: {
    total: number;
    top: any[];
  };
  history: {
    total: number;
    action_types: number;
    last_activity: string | null;
    recent: Array<{
      action: string;
      created_at: string;
      user_name: string | null;
      crypto_name: string | null;
    }>;
  };
  system: {
    php_version: string;
    server_time: string;
    app_env: string;
  };
}

export interface AdminPasswordResetRequest {
  id: number;
  user_id: number;
  user_name: string;
  user_email: string;
  status: string;
  created_at: string;
  updated_at?: string;
}

export interface AdminCrypto {
  id: number;
  code: string;
  name: string;
  symbol: string;
  current_price: number;
  image_url?: string;
  market_cap?: number;
  market_cap_rank?: number;
  price_change_24h?: number;
}

export interface SystemInfo {
  php: any;
  database: any[];
  environment: string;
  time: string;
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:8000/api/v1/admin';

  constructor(private http: HttpClient) {}

  getDashboard(): Observable<DashboardData> {
    return this.http
      .get<ApiResponse<DashboardData>>(`${this.apiUrl}/dashboard`)
      .pipe(map(res => res.data));
  }

  getUsers(): Observable<AdminUser[]> {
    return this.http
      .get<ApiResponse<AdminUser[]>>(`${this.apiUrl}/users`)
      .pipe(map(res => res.data || []));
  }

  updateUser(id: number, changes: Partial<AdminUser>): Observable<AdminUser> {
    return this.http
      .put<ApiResponse<AdminUser>>(`${this.apiUrl}/users/${id}`, changes)
      .pipe(map(res => res.data));
  }

  deactivateUser(id: number): Observable<void> {
    return this.http
      .delete<ApiResponse<null>>(`${this.apiUrl}/users/${id}`)
      .pipe(map(() => undefined));
  }

  eliminateUser(id: number): Observable<void> {
    return this.http
      .delete<ApiResponse<null>>(`${this.apiUrl}/users/${id}/eliminate`)
      .pipe(map(() => undefined));
  }

  restoreUser(id: number): Observable<AdminUser> {
    return this.http
      .post<ApiResponse<AdminUser>>(`${this.apiUrl}/users/${id}/restore`, {})
      .pipe(map(res => res.data));
  }

  getCryptocurrencies(page = 1, limit = 50): Observable<any> {
    return this.http
      .get<ApiResponse<any>>(`${this.apiUrl}/cryptocurrencies?page=${page}&limit=${limit}`)
      .pipe(map(res => res.data));
  }

  updateCryptocurrency(id: number, data: any): Observable<any> {
    return this.http
      .put<ApiResponse<any>>(`${this.apiUrl}/cryptocurrencies/${id}`, data)
      .pipe(map(res => res.data));
  }

  deleteCryptocurrency(id: number): Observable<void> {
    return this.http
      .delete<ApiResponse<null>>(`${this.apiUrl}/cryptocurrencies/${id}`)
      .pipe(map(() => undefined));
  }

  getSystemInfo(): Observable<SystemInfo> {
    return this.http
      .get<ApiResponse<SystemInfo>>(`${this.apiUrl}/system`)
      .pipe(map(res => res.data));
  }

  createUser(data: { name: string; email: string; password: string; role: 'admin' | 'user' }): Observable<AdminUser> {
    return this.http
      .post<ApiResponse<AdminUser>>(`${this.apiUrl}/users`, data)
      .pipe(map(res => res.data));
  }

  getPasswordResetRequests(): Observable<AdminPasswordResetRequest[]> {
    return this.http
      .get<ApiResponse<AdminPasswordResetRequest[]>>(`${this.apiUrl}/password-reset-requests`)
      .pipe(map(res => res.data || []));
  }

  approvePasswordResetRequest(id: number): Observable<any> {
    return this.http
      .post<ApiResponse<any>>(`${this.apiUrl}/password-reset-requests/${id}/approve`, {})
      .pipe(map(res => res.data));
  }

  createCryptocurrency(data: Partial<AdminCrypto>): Observable<AdminCrypto> {
    return this.http
      .post<ApiResponse<AdminCrypto>>(`${this.apiUrl}/cryptocurrencies`, data)
      .pipe(map(res => res.data));
  }

  exportLogs(): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/logs/export`, { responseType: 'blob' });
  }
}
