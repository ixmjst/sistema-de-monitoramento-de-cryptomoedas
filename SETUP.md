# 🚀 Setup Guia - CryptoMonitor

Guia completo para configurar e executar o Sistema de Monitoramento de Criptomoedas.

## 📋 Pré-requisitos

- **PHP 7.4+** (testado com PHP 8.0.30)
- **Node.js 18+**
- **MySQL 5.7+** ou **MariaDB 10.3+**
- **Git**

## 🔧 Configuração Backend

### 1. Preparar Banco de Dados

#### Opção A: Usando MySQL Command Line

```bash
# Conectar ao MySQL
mysql -u root -p

# Criar database
CREATE DATABASE crypto_monitor CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'crypto_user'@'localhost' IDENTIFIED BY 'senha_segura_123';
GRANT ALL PRIVILEGES ON crypto_monitor.* TO 'crypto_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

#### Opção B: Usando phpMyAdmin

1. Abrir phpMyAdmin (http://localhost/phpmyadmin)
2. Criar database: `crypto_monitor`
3. Criar usuário: `crypto_user` com senha
4. Conceder privilégios totais no database

### 2. Configurar Variáveis de Ambiente

```bash
cd backend

# Copiar arquivo de exemplo
cp .env.example .env

# Editar .env com suas credenciais:
# DB_HOST=localhost
# DB_PORT=3306
# DB_NAME=crypto_monitor
# DB_USER=crypto_user
# DB_PASSWORD=sua_senha_aqui
# JWT_SECRET=sua_chave_jwt_segura_aqui
```

### 3. Executar Migrações do Banco de Dados

```bash
# A partir da pasta backend
php cli/setup.php migrate

# Opcionalmente, seed com dados de exemplo
php cli/setup.php seed
```

### 4. Iniciar Servidor PHP

```bash
# Opção A: PHP Built-in (Desenvolvimento)
php -S localhost:8000 -t backend/public

# Opção B: Apache (Produção)
# Configurar VirtualHost apontando para backend/public

# Opção C: Nginx
# Configurar location /api apontando para backend/public/index.php
```

**API disponível em:** `http://localhost:8000/api/v1`

## ✅ Testar Backend

### Health Check

```bash
curl http://localhost:8000/api/v1/health
```

**Resposta esperada:**
```json
{
  "success": true,
  "message": "API is healthy",
  "data": {
    "status": "ok",
    "app": "CryptoMonitor API",
    "version": "1.0.0",
    "environment": "development",
    "timestamp": "2026-05-08 12:00:00"
  }
}
```

### Registrar Usuário

```bash
curl -X POST http://localhost:8000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123",
    "language": "pt",
    "theme": "dark"
  }'
```

### Fazer Login

```bash
curl -X POST http://localhost:8000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

**Resposta (guarde o token):**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": 1,
      "name": "Test User",
      "email": "test@example.com"
    },
    "token": "eyJhbGc..."
  }
}
```

### Listar Criptomoedas (com token)

```bash
curl -H "Authorization: Bearer SEU_TOKEN_AQUI" \
  http://localhost:8000/api/v1/cryptocurrencies
```

## 🎨 Configuração Frontend

### 1. Instalar Dependências

```bash
cd frontend

# Usando npm
npm install

# Ou usando yarn
yarn install
```

### 2. Configurar API Backend

Editar `frontend/src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8000/api/v1'
};
```

### 3. Iniciar Servidor Angular

```bash
# Desenvolvimento
ng serve

# Com hot reload
npm start

# Build para produção
ng build --prod
```

**Frontend disponível em:** `http://localhost:4200`

## 📚 Estrutura de Pastas

```
sistema-de-monitoramento-de-criptomoedas/
├── backend/                          # API PHP
│   ├── src/
│   │   ├── Config/                  # Configuração
│   │   ├── Controllers/             # Controllers
│   │   ├── Models/                  # Modelos
│   │   ├── Services/                # Serviços
│   │   ├── Middleware/              # Middlewares
│   │   ├── Utils/                   # Utilitários
│   │   └── Routing/                 # Router
│   ├── public/                      # Entry point (index.php)
│   ├── database/
│   │   └── migrations/              # Arquivos SQL
│   ├── cli/                         # CLI commands
│   ├── .env                         # Variáveis
│   ├── composer.json
│   └── README.md
│
├── frontend/                         # Angular
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/               # Serviços core
│   │   │   ├── shared/             # Componentes compartilhados
│   │   │   ├── features/           # Features (lazy)
│   │   │   └── app.module.ts
│   │   ├── assets/
│   │   ├── environments/           # Configurações
│   │   └── styles.scss             # Estilos globais
│   ├── package.json
│   ├── angular.json
│   ├── tsconfig.json
│   └── README.md
│
├── database/                        # Database
│   ├── migrations/                 # SQL migrations
│   └── seeds/                      # Seed data
│
├── docs/                           # Documentação
├── docker/                         # Docker config
├── tests/                          # Testes
├── .gitignore
├── README.md
└── PROGRESS.md
```

## 🐳 Docker (Opcional)

```bash
# Build docker image
docker-compose build

# Start services
docker-compose up -d

# Stop services
docker-compose down
```

## 🔐 Segurança - Checklist Produção

- [ ] Usar HTTPS (SSL/TLS)
- [ ] Gerar nova JWT_SECRET forte
- [ ] Configurar CORS corretamente
- [ ] Habilitar CSRF protection
- [ ] Usar senhas fortes no banco
- [ ] Configurar rate limiting
- [ ] Ativar logs de segurança
- [ ] Fazer backup do banco regularmente
- [ ] Usar variáveis de ambiente para secrets
- [ ] Configurar headers de segurança (HSTS, CSP, etc)

## 📝 Logs

### Backend
- Logs salvos em: `backend/logs/`
- Nível de log configurável em `.env`

### Frontend
- Console do navegador
- Network tab no DevTools

## 🚨 Troubleshooting

### "Database connection failed"
- Verificar se MySQL está rodando
- Verificar credenciais no `.env`
- Verificar se o database foi criado

### "API not found"
- Verificar se o servidor PHP está rodando
- Verificar URL da API
- Checar CORS configuration

### "Module not found" (Node)
- Deletar `node_modules` e `package-lock.json`
- Rodar `npm install` novamente

### "Cannot find JWT module"
- Verificar se o arquivo `src/Utils/JWT.php` existe
- Verificar autoloader em `src/Config/autoload.php`

## 📞 Suporte

Para dúvidas ou problemas:
1. Verificar logs (backend: `logs/`, frontend: DevTools)
2. Consultar README.md das respectivas pastas
3. Abrir issue no repositório

## 📄 Licença

MIT License

---

**Desenvolvido com ❤️ para aprendizado de Stack Full-Stack**

Data: 2026-05-08  
Versão: 1.0.0
