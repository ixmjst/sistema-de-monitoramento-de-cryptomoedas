# CryptoMonitor

Sistema web completo para monitoramento de criptomoedas com autenticação JWT, favoritos, histórico e exportação de dados.

## Tecnologias

- **Frontend**: Angular 17 (TypeScript, SCSS)
- **Backend**: PHP 8.0+ (puro, sem frameworks)
- **Banco de Dados**: MySQL 8.0+
- **API Externa**: CoinGecko
- **Autenticação**: JWT

## Funcionalidades

- Autenticação completa (login/registro com JWT)
- Dashboard com top gainers/losers e visão geral do mercado
- Listagem e busca de criptomoedas em tempo real
- Gerenciamento de favoritos
- Histórico de atividades
- Exportação de dados (CSV/PDF)
- Tema claro/escuro
- Suporte a múltiplos idiomas (Português/Inglês)
- Interface responsiva (mobile, tablet, desktop)

---

## Como executar

### Pré-requisitos

- PHP 8.0+
- Composer
- MySQL 8.0+
- Node.js 18+ e npm

---

### 1. Clonar o repositório

```bash
git clone <url-do-repositorio>
cd crypto-monitor
```

---

### 2. Configurar o banco de dados

Acesse o MySQL e execute:

```sql
CREATE DATABASE crypto_monitor CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'crypto_user'@'localhost' IDENTIFIED BY 'senha123';
GRANT ALL PRIVILEGES ON crypto_monitor.* TO 'crypto_user'@'localhost';
FLUSH PRIVILEGES;
```

---

### 3. Configurar o backend

```bash
cd backend
cp .env.example .env
```

Edite o arquivo `.env` com suas credenciais:

```env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=crypto_monitor
DB_USER=crypto_user
DB_PASSWORD=senha123

APP_ENV=development
APP_DEBUG=true
API_PREFIX=/api

JWT_SECRET=sua_chave_secreta_super_segura_aqui
JWT_EXPIRATION=86400
```

Instale as dependências e execute as migrações:

```bash
composer install
php cli/setup.php migrate
php cli/setup.php seed
```

Inicie o servidor:

```bash
php -S localhost:8000 -t public
```

Teste se está funcionando:

```bash
curl http://localhost:8000/api/health
```

---

### 4. Configurar o frontend

Em outro terminal:

```bash
cd frontend
npm install
npm start
```

Acesse: **http://localhost:4200**

---

### 5. Criar uma conta

Abra o navegador em `http://localhost:4200/auth/register` e crie sua conta, ou use a API diretamente:

```bash
curl -X POST http://localhost:8000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Seu Nome","email":"seu@email.com","password":"senha123"}'
```

---

## Estrutura do projeto

```
crypto-monitor/
├── backend/
│   ├── public/          # Entry point (index.php)
│   ├── src/
│   │   ├── Config/      # Bootstrap, autoload, database
│   │   ├── Controllers/ # Auth, Crypto, Favorites, Portfolio, History, Export
│   │   ├── Models/      # User, Cryptocurrency, Favorite, Portfolio, History
│   │   ├── Middleware/  # JWT auth middleware
│   │   ├── Routing/     # Router com 18+ endpoints
│   │   ├── Services/    # CoinGecko API integration
│   │   └── Utils/       # JWT, Logger
│   └── cli/             # Setup e migrations
├── frontend/
│   └── src/app/
│       ├── core/        # Services (Auth, Crypto, Theme, Favorite)
│       ├── features/    # Dashboard, Cryptocurrencies, Favorites, History, Export, Auth
│       ├── guards/      # AuthGuard
│       ├── interceptors/# JWT interceptor
│       └── shared/      # Layout, Navbar, Sidebar, Footer, ThemeSwitch, LanguageSwitch
└── database/
    └── migrations/      # 5 tabelas SQL
```

---

## API Endpoints

| Método | Endpoint | Descrição | Auth |
|--------|----------|-----------|------|
| POST | `/api/auth/register` | Registrar usuário | ❌ |
| POST | `/api/auth/login` | Login | ❌ |
| GET | `/api/auth/me` | Dados do usuário | ✅ |
| GET | `/api/cryptocurrencies` | Listar criptomoedas | ✅ |
| GET | `/api/cryptocurrencies/{id}` | Detalhes | ✅ |
| GET | `/api/cryptocurrencies/search/{q}` | Buscar | ✅ |
| GET | `/api/favorites` | Listar favoritos | ✅ |
| POST | `/api/favorites` | Adicionar favorito | ✅ |
| DELETE | `/api/favorites/{id}` | Remover favorito | ✅ |
| GET | `/api/portfolio` | Listar portfólio | ✅ |
| POST | `/api/portfolio` | Adicionar item | ✅ |
| GET | `/api/history` | Histórico | ✅ |
| GET | `/api/export/csv` | Exportar CSV | ✅ |
| GET | `/api/export/pdf` | Exportar PDF | ✅ |
| GET | `/api/health` | Health check | ❌ |

---

## Design System

### Tema Escuro (padrão)

```
Primário:   #0099ff
Secundário: #00d4ff
Accent:     #00ffb3
Sucesso:    #00d084
Erro:       #ff6b6b
Aviso:      #ffb74d
```

### Tema Claro

```
Primário:   #0066cc
Fundo:      #ffffff
Texto:      #1a1a1a
```

---

## Solução de problemas

**CORS error no frontend**
Verifique se o backend está rodando em `localhost:8000` e se o `.env` tem `CORS_ORIGIN=http://localhost:4200`.

**Erro de conexão com banco**
Confirme que o MySQL está rodando e as credenciais no `.env` estão corretas.

**Módulo não encontrado (npm)**
Execute `npm install` dentro da pasta `frontend/`.

**Composer não encontrado**
Instale o Composer em https://getcomposer.org/download/
