
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">
  <b>Feedback Hub</b>: Sistema interno de feedbacks para empresas, com gamificação, rankings e prêmios.  
  Construído com NestJS no backend.
</p>

---

## 📦 Descrição

Este é o backend do projeto **Feedback Hub** – uma plataforma para engajar colaboradores com feedbacks públicos e privados, reações por emoji e loja de prêmios.

Principais recursos:
- Feedbacks públicos e privados (visíveis apenas para o destinatário e autor)
- Reações por emoji
- Sistema de pontos e prêmios
- Controle de permissões (usuário normal, gestor)
- Moderação de feedbacks públicos via denúncias

---

## 🚀 Tecnologias

- [NestJS](https://nestjs.com/) – framework Node.js para construção de APIs
- PostgreSQL – banco de dados relacional
- TypeORM ou Prisma (dependendo do setup final)
- JWT – autenticação e autorização
- Docker (opcional) para ambiente padronizado

---

## ⚙️ Configuração do projeto

```bash
# Instale as dependências
$ npm install

# Copie o arquivo de ambiente
$ cp .env.example .env
```

No arquivo `.env`, configure as variáveis essenciais como:

```env
DATABASE_URL=postgres://user:password@localhost:5432/feedbackhub
JWT_SECRET=supertoken
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

- Documentação da API com Swagger: [http://localhost:3000/api](http://localhost:3000/api) (por padrão)
- Rotas principais:
  - **/auth** → login e cadastro
  - **/feedbacks** → criação e visualização de feedbacks
  - **/reactions** → reações em feedbacks
  - **/rewards** → resgate de prêmios
  - **/groups** → grupos e subgrupos

---

## 🛠️ Estrutura

```
src/
├── auth/
├── feedbacks/
├── reactions/
├── rewards/
├── groups/
├── users/
├── common/
└── main.ts
```

---

## 💡 Funcionalidades principais

✅ Postagem de feedbacks públicos e privados  
✅ Reações de emoji (🎉, 👍, ❤️, 😂, etc.)  
✅ Limites diários de feedbacks e pontuação dinâmica  
✅ Feed público e feed privado ("Só pra você")  
✅ Pontuação acumulada e loja de prêmios  
✅ Feedbacks públicos anônimos ou identificados  
✅ Moderação por denúncias em feedbacks públicos  
✅ Controle de permissão para feedbacks privados (gestores e roles específicos)

---

<p align="center">
  Feito com ❤️ usando NestJS
</p>
