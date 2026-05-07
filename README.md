# Sistema de Monitoramento de Criptomoedas

Sistema web completo para monitoramento de criptomoedas com autenticação, favoritos, histórico e exportação de dados.

## Tecnologias
- **Frontend**: Angular
- **Backend**: PHP puro
- **Banco de Dados**: MySQL
- **API Externa**: CoinGecko

## Funcionalidades
- Sistema completo de autenticação
- Visualização de preços em tempo real
- Gerenciamento de favoritos
- Histórico de preços
- Exportação de dados (CSV/PDF)
- Interface responsiva
- Tema claro/escuro
- Suporte multi-idioma

## Instalação

### Pré-requisitos
- Node.js e npm
- PHP 8.0+
- MySQL 8.0+
- Composer

### Backend
```bash
cd backend
composer install
# Configurar .env com credenciais do banco
php -S localhost:8000 -t public
```

### Frontend
```bash
cd frontend
npm install
ng serve
```

## Estrutura do Projeto
- `frontend/` - Aplicação Angular
- `backend/` - API PHP
- `database/` - Scripts SQL
- `docs/` - Documentação
- `tests/` - Testes automatizados
- `docker/` - Configurações Docker

## Contribuição
1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença
Este projeto está sob a licença MIT.