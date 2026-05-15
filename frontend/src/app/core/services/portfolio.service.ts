import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface PortfolioItem {
  id?: number;
  user_id?: number;
  crypto_code: string;
  name?: string;
  symbol?: string;
  quantity: number;
  purchase_price: number;
  purchase_date: string;
  current_price?: number;
  notes?: string;
  created_at?: string;
  updated_at?: string;
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = 'http://localhost:8000/api/v1/portfolio';

  constructor(private http: HttpClient) { }

  /**
   * Obtém todos os itens do portfólio do usuário
   */
  getPortfolio(): Observable<PortfolioItem[]> {
    return this.http.get<ApiResponse<PortfolioItem[]>>(this.apiUrl).pipe(
      map(res => res.data || [])
    );
  }

  /**
   * Obtém um item específico do portfólio
   */
  getPortfolioItem(id: number): Observable<PortfolioItem> {
    return this.http.get<ApiResponse<PortfolioItem>>(`${this.apiUrl}/${id}`).pipe(
      map(res => res.data)
    );
  }

  /**
   * Adiciona um novo item ao portfólio
   */
  addPortfolioItem(item: Partial<PortfolioItem>): Observable<PortfolioItem> {
    return this.http.post<ApiResponse<PortfolioItem>>(this.apiUrl, item).pipe(
      map(res => res.data)
    );
  }

  /**
   * Atualiza um item do portfólio
   */
  updatePortfolioItem(id: number, item: Partial<PortfolioItem>): Observable<PortfolioItem> {
    return this.http.put<ApiResponse<PortfolioItem>>(`${this.apiUrl}/${id}`, item).pipe(
      map(res => res.data)
    );
  }

  /**
   * Remove um item do portfólio
   */
  deletePortfolioItem(id: number): Observable<any> {
    return this.http.delete<ApiResponse<any>>(`${this.apiUrl}/${id}`).pipe(
      map(res => res.data)
    );
  }

  /**
   * Calcula o valor total do portfólio
   */
  calculatePortfolioValue(items: PortfolioItem[]): number {
    return items.reduce((total, item) => {
      const currentPrice = item.current_price || item.purchase_price;
      return total + (item.quantity * currentPrice);
    }, 0);
  }

  /**
   * Calcula o ganho/perda total
   */
  calculateTotalGain(items: PortfolioItem[]): {
    gain: number;
    gainPercent: number;
    invested: number;
  } {
    let totalInvested = 0;
    let totalValue = 0;

    items.forEach(item => {
      const invested = item.quantity * item.purchase_price;
      const currentValue = item.quantity * (item.current_price || item.purchase_price);
      totalInvested += invested;
      totalValue += currentValue;
    });

    const gain = totalValue - totalInvested;
    const gainPercent = totalInvested > 0 ? (gain / totalInvested) * 100 : 0;

    return { gain, gainPercent, invested: totalInvested };
  }

  /**
   * Exporta portfólio como CSV
   */
  exportPortfolioCSV(): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/export/csv`, {
      responseType: 'blob'
    });
  }
}
