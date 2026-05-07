# Guia de Desenvolvimento - CryptoMonitor

## 📖 Introdução

Este documento serve como guia completo para desenvolvedores que trabalham no projeto CryptoMonitor. Ele cobre configuração do ambiente, convenções de código, estrutura de arquivos e fluxo de trabalho.

## 🛠️ Configuração do Ambiente

### Windows (PowerShell)

```powershell
# Frontend
cd frontend
npm install
npm start

# Backend (outro terminal)
cd backend
composer install
php -S localhost:8000 -t public
```

### Linux/Mac

```bash
# Frontend
cd frontend
npm install
npm start

# Backend (outro terminal)
cd backend
composer install
php -S localhost:8000 -t public
```

## 📐 Estrutura e Convenções Frontend

### Nomeação de Arquivos

- **Components**: `feature-name.component.ts` (kebab-case)
- **Services**: `feature-name.service.ts` (kebab-case)
- **Modules**: `feature-name.module.ts` (kebab-case)
- **Models/Interfaces**: `feature-name.model.ts` (kebab-case)

### Estrutura de Componentes

```typescript
// Arquivo: feature-name.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-feature-name',
  templateUrl: './feature-name.component.html',
  styleUrls: ['./feature-name.component.scss'],
})
export class FeatureNameComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(private service: FeatureService) {}

  ngOnInit(): void {
    // Inicialização
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
```

### Estrutura de Serviços

```typescript
// Arquivo: feature-name.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  private apiUrl = 'http://localhost:8000/api/feature';
  private dataSubject = new BehaviorSubject<any>(null);
  public data$ = this.dataSubject.asObservable();

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
```

## 🎨 Sistema de Design (Design System)

### Variáveis CSS Disponíveis

#### Cores Primárias
```scss
// Uso em componentes
background: var(--color-bg-primary);
color: var(--color-text-primary);
border-color: var(--color-primary-light);

// Gradientes
background: var(--gradient-primary);
background: var(--gradient-success);
background: var(--gradient-error);
```

#### Espaçamentos
```scss
padding: var(--spacing-lg);
margin: var(--spacing-md);
gap: var(--spacing-sm);
```

#### Border Radius
```scss
border-radius: var(--radius-lg);   // Para cards
border-radius: var(--radius-full); // Para buttons
```

#### Sombras
```scss
box-shadow: var(--shadow-md);  // Cards padrão
box-shadow: var(--shadow-lg);  // Hover effects
```

### Usando Classes Utilitárias

```html
<!-- Flexbox -->
<div class="flex flex-center gap-md">
  <span>Centered content</span>
</div>

<!-- Grid -->
<div class="grid grid-3">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>

<!-- Espaçamentos -->
<h2 class="mt-lg mb-md">Título</h2>

<!-- Texto -->
<p class="text-muted">Texto secundário</p>
```

## 🌐 Sistema de Tradução (i18n)

### Adicionar Nova Tradução

1. **Editar arquivos de tradução**:
   - `frontend/src/locales/pt.json` (Português)
   - `frontend/src/locales/en.json` (Inglês)

```json
{
  "nova_secao": {
    "campo": "Valor em Português"
  }
}
```

2. **Usar em componentes**:

```html
<h1>{{ 'nova_secao.campo' | translate }}</h1>
```

```typescript
constructor(private translate: TranslateService) {}

label = this.translate.instant('nova_secao.campo');
```

## 🎯 Criar um Novo Feature Module

### 1. Criar estrutura

```bash
mkdir -p frontend/src/app/features/novo-feature
```

### 2. Criar módulo

```typescript
// novo-feature.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovoFeatureRoutingModule } from './novo-feature-routing.module';
import { NovoFeatureComponent } from './novo-feature.component';

@NgModule({
  declarations: [NovoFeatureComponent],
  imports: [CommonModule, NovoFeatureRoutingModule],
})
export class NovoFeatureModule {}
```

### 3. Criar roteamento

```typescript
// novo-feature-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovoFeatureComponent } from './novo-feature.component';

const routes: Routes = [
  {
    path: '',
    component: NovoFeatureComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovoFeatureRoutingModule {}
```

### 4. Adicionar ao app-routing.module.ts

```typescript
{
  path: 'novo-feature',
  loadChildren: () =>
    import('./features/novo-feature/novo-feature.module').then(
      (m) => m.NovoFeatureModule
    ),
},
```

## 📝 Boas Práticas de Código

### TypeScript
- Usar tipos sempre (evitar `any`)
- Interfaces para contratos de dados
- Enums para valores constantes

```typescript
// ✅ Bom
interface User {
  id: number;
  email: string;
  role: UserRole;
}

enum UserRole {
  Admin = 'admin',
  User = 'user',
}

// ❌ Ruim
const user: any = { ...data };
```

### RxJS
- Usar `takeUntil` para cleanup de subscriptions
- Evitar subscriptions diretas quando possível
- Usar o operador `async` no template

```typescript
// ✅ Bom
export class MyComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  data$ = this.service.getData();

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

// Template
<div>{{ data$ | async }}</div>

// ❌ Evitar
this.service.getData().subscribe(data => {
  this.data = data;
  // Risco de memory leak se não fizer unsubscribe
});
```

### HTML Templates
- Usar `trackBy` em `*ngFor`
- Manter lógica complexa fora do template
- Usar `OnPush` change detection quando possível

```typescript
// ✅ Bom
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyComponent {
  items$ = this.service.getItems();

  trackByFn(index: number, item: Item): number {
    return item.id;
  }
}
```

```html
<div *ngFor="let item of items$ | async; trackBy: trackByFn">
  {{ item.name }}
</div>
```

## 🧪 Testes

### Testar Componentes

```bash
npm test
```

### Escrever Testes

```typescript
// feature-name.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureNameComponent } from './feature-name.component';

describe('FeatureNameComponent', () => {
  let component: FeatureNameComponent;
  let fixture: ComponentFixture<FeatureNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureNameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

## 🔒 Segurança

### Interceptor de Autenticação

O projeto já possui `AuthInterceptor` que adiciona token JWT a todas as requisições.

```typescript
// Todos os requests incluem automaticamente:
// Authorization: Bearer <token>
```

### Validação de Input

```typescript
// Sempre validar entrada
if (!email || !email.includes('@')) {
  throw new Error('Invalid email');
}
```

## 📱 Responsividade

### Breakpoints

```scss
// Desktop: > 1200px (padrão)
// Tablet: 768px - 1199px
// Mobile: < 767px

@media (max-width: 1199px) {
  // Tablet styles
}

@media (max-width: 767px) {
  // Mobile styles
}
```

## 🚀 Build e Deploy

### Development
```bash
npm start
```

### Production Build
```bash
npm run build
# Gera arquivos em: frontend/dist/crypto-monitor
```

### Lint
```bash
npm run lint
```

## 📊 Monitoramento e Debugging

### Usar Angular DevTools
- Instalar extensão no Chrome: "Angular DevTools"
- Acessar tab "Angular" no DevTools

### Debugging
```typescript
// Usar console.log com cuidado
console.log('Debug:', data);

// Melhor usar breakpoints no debugger do navegador
debugger; // O código para aqui se DevTools aberto
```

## 🐛 Troubleshooting

### Porta 4200 já em uso
```bash
ng serve --port 4300
```

### Cache de npm
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Problemas com tipos TypeScript
```bash
npm install --save-dev @types/nome-biblioteca
```

## 📚 Recursos Úteis

- [Angular Docs](https://angular.io/docs)
- [RxJS Docs](https://rxjs.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Material Design](https://material.io/design)

## ✅ Checklist para Pull Request

- [ ] Código segue as convenções do projeto
- [ ] Testes unitários adicionados/atualizados
- [ ] Sem console.log ou debugger
- [ ] Responsividade testada (desktop, tablet, mobile)
- [ ] Sem dependências externas desnecessárias
- [ ] Mensagem de commit clara e descritiva
- [ ] README.md atualizado se necessário
- [ ] Traduções adicionadas (pt.json e en.json)

## 📞 Suporte

Em caso de dúvidas, consulte:
1. Documentação do projeto
2. Comentários no código
3. Issues no GitHub
4. Conversar com o time
