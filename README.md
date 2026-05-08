DB_HOST=localhost
DB_PORT=3306
DB_NAME=crypto_monitor
DB_USER=crypto_user
DB_PASSWORD=senha123

APP_ENV=development
APP_DEBUG=true
API_PREFIX=/api/v1

JWT_SECRET=sua_chave_secreta_super_segura_aqui# Sistema de Monitoramento de Criptomoedas

Sistema web completo e profissional para monitoramento de criptomoedas com autenticação, favoritos, histórico e exportação de dados.

## 📊 Tecnologias
- **Frontend**: Angular 17 (TypeScript, SCSS)
- **Backend**: PHP 8.0+ (Puro)
- **Banco de Dados**: MySQL 8.0+
- **API Externa**: CoinGecko
- **Bibliotecas**: ng2-charts, jsPDF, PapaParse, @ngx-translate
- **DevOps**: Docker, Git

## ✨ Funcionalidades Principais
- ✅ Sistema completo de autenticação (JWT)
- ✅ Visualização de preços em tempo real
- ✅ Gerenciamento de favoritos
- ✅ Histórico de preços com gráficos
- ✅ Exportação de dados (CSV/PDF)
- ✅ Interface responsiva e moderna
- ✅ Tema claro/escuro
- ✅ Suporte multi-idioma (Português/Inglês)
- ⏳ Integração com CoinGecko API
- ⏳ Sistema de alertas de preço

## 🎨 Design System & Paleta de Cores

### Tema Escuro (Padrão - Crypto)
```css
Primário: #0099ff (Azul Crypto)
Secundário: #00d4ff (Azul Claro)
Accent: #00ffb3 (Verde Neon)
Sucesso: #00d084
Erro: #ff6b6b
Aviso: #ffb74d
Bitcoin: #f7931a
Ethereum: #627eea
```

### Tema Claro
```css
Primário: #0066cc (Azul Escuro)
Fundo: #ffffff
Texto: #1a1a1a
```

## 📁 Estrutura do Projeto

### Frontend Angular
```
frontend/
├── src/
│   ├── app/
│   │   ├── core/              # Serviços core (Auth, Crypto, Theme)
│   │   ├── shared/            # Componentes compartilhados
│   │   │   ├── components/
│   │   │   │   ├── layout/    # Layout principal
│   │   │   │   ├── navbar/    # Barra de navegação
│   │   │   │   ├── sidebar/   # Menu lateral
│   │   │   │   ├── footer/    # Rodapé
│   │   │   │   ├── theme-switch/
│   │   │   │   └── language-switch/
│   │   ├── features/          # Módulos por funcionalidade
│   │   │   ├── auth/
│   │   │   ├── dashboard/
│   │   │   ├── cryptocurrencies/
│   │   │   ├── favorites/
│   │   │   ├── history/
│   │   │   └── export/
│   │   ├── models/            # Interfaces TypeScript
│   │   ├── guards/            # Guards de rota
│   │   └── interceptors/      # Interceptors HTTP
│   ├── assets/                # Imagens e ícones
│   ├── locales/               # Arquivos i18n (pt.json, en.json)
│   ├── environments/          # Configurações por ambiente
│   └── styles.scss            # Estilos globais
├── package.json
├── angular.json
└── tsconfig.json
```

## 🚀 Instalação Rápida

### Pré-requisitos
- Node.js 18+ e npm 9+
- PHP 8.0+
- MySQL 8.0+
- Composer 2.0+

### Frontend Setup
```bash
# Entrar no diretório frontend
cd frontend

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm start
# Acesso: http://localhost:4200
```

### Backend Setup
```bash
# Entrar no diretório backend
cd backend

# Instalar dependências
composer install

# Configurar arquivo .env
cp .env.example .env
# Editar .env com suas credenciais do banco

# Iniciar servidor
php -S localhost:8000 -t public
# Acesso: http://localhost:8000/api
```

## 🛠️ Componentes Implementados

### ✅ Core Services
- `ThemeService` - Gerenciamento de temas (claro/escuro)
- `AuthService` - Autenticação e gerenciamento de usuários
- `CryptoService` - Integração com API de criptomoedas
- `FavoriteService` - Gerenciamento de favoritos

### ✅ Componentes Compartilhados
- `LayoutComponent` - Layout principal da aplicação
- `NavbarComponent` - Barra de navegação com busca
- `SidebarComponent` - Menu lateral responsivo
- `FooterComponent` - Rodapé com links
- `ThemeSwitchComponent` - Botão para alternar tema
- `LanguageSwitchComponent` - Seletor de idioma (PT/EN)

### ✅ Sistema de Tradução (i18n)
- Suporte completo para Português e Inglês
- Arquivos de tradução em JSON
- Carregamento dinâmico via HTTP

### ✅ Estilos Globais
- Design system completo com variáveis CSS
- Tema claro/escuro funcional
- Componentes UI reutilizáveis (botões, cards, inputs, etc)
- Animações e transições suaves
- Responsividade total (Desktop, Tablet, Mobile)

## 📋 Comandos Disponíveis

```bash
# Frontend
npm start              # Inicia servidor dev (port 4200)
npm run build         # Build para produção
npm test              # Executa testes unitários
npm run lint          # Analisa código

# Backend (em desenvolvimento)
composer install      # Instala dependências
php -S localhost:8000 -t public  # Inicia servidor
```

## 📚 Documentação

- [Arquitetura do Sistema](./docs/architecture/)
- [API REST Endpoints](./docs/api/)
- [Manual do Usuário](./docs/user-manual/)
- [Guia de Desenvolvimento](./DEVELOPMENT.md)

## 🔄 Git Workflow

```bash
# Criar nova feature
git checkout -b feature/nome-feature

# Após fazer alterações
git add .
git commit -m "feat: descrição da feature"
git push origin feature/nome-feature

# Criar Pull Request no GitHub
```

## 📊 Status do Projeto

### Fase 1: ✅ Setup e Infraestrutura
- ✅ Estrutura de pastas profissional
- ✅ Repositório Git inicializado
- ✅ Configuração Angular base
- ✅ Paleta de cores e tema completo
- ✅ Componentes de layout (Navbar, Sidebar, Footer)
- ✅ Sistema de tradução i18n
- ✅ Tema claro/escuro funcional

### Fase 2: ⏳ Backend Core
- ⏳ Sistema de rotas PHP
- ⏳ Conexão com banco de dados
- ⏳ Middleware básico

### Fase 3: ⏳ Autenticação
- ⏳ Sistema JWT
- ⏳ Registro/Login

### Fases 4-12: ⏳ Desenvolvimento contínuo

## 🤝 Contribuição
1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Licença
Este projeto está sob a licença MIT.

## 👥 Autor
Desenvolvido como projeto educacional de arquitetura de software.