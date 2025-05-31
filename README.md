
<p align="center">
  <img src="https://github.com/user-attachments/assets/081dd9a3-6e8b-4c88-b7b1-9551a2c26fea" width="150" alt="Feedbackz Logo" />
</p>

<p align="center">
  <b>Feedbackz</b>: Aplicativo de feedbacks para empresas, com gamificação, sistema de pontos, análise com IA e resgate de prêmios. 
    Desenvolvido com NestJS no backend.
</p>

---

## 📦 Descrição

Este é o backend do projeto **Feedbackz** – uma plataforma para engajar colaboradores com feedbacks públicos e privados, reações por emoji e loja de prêmios.

Principais recursos:
- Feedbacks públicos e privados (visíveis apenas para o destinatário e autor)
- Reações por emojis
- Sistema de pontos e resgate de prêmios
- Controle de permissões (usuário normal, usuário gestor)
- Moderação de feedbacks públicos via denúncias
- Análise de feedbacks de usuário com Llama 3.3
- API da OpenAI para mandar requisições para o Llama pelo Groq
- Groq 

---

## 🚀 Tecnologias utilizadas

- NestJS – framework baseado em Node.js para construção de APIs
- PostgreSQL – banco de dados relacional
- Prisma 
- Docker para ambiente padronizado
- Llama AI - para análise dos feedbacks
- Postman - para testes de API

---

## ⚙️ Configuração do projeto

```bash
# Instale as dependências
$ npm install

# Copie o arquivo de ambiente
$ cp .env.example .env
```

No arquivo `.env`, configure as variáveis essenciais por ex:

```env
DATABASE_URL=URL_DO_SEU_BD
BASE_URL = http://localhost:3000 ou endereço remoto
LLAMA_API_KEY = SUA_CHAVE_API
```

---

## 🏃‍♂️ Como rodar o projeto

```bash
# Ambiente de desenvolvimento
$ npm run start:dev

# Produção
$ npm run start:prod
```

---

## 📌 Endpoints principais

### Usuários (`/users`)
- POST `/users` – Criar usuário
- POST `/users/all` – Listar todos usuários
- GET `/users/email/:email` – Buscar usuário por e-mail
- PATCH `/users` – Atualizar usuário
- GET `/users/group/:groupId` – Listar usuários de um grupo
- GET `/users/:id` – Buscar usuário por ID
- DELETE `/users/:id` – Deletar usuário por ID
- POST `/users/login` – Login

### Feedbacks (`/feedbacks`)
- POST `/feedbacks` – Criar feedback
- GET `/feedbacks/all` – Listar todos feedbacks
- PATCH `/feedbacks` – Atualizar feedback
- GET `/feedbacks/id/:id` – Buscar feedback por ID
- DELETE `/feedbacks/id/:id` – Deletar feedback
- GET `/feedbacks/group/:groupId` – Buscar feedbacks por grupo
- GET `/feedbacks/author/:authorId` – Buscar feedbacks por autor

### Reações (`/reactions`)
- POST `/reactions` – Criar reação
- GET `/reactions/all` – Listar todas reações
- PATCH `/reactions` – Atualizar reação
- GET `/reactions/:id` – Buscar reação por ID
- DELETE `/reactions/id/:id` – Deletar reação
- GET `/reactions/user/:userId` – Buscar reações por usuário
- GET `/reactions/feedback/:feedbackId` – Buscar reações por feedback

### Produtos (`/products`)
- POST `/products` – Criar produto
- GET `/products/all` – Listar todos produtos
- GET `/products/:id` – Buscar produto por ID
- DELETE `/products/id/:id` – Deletar produto
- GET `/products/user/:userId` – Buscar produtos por usuário

### Grupos (`/groups`)
- POST `/groups` – Criar grupo
- POST `/groups/all` – Listar todos grupos
- PATCH `/groups` – Atualizar grupo
- DELETE `/groups/id/:id` – Deletar grupo
- GET `/groups/id/:id` – Buscar grupo por ID
- GET `/groups/parent/:parentId` – Buscar subgrupos por ID do pai

---

## 🛠️ Arquitetura e estruturação

O projeto segue uma arquitetura inspirada em **Domain-Driven Design (DDD)**, organizada em camadas para facilitar a manutenção e evolução:

```
src/
├── application/      # Casos de uso e DTOs (regras de negócio que orquestram as entidades)
│   ├── dtos/
│   └── usecases/
├── domain/           # Camada de domínio (entidades e repositórios abstratos)
│   ├── entities/
│   └── repositories/
├── persistence/      # Implementações reais de repositórios e mapeadores
│   ├── config/       # Configuração do Prisma e banco
│   ├── mappers/      # Conversores entre entidades de domínio e dados persistidos
│   └── repositories/ # Implementações dos repositórios
├── prisma/           # Schema do Prisma e migrações
├── main.ts           # Bootstrap da aplicação NestJS
```

✅ **DDD aplicado:**  
- A camada **domain** define as regras do negócio e não depende de nada externo.  
- A camada **application** orquestra casos de uso, chamando entidades e repositórios.  
- A camada **persistence** implementa como esses dados são persistidos (Prisma).  
- Os **mappers** convertem de/para objetos de domínio e modelos de banco (Prisma).

## 💡 Funcionalidades principais

✅ Postagem de feedbacks públicos e privados  
✅ Reações por emoji (👍, 👎, 💡, 🙁, ⚡)  
✅ Limites diários de feedbacks  
✅ Feed público e feed privado ("Só para você")  
✅ Pontuação acumulada e resgate de prêmios na loja  
✅ Feedbacks anônimos ou identificados  
✅ Moderação por denúncias em feedbacks públicos  
✅ Controle de permissão para feedbacks privados (gestores e roles específicas)

---

<p align="center">
  Feito com ❤️ e NestJS
</p>
