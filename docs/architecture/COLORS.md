# Paleta de Cores - CryptoMonitor

## 🌙 Tema Escuro (Padrão)

### Cores Base
| Variável | Valor | Uso |
|----------|-------|-----|
| `--color-bg-primary` | `#0A1428` | Fundo principal |
| `--color-bg-secondary` | `#1a2332` | Fundo secundário |
| `--color-bg-tertiary` | `#2c3e50` | Fundo terciário |
| `--color-bg-hover` | `#3a4a5f` | Estados hover |

### Cores de Texto
| Variável | Valor | Uso |
|----------|-------|-----|
| `--color-text-primary` | `#e8eaed` | Texto principal |
| `--color-text-secondary` | `#b0b3b8` | Texto secundário |
| `--color-text-tertiary` | `#80838a` | Texto terciário |

### Cores Primárias
| Variável | Valor | Uso |
|----------|-------|-----|
| `--color-primary-light` | `#00d4ff` | Hover/Accent |
| `--color-primary` | `#0099ff` | Principal |
| `--color-primary-dark` | `#0066cc` | Ativo/Escuro |
| `--color-accent` | `#00ffb3` | Destaque |

### Cores de Status
| Variável | Valor | Uso |
|----------|-------|-----|
| `--color-success` | `#00d084` | Sucesso/Ganho |
| `--color-warning` | `#ffb74d` | Aviso |
| `--color-error` | `#ff6b6b` | Erro/Perda |
| `--color-info` | `#00b4ff` | Informação |

### Criptomoedas
| Variável | Valor | Uso |
|----------|-------|-----|
| `--color-bitcoin` | `#f7931a` | Bitcoin |
| `--color-ethereum` | `#627eea` | Ethereum |

## ☀️ Tema Claro

| Variável | Valor | Uso |
|----------|-------|-----|
| `--color-bg-primary` | `#ffffff` | Fundo principal |
| `--color-bg-secondary` | `#f8f9fa` | Fundo secundário |
| `--color-text-primary` | `#1a1a1a` | Texto principal |

## 🎨 Gradientes

```css
--gradient-primary: linear-gradient(135deg, #0099ff 0%, #00d4ff 100%);
--gradient-success: linear-gradient(135deg, #00d084 0%, #00ffb3 100%);
--gradient-warning: linear-gradient(135deg, #ffb74d 0%, #ffa500 100%);
--gradient-error: linear-gradient(135deg, #ff6b6b 0%, #ff5252 100%);
--gradient-crypto: linear-gradient(135deg, #0099ff 0%, #00d4ff 50%, #00ffb3 100%);
```

## 💡 Guia de Uso

### Para Botões Primários
```scss
background: var(--gradient-primary);
color: white;
```

### Para Cards
```scss
background-color: var(--color-bg-secondary);
color: var(--color-text-primary);
border-color: var(--color-bg-tertiary);
```

### Para Texto Secundário
```scss
color: var(--color-text-secondary);
```

### Para Indicadores de Ganho/Perda
```scss
// Ganho
color: var(--color-success);
background: var(--gradient-success);

// Perda
color: var(--color-error);
background: var(--gradient-error);
```

## 📐 Espaçamentos

```css
--spacing-xs: 0.25rem;    /* 4px */
--spacing-sm: 0.5rem;     /* 8px */
--spacing-md: 1rem;       /* 16px */
--spacing-lg: 1.5rem;     /* 24px */
--spacing-xl: 2rem;       /* 32px */
--spacing-2xl: 3rem;      /* 48px */
```

## 🔲 Border Radius

```css
--radius-sm: 0.375rem;    /* 6px */
--radius-md: 0.5rem;      /* 8px */
--radius-lg: 0.75rem;     /* 12px */
--radius-xl: 1rem;        /* 16px */
--radius-full: 9999px;    /* Pílula/Circular */
```

## ✨ Sombras

```css
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.15);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.2);
--shadow-xl: 0 12px 32px rgba(0, 0, 0, 0.25);
--shadow-glow: 0 0 20px rgba(0, 153, 255, 0.3);
```

## 🔄 Transições

```css
--transition-fast: 150ms ease-in-out;
--transition-base: 250ms ease-in-out;
--transition-slow: 350ms ease-in-out;
```

## 🎬 Animações Disponíveis

### Fade In
```scss
animation: fadeIn var(--transition-base);
// ou usar classe
class="fade-in"
```

### Slide In Up
```scss
animation: slideInUp var(--transition-base);
// ou usar classe
class="slide-in-up"
```

### Pulse
```scss
animation: pulse 2s;
// ou usar classe
class="pulse"
```

## 📱 Responsividade

### Desktop (Padrão)
- Layout em grid/flex completo
- Sem restrições de espaço

### Tablet (< 1200px)
```scss
@media (max-width: 1199px) {
  // Ajustes para tela média
}
```

### Mobile (< 768px)
```scss
@media (max-width: 767px) {
  // Layout single column
  // Navbar colapsada
  // Sidebar hidden
}
```

## 🎯 Componentes de Exemplo

### Botão Primário
```html
<button class="btn btn-primary">
  Clique aqui
</button>
```

### Card
```html
<div class="card">
  <div class="card-header">
    <h3>Título</h3>
  </div>
  <div class="card-body">
    Conteúdo do card
  </div>
  <div class="card-footer">
    Rodapé
  </div>
</div>
```

### Grid Responsivo
```html
<div class="grid grid-3">
  <div class="card">1</div>
  <div class="card">2</div>
  <div class="card">3</div>
</div>
```

### Badge de Status
```html
<span class="badge badge-success">Ativo</span>
<span class="badge badge-warning">Aviso</span>
<span class="badge badge-danger">Erro</span>
```
