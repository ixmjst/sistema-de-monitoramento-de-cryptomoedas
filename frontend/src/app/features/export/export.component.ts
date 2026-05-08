import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class ExportComponent {
  private apiUrl = 'http://localhost:8000/api/v1/export';
  exporting = false;

  constructor(private http: HttpClient) {}

  exportCSV(): void {
    this.exporting = true;
    window.open(`${this.apiUrl}/csv`, '_blank');
    setTimeout(() => this.exporting = false, 1000);
  }

  exportPDF(): void {
    this.exporting = true;
    window.open(`${this.apiUrl}/pdf`, '_blank');
    setTimeout(() => this.exporting = false, 1000);
  }
}
