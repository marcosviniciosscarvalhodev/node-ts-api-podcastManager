# 🎙️ Podcast Manager API

Uma API REST desenvolvida com **Node.js** e **TypeScript** para gerenciamento e consulta de episódios de podcasts, permitindo listar episódios  e pesquisar podcasts pelo nome.

---

## 📖 Sobre o Projeto

O **Podcast Manager API** tem como objetivo centralizar episódios de diferentes podcasts em uma única plataforma, semelhante ao catálogo da Netflix.

A API disponibiliza endpoints para listar episódios organizados por categorias e filtrar podcasts por nome.

---

## 🚀 Tecnologias Utilizadas

* Node.js
* TypeScript
* HTTP Module (Node.js)
* tsx
* REST API

---

## 📂 Estrutura do Projeto

```text
src/
├── controllers/
├── models/
├── repositories/
├── routes/
├── services/
├── utils/
├── app.ts
└── server.ts
```

---

## 📌 Funcionalidades

* ✅ Listar episódios de podcasts
* ✅ Filtrar episódios pelo nome do podcast
* ✅ Organização por categorias

### Categorias disponíveis

* Saúde
* Fitness
* Mentalidade
* Humor
* Cantores
* Lutadores
* Esportes
* Música

---

## 🌐 Endpoints

### Listar todos os episódios

```http
GET /api/list
```

**Resposta**

```json
[
  {
    "podcastName": "Podpah",
    "episodeName": "CARLOS PRATES - Podpah #1035",
    "videoId": "KDkEh4u6v80",
    "cover": "https://i.ytimg.com/vi/KDkEh4u6v80/maxresdefault.jpg", 
    "link": "https://www.youtube.com/watch?v=KDkEh4u6v80",
    "category": [
      "Esportes",
      "Luta"
    ]
  }
]
```

---

### Filtrar episódios

```http
GET /api/episode?p=flow
```

Onde:

| Parâmetro | Descrição                     |
| --------- | ----------------------------- |
| `p`       | Nome do podcast para pesquisa |

---

## 🏗️ Arquitetura

O projeto segue uma arquitetura em camadas:

* **Controllers** → Responsáveis por receber as requisições HTTP.
* **Services** → Contêm as regras de negócio.
* **Data** → Fonte de dados utilizada pela aplicação.
* **Routes** → Centralizam as rotas da API.
* **Utils** → Métodos auxiliares e constantes.

Fluxo da aplicação:

```text
Cliente
   │
   ▼
Routes
   │
   ▼
Controller
   │
   ▼
Service
   │
   ▼
Data
```

---

## ▶️ Como executar

### Clone o repositório

```bash
git clone <url-do-repositorio>
```

### Instale as dependências

```bash
npm install typescript tsx tsup @types/node
```
## 📦 Dependências

- **TypeScript (`^6.0.3`)** – Desenvolvimento utilizando tipagem estática.
- **TSX (`^4.22.4`)** – Execução de arquivos TypeScript em ambiente de desenvolvimento.
- **TSUP (`^8.5.1`)** – Empacotamento e geração da versão de produção da aplicação.
- **@types/node (`^26.0.1`)** – Tipagens do Node.js para suporte ao TypeScript.

### Execute o projeto

```bash
npm run start:dev
```

Servidor:

```text
http://localhost:3636
```

---

## 📁 Exemplo de Estrutura JSON

```json
{
  "podcastName": "Podpah",
  "episodeName": "CARLOS PRATES - Podpah #1035",
  "videoId": "KDkEh4u6v80",
  "cover": "https://i.ytimg.com/vi/KDkEh4u6v80/maxresdefault.jpg", 
  "link": "https://www.youtube.com/watch?v=KDkEh4u6v80",
  "category": [
    "Esportes",
    "Luta"
  ]
}
```

---

## 📌 Próximas Melhorias

* Paginação de resultados
* Integração com banco de dados
* Cadastro de novos podcasts
* Documentação com Swagger
* Testes automatizados
* Cache de consultas

---

## 👨‍💻 Autor

Desenvolvido por mim como projeto de estudo utilizando **Node.js** e **TypeScript**.
