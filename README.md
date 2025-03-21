# API de Gerenciamento de Estacionamento

Esta API foi desenvolvida para gerenciar estacionamentos, veículos e registros de entrada e saída. Ela segue os princípios da Clean Architecture e utiliza NestJS, Prisma e PostgreSQL.

# Sumário

Requisitos

Instalação

Configuração

Executando a API

Endpoints:

- Estabelecimento

- Veículo

- Registro

Testando a API

# Requisitos
Antes de começar, certifique-se de ter instalado:
Node.js (v16 ou superior)

PostgreSQL (ou banco de dados suportado pelo Prisma)

Docker (para rodar o PostgreSQL em um contêiner)

# Instalação
1 - Clone o repositório:
git clone https://github.com/seu-usuario/parking-management-api.git
cd parking-management-api

2 - Instale as dependências:
npm install

3 Configuração

1. Banco de Dados
A API usa o Prisma para gerenciar o banco de dados. O schema do banco de dados está definido em prisma/schema.prisma.

Configuração do PostgreSQL
1 - Crie um arquivo .env na raiz do projeto e adicione as variáveis de ambiente:

DATABASE_URL="postgresql://usuario:senha@localhost:5432/parking?schema=public"
Substitua usuario, senha e parking pelos valores corretos para o seu banco de dados.

Execute as migrações do Prisma para criar as tabelas no banco de dados:
npx prisma migrate dev --name init

Usando Docker 
Se preferir usar o Docker para rodar o PostgreSQL, execute:
docker-compose up -d

# Executando a API
npm run start:dev