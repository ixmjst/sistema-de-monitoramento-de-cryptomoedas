# Componentes Reutilizáveis - CryptoMonitor

## 📦 Componentes Compartilhados Disponíveis

### Layout Components

#### 1. Layout Component
```typescript
// Uso em features
// O componente envolver automaticamente o conteúdo com navbar, sidebar e footer
<app-layout>
  <router-outlet></router-outlet>
</app-layout>
```

#### 2. Navbar Component
- Busca de criptomoedas
- Theme switcher
- Language switcher
- Menu de usuário

#### 3. Sidebar Component
- Menu de navegação
- Links para features
- Responsivo (colapse em mobile)

#### 4. Footer Component
- Links úteis
- Redes sociais
- Copyright

### Utility Components

#### Theme Switch
```html
<app-theme-switch></app-theme-switch>
```
Alternância automática entre tema claro/escuro

#### Language Switch
```html
<app-language-switch></app-language-switch>
```
Seleção entre Português e Inglês

## 🎨 CSS Classes Utilitárias

### Flexbox
```html
<div class="flex">Item 1</div>
<div class="flex flex-center">Centralizado</div>
<div class="flex flex-between">Espaço entre</div>
<div class="flex flex-col gap-md">Coluna com gap</div>
```

### Grid
```html
<div class="grid grid-2">
  <div>1</div>
  <div>2</div>
</div>

<div class="grid grid-3">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

<div class="grid grid-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

### Espaçamentos
```html
<h2 class="mt-lg mb-md">Título</h2>
<p class="mt-sm mb-lg">Parágrafo</p>
```

### Cores de Texto
```html
<p class="text-muted">Texto mutado (secundário)</p>
<a href="">Link com cor primária</a>
```

### Utilitários
```html
<p class="text-center">Centralizado</p>
<p class="text-right">Alinhado à direita</p>
<p class="truncate">Truncado com ellipsis...</p>
<div class="opacity-50">Com opacidade 50%</div>
<button class="cursor-pointer">Clicável</button>
```

## 🎯 Botões

### Variações
```html
<button class="btn btn-primary">Primário</button>
<button class="btn btn-secondary">Secundário</button>
<button class="btn btn-success">Sucesso</button>
<button class="btn btn-danger">Perigo</button>
```

### Tamanhos
```html
<button class="btn btn-primary btn-sm">Pequeno</button>
<button class="btn btn-primary">Normal</button>
<button class="btn btn-primary btn-lg">Grande</button>
```

### Estados
```html
<button class="btn btn-primary" disabled>Desabilitado</button>
```

## 🏷️ Cards

### Card Básico
```html
<div class="card">
  <h3>Título do Card</h3>
  <p>Conteúdo do card</p>
</div>
```

### Card com Estrutura
```html
<div class="card">
  <div class="card-header">
    <h3>Título</h3>
    <button class="btn btn-sm">Ação</button>
  </div>
  <div class="card-body">
    Conteúdo principal
  </div>
  <div class="card-footer">
    <p>Informação adicional</p>
  </div>
</div>
```

## 📝 Inputs

### Input de Texto
```html
<input type="text" placeholder="Digite algo..." />
<input type="email" placeholder="Email..." />
<input type="password" placeholder="Senha..." />
```

### Textarea
```html
<textarea placeholder="Digite uma mensagem..."></textarea>
```

### Select
```html
<select>
  <option>Opção 1</option>
  <option>Opção 2</option>
</select>
```

### Estados
```html
<input disabled placeholder="Desabilitado" />
<input placeholder="Focado automaticamente" autofocus />
```

## 🏷️ Badges

### Cores
```html
<span class="badge badge-primary">Primário</span>
<span class="badge badge-success">Sucesso</span>
<span class="badge badge-warning">Aviso</span>
<span class="badge badge-danger">Perigo</span>
```

## 🎬 Animações

### Classes
```html
<!-- Fade in -->
<div class="fade-in">Desaparece gradualmente</div>

<!-- Slide in up -->
<div class="slide-in-up">Desliza de baixo</div>

<!-- Pulse -->
<div class="pulse">Pulsa continuamente</div>
```

## 📊 Padrões Comuns

### Loading State
```html
<div *ngIf="loading$ | async; else content">
  <p class="text-center pulse">Carregando...</p>
</div>
<ng-template #content>
  <!-- Seu conteúdo aqui -->
</ng-template>
```

### Empty State
```html
<div *ngIf="(items$ | async)?.length === 0" class="text-center">
  <p class="text-muted mb-lg">Nenhum item encontrado</p>
  <button class="btn btn-primary">Criar novo</button>
</div>
```

### Error State
```html
<div *ngIf="error$ | async as error" class="card" style="border-left: 4px solid var(--color-error);">
  <p class="text-danger">{{ error }}</p>
</div>
```

## 🔧 Customizações

### Alterar Cor de um Elemento
```html
<div style="color: var(--color-primary-light);">
  Texto em azul claro
</div>
```

### Gradiente Customizado
```html
<button style="background: var(--gradient-success);">
  Botão com gradiente de sucesso
</button>
```

### Espaçamento Customizado
```html
<div style="padding: var(--spacing-2xl) var(--spacing-xl);">
  Espaçamento customizado
</div>
```

## 📚 Exemplos de Uso em Componentes

### Layout Básico com Cards
```html
<div class="container">
  <h1 class="mb-lg">Dashboard</h1>
  
  <div class="grid grid-3">
    <div class="card">
      <h3>Estatística 1</h3>
      <p class="text-muted">Valor: 1.234</p>
    </div>
    <div class="card">
      <h3>Estatística 2</h3>
      <p class="text-muted">Valor: 5.678</p>
    </div>
    <div class="card">
      <h3>Estatística 3</h3>
      <p class="text-muted">Valor: 9.012</p>
    </div>
  </div>
</div>
```

### Form com Validação
```html
<form class="card" [formGroup]="form">
  <h2 class="mb-lg">Formulário</h2>
  
  <div class="form-group mb-lg">
    <label>Email</label>
    <input 
      type="email" 
      formControlName="email"
      [class.is-invalid]="form.get('email')?.invalid"
    />
    <p class="text-danger" *ngIf="form.get('email')?.invalid">
      Email inválido
    </p>
  </div>
  
  <button class="btn btn-primary" [disabled]="form.invalid">
    Enviar
  </button>
</form>
```

### Lista com Ações
```html
<div class="card">
  <div class="card-header mb-md">
    <h3>Itens</h3>
    <button class="btn btn-success btn-sm">+ Novo</button>
  </div>
  
  <div class="card-body">
    <div *ngFor="let item of items$ | async; trackBy: trackById" 
         class="flex flex-between mb-md p-md" 
         style="background: var(--color-bg-tertiary); border-radius: var(--radius-lg);">
      <span>{{ item.name }}</span>
      <div class="flex gap-sm">
        <button class="btn btn-sm">Editar</button>
        <button class="btn btn-danger btn-sm">Deletar</button>
      </div>
    </div>
  </div>
</div>
```

## 🚀 Dicas de Performance

1. **Use `trackBy` em `*ngFor`**: Melhora performance de listas
2. **Use `OnPush` ChangeDetection**: Em componentes puros
3. **Lazy load modules**: Feature modules carregam sob demanda
4. **Use `async` pipe**: Evita memory leaks de subscriptions
5. **Minimize CSS**: Variáveis CSS reutilizáveis

## 📖 Próximos Passos

Componentes ainda a implementar:
- [ ] DataTable component (com paginação, sorting, filtering)
- [ ] Modal/Dialog component
- [ ] Toast/Notification component
- [ ] Spinner/Loading component
- [ ] Breadcrumb component
- [ ] Tabs component
- [ ] Pagination component
