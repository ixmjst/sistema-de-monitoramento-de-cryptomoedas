# Backend API - CryptoMonitor

API Backend em PHP puro para o Sistema de Monitoramento de Criptomoedas.

## Estrutura de Pastas

```
backend/
├── src/
│   ├── Config/          # Configuração e bootstrap
│   ├── Controllers/     # Controllers das rotas
│   ├── Models/          # Modelos de dados
│   ├── Repositories/    # Repositories (futura expansão)
│   ├── Services/        # Serviços de negócio
│   ├── Middleware/      # Middlewares (Auth, CORS, etc)
│   ├── Routes/          # Definição de rotas
│   └── Utils/           # Utilitários (JWT, etc)
├── public/              # Pasta pública
│   └── index.php        # Entry point da API
├── database/
│   ├── migrations/      # Arquivos SQL de migração
│   └── seeds/           # Seeds de dados
├── cli/                 # CLI commands
├── logs/                # Logs da aplicação
├── .env                 # Variáveis de ambiente
└── composer.json        # Dependências PHP
```

## Configuração

### 1. Criar database MySQL

```sql
CREATE DATABASE crypto_monitor CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'crypto_user'@'localhost' IDENTIFIED BY 'senha_segura';
GRANT ALL PRIVILEGES ON crypto_monitor.* TO 'crypto_user'@'localhost';
FLUSH PRIVILEGES;
```

### 2. Configurar .env

```bash
cp backend/.env.example backend/.env
```

Editar `backend/.env` com:
- Credenciais do banco de dados
- Chave JWT secreta
- Configurações de CORS

### 3. Executar Migrações

```bash
php backend/cli/setup.php migrate
php backend/cli/setup.php seed
```

## Desenvolvimento

### Iniciar servidor PHP

```bash
php -S localhost:8000 -t backend/public
```

A API estará disponível em: `http://localhost:8000/api/v1`

### Health Check

```bash
curl http://localhost:8000/api/v1/health
```

## Endpoints

### Autenticação

- `POST /api/v1/auth/register` - Registrar usuário
- `POST /api/v1/auth/login` - Fazer login
- `POST /api/v1/auth/refresh` - Renovar token
- `GET /api/v1/auth/me` - Obter dados do usuário

### Criptomoedas

- `GET /api/v1/cryptocurrencies` - Listar criptomoedas
- `GET /api/v1/cryptocurrencies/{id}` - Detalhes de uma cripto
- `GET /api/v1/cryptocurrencies/search/{query}` - Buscar criptomoedas

### Favoritos

- `GET /api/v1/favorites` - Listar favoritos
- `POST /api/v1/favorites` - Adicionar favorito
- `DELETE /api/v1/favorites/{id}` - Remover favorito

### Portfólio

- `GET /api/v1/portfolio` - Listar portfólio
- `POST /api/v1/portfolio` - Adicionar item
- `PUT /api/v1/portfolio/{id}` - Atualizar item
- `DELETE /api/v1/portfolio/{id}` - Remover item

### Histórico

- `GET /api/v1/history` - Listar histórico
- `POST /api/v1/history` - Adicionar entrada

### Exportação

- `GET /api/v1/export/csv` - Exportar portfólio em CSV
- `GET /api/v1/export/pdf` - Exportar portfólio em PDF

## Autenticação

A API usa JWT (JSON Web Tokens) para autenticação.

### Exemplo de Login

```bash
curl -X POST http://localhost:8000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

### Usando o Token

```bash
curl -H "Authorization: Bearer seu_token_aqui" \
  http://localhost:8000/api/v1/favorites
```

## Variáveis de Ambiente

```
DB_HOST=localhost
DB_PORT=3306
DB_NAME=crypto_monitor
DB_USER=crypto_user
DB_PASSWORD=senha_segura

APP_ENV=development
APP_DEBUG=true
API_PREFIX=/api/v1

JWT_SECRET=sua_chave_secreta_aqui
JWT_ALGORITHM=HS256
JWT_EXPIRATION=86400

CORS_ORIGIN=http://localhost:4200
```

## Logs

Os logs da aplicação são salvos em `backend/logs/`.

## Segurança

- Todas as senhas são hasheadas com BCRYPT
- Tokens JWT com expiração configurável
- CORS configurável por origem
- Validação de entrada em todos os endpoints
- Prepared statements para SQL injection prevention

## Próximos Passos

1. Integração com APIs de criptomoedas (CoinGecko, CryptoCompare)
2. Sistema de cache
3. Rate limiting
4. Tests (PHPUnit)
5. Docker setup
6. API Documentation (Swagger/OpenAPI)
