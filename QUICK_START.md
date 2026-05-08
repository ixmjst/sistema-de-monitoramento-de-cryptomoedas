# Guia Rápido - CryptoMonitor

## Início Rápido (5 minutos)

### 1. Banco de Dados

```bash
mysql -u root -p
```

```sql
CREATE DATABASE crypto_monitor CHARACTER SET utf8mb4;
CREATE USER 'crypto_user'@'localhost' IDENTIFIED BY 'senha123';
GRANT ALL PRIVILEGES ON crypto_monitor.* TO 'crypto_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

### 2. Backend

```bash
cd backend
cp .env.example .env
composer install
php cli/setup.php migrate
php -S localhost:8000 -t public
```

Teste: http://localhost:8000/api/health

### 3. Frontend (novo terminal)

```bash
cd frontend
npm install
npm start
```

Acesse: http://localhost:4200

### 4. Criar conta

Vá para http://localhost:4200/auth/register e crie sua conta!

---

## Credenciais de teste

Se você executou `php cli/setup.php seed`, pode usar:

- Email: `admin@crypto.com`
- Senha: `admin123`

---

## Comandos úteis

### Backend

```bash
# Rodar servidor
php -S localhost:8000 -t public

# Executar migrações
php cli/setup.php migrate

# Popular banco com dados de teste
php cli/setup.php seed

# Ver logs
tail -f logs/app.log
```

### Frontend

```bash
# Desenvolvimento
npm start

# Build de produção
npm run build:prod

# Testes
npm test

# Lint
npm run lint
```

---

## Portas padrão

- **Frontend**: http://localhost:4200
- **Backend**: http://localhost:8000
- **MySQL**: localhost:3306

---

## Problemas comuns

**"Connection refused" no frontend**
→ Certifique-se que o backend está rodando em `localhost:8000`

**"Access denied" no MySQL**
→ Verifique usuário e senha no arquivo `backend/.env`

**"Module not found" no Angular**
→ Execute `npm install` dentro da pasta `frontend/`

**CORS error**
→ Verifique se `CORS_ORIGIN=http://localhost:4200` está no `backend/.env`
