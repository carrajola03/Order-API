Order API

🔹 Descrição

A Order API é uma API RESTful construída em Node.js com Express, voltada para o gerenciamento de pedidos em sistemas de vendas. Ideal para integração com aplicações web e móveis, permitindo criar, consultar, atualizar e listar pedidos de forma rápida e organizada.

🔹 Funcionalidades

Criar novos pedidos

Consultar pedidos por ID

Listar todos os pedidos

Atualizar informações de um pedido

Retorno em JSON padronizado

🔹 Tecnologias Utilizadas

Node.js – Ambiente de execução JavaScript

Express – Framework web para APIs

Nodemon – Para desenvolvimento com reload automático

JSON – Formato de entrada e saída dos dados

🔹 Instalação

Clone o repositório:
git clone https://github.com/carrajola03/Order-API.git

Acesse a pasta do projeto:
cd order-api

Instale as dependências:
npm install

Inicie o servidor:
npm start
O servidor estará rodando em http://localhost:3000 por padrão.

🔹 Endpoints
1️⃣ Criar Pedido

Rota: POST /

Descrição: Cria um novo pedido.

Body (JSON):
{
  "customerName": "João Silva",
  "items": [
    { "productId": "1", "quantity": 2 },
    { "productId": "2", "quantity": 1 }
  ],
  "total": 150.00
}

Resposta (201):
{
  "message": "Pedido criado com sucesso",
  "order": {
    "id": "123",
    "customerName": "João Silva",
    "items": [
      { "productId": "1", "quantity": 2 },
      { "productId": "2", "quantity": 1 }
    ],
    "total": 150.00,
    "status": "Pendente"
  }
}

2️⃣ Consultar Pedido por ID

Rota: GET /:orderId

Descrição: Retorna os detalhes de um pedido específico.

Exemplo: GET /123

Resposta (200):
{
  "id": "123",
  "customerName": "João Silva",
  "items": [
    { "productId": "1", "quantity": 2 },
    { "productId": "2", "quantity": 1 }
  ],
  "total": 150.00,
  "status": "Pendente"
}

3️⃣ Listar Todos os Pedidos

Rota: GET /list/all

Descrição: Retorna uma lista de todos os pedidos cadastrados.

Resposta (200):
[
  {
    "id": "123",
    "customerName": "João Silva",
    "items": [...],
    "total": 150.00,
    "status": "Pendente"
  },
  {
    "id": "124",
    "customerName": "Maria Oliveira",
    "items": [...],
    "total": 200.00,
    "status": "Pendente"
  }
]

4️⃣ Atualizar Pedido

Rota: PUT /:orderId

Descrição: Atualiza informações de um pedido existente.

Body (JSON):
{
  "status": "Concluído",
  "total": 180.00
}

*Exemplo: PUT /123

Resposta (200):
{
  "message": "Pedido atualizado com sucesso",
  "order": {
    "id": "123",
    "customerName": "João Silva",
    "items": [...],
    "total": 180.00,
    "status": "Concluído"
  }
}

🔹 Estrutura do Projeto
Order-API/
│
├─ controllers/
│   └─ orderController.js      # Lógica de manipulação de pedidos
├─ routes/
│   └─ orderRoutes.js          # Definição das rotas da API
├─ package.json                # Dependências e scripts
├─ server.js                   # Arquivo principal do servidor
└─ README.md                   # Documentação do projeto

🔹 Contribuição

Contribuições são bem-vindas! Para melhorias ou correções:

Faça um fork do repositório

Crie uma branch: git checkout -b feature/nova-funcionalidade

Faça commit das alterações: git commit -m "Adiciona nova funcionalidade"

Envie para o repositório remoto: git push origin feature/nova-funcionalidade

Abra um Pull Request

🔹 Licença

Este projeto está sob a licença MIT.






