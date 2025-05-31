
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
- Análise de feedbacks de usuário com IA

---

## 🚀 Tecnologias utilizadas

- NestJS – framework baseado em Node.js para construção de APIs
- PostgreSQL – banco de dados relacional
- Prisma - Object relational model, facilitando integração com o banco de dados
- Docker para ambiente padronizado
- Groq e Llama AI - para análise dos feedbacks

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
DATABASE_URL= URL_DO_SEU_BD
BASE_URL = http://localhost:3000 ou endereço remoto
GROQ_API_KEY = SUA_CHAVE_API
```

---

## 🏃‍♂️ Como rodar o projeto

```bash
# Ambiente de desenvolvimento
$ npm run start:dev

# Produção
$ npm run start:prod
```

## 📚 Documentação

- Documentação da API com Swagger: [http://localhost:3000/api](http://localhost:3000/api)
- Rotas principais:
  - **/auth** → login e cadastro
  - **/feedbacks** → criação e visualização de feedbacks
  - **/reactions** → reações em feedbacks
  - **/groups** → grupos e subgrupos

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
├── common/           # Middlewares, pipes, filtros globais, etc.
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
