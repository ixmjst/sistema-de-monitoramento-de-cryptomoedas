import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ToastService, Toast } from '../../../core/services/toast.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-toast-container',
  template: `
    <div class="toast-container">
      <div
        *ngFor="let toast of toasts"
        class="toast"
        [class.toast-success]="toast.type === 'success'"
        [class.toast-error]="toast.type === 'error'"
        [class.toast-info]="toast.type === 'info'"
        [class.toast-warning]="toast.type === 'warning'"
        @slideIn
        (click)="removeToast(toast.id)"
      >
        <span class="toast-icon">
          <svg *ngIf="toast.type === 'success'" viewBox="0 0 24 24" fill="none" width="20" height="20">
            <path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <svg *ngIf="toast.type === 'error'" viewBox="0 0 24 24" fill="none" width="20" height="20">
            <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>
            <path d="M8 8l8 8M16 8l-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <svg *ngIf="toast.type === 'info'" viewBox="0 0 24 24" fill="none" width="20" height="20">
            <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>
            <path d="M12 8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <path d="M8 12h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <svg *ngIf="toast.type === 'warning'" viewBox="0 0 24 24" fill="none" width="20" height="20">
            <path d="M12 3L2 21h20L12 3z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 10v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <circle cx="12" cy="17" r="1" fill="currentColor"/>
          </svg>
        </span>
        <span class="toast-message">{{ toast.message }}</span>
      </div>
    </div>
  `,
  styles: [`
    .toast-container {
      position: fixed;
      top: 1rem;
      right: 1rem;
      z-index: 10000;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      pointer-events: none;
    }
    .toast {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.875rem 1.25rem;
      border-radius: 0.75rem;
      background: var(--layout-surface);
      border: 1px solid var(--surface-border);
      box-shadow: 0 8px 32px rgba(0,0,0,0.18);
      backdrop-filter: blur(20px);
      cursor: pointer;
      pointer-events: auto;
      min-width: 280px;
      max-width: 420px;
      animation: toastSlideIn 0.3s ease-out;
    }
    .toast-icon {
      display: flex;
      align-items: center;
      flex-shrink: 0;
    }
    .toast-message {
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--color-text-primary);
    }
    .toast-success { border-left: 4px solid var(--color-gain); }
    .toast-success .toast-icon { color: var(--color-gain); }
    .toast-error { border-left: 4px solid var(--color-loss); }
    .toast-error .toast-icon { color: var(--color-loss); }
    .toast-info { border-left: 4px solid var(--color-primary-light); }
    .toast-info .toast-icon { color: var(--color-primary-light); }
    .toast-warning { border-left: 4px solid var(--color-warning); }
    .toast-warning .toast-icon { color: var(--color-warning); }
    @keyframes toastSlideIn {
      from { opacity: 0; transform: translateX(100%) scale(0.9); }
      to { opacity: 1; transform: translateX(0) scale(1); }
    }
  `]
})
export class ToastContainerComponent implements OnInit, OnDestroy {
  toasts: Toast[] = [];
  private destroy$ = new Subject<void>();

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.toastService.toasts$.pipe(takeUntil(this.destroy$)).subscribe(toast => {
      this.toasts.push(toast);
      setTimeout(() => this.removeToast(toast.id), toast.duration || 3000);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  removeToast(id: number): void {
    this.toasts = this.toasts.filter(t => t.id !== id);
  }
}
