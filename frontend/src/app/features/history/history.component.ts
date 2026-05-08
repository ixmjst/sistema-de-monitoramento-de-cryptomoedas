import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  history: any[] = [];
  loading = true;
  private apiUrl = 'http://localhost:8000/api/v1/history';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadHistory();
  }

  loadHistory(): void {
    this.loading = true;
    this.http.get<any>(this.apiUrl).subscribe({
      next: (response) => {
        this.history = response.data || [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleString();
  }

  getActionIcon(action: string): string {
    const icons: any = {
      'buy': '💰',
      'sell': '💸',
      'favorite': '⭐',
      'view': '👁️',
      'price_alert': '🔔'
    };
    return icons[action] || '📝';
  }
}
