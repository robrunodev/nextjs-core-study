# BFF (Backend for Frontend) - Estudo

Este projeto contém:

- **BFF**: servidor Node.js + Express que consome APIs externas (JSONPlaceholder) e expõe dados adaptados para o frontend.
- **Frontend**: app Vite + React que consome apenas o BFF (não fala direto com os backends).

## Conceito BFF

O BFF fica entre o frontend e um ou mais backends. Ele:

1. **Agrega** chamadas a vários serviços em uma única resposta.
2. **Adapta** o formato dos dados (ex.: nomes em português, menos campos).
3. **Esconde** detalhes dos backends e evita CORS no browser.
4. **Centraliza** autenticação, cache e transformações.

---

## Para que serve o BFF? (mais exemplos)

| Caso de uso | O que o BFF faz |
|-------------|-----------------|
| **Agregação** | Junta vários backends em uma chamada (ex.: `/api/dashboard` = posts + usuários em 1 request). O front faz 1 ida ao servidor em vez de várias. |
| **Adaptação por cliente** | Retorno diferente para **mobile** vs **web**: mobile recebe menos campos, menos itens ou texto truncado para economizar dados e tempo. |
| **Tradução de contrato** | Backend devolve em inglês ou outro formato; o BFF converte para o que o front espera (nomes em PT, estrutura simplificada). |
| **Esconder backends** | O front não conhece URLs de microsserviços; só fala com o BFF. Facilita trocar backends sem mudar o front. |
| **Autenticação / token** | BFF adiciona tokens ou cookies nas chamadas aos backends; o front só envia credenciais ao BFF. |
| **Cache e rate limit** | BFF pode cachear respostas ou limitar requisições por cliente. |
| **Tratamento de erros** | Se um backend cair, o BFF pode devolver fallback ou mensagem amigável em vez de 502 bruto. |

Neste repositório estão implementados: **agregação** (dashboard) e **retorno diferente para mobile**.

---

## Retorno diferente para mobile

O BFF identifica o cliente pelo header **`X-Client`** (ou pelo `User-Agent`):

- **`X-Client: web`** (ou ausente) → resposta completa (mais campos, mais itens).
- **`X-Client: mobile`** → resposta enxuta:
  - **Posts**: menos itens (8 em vez de 20), lista sem campo `corpo`; no detalhe, `corpo` truncado.
  - **Usuários**: só `id` e `nome` (sem `email`, `usuario`).
  - **Dashboard**: não envia `ultimosPosts` (mobile não usa no exemplo).

No frontend, marque **“Simular cliente mobile”** para enviar `X-Client: mobile` e ver a diferença nas respostas.

---

## Como rodar

### 1. BFF (porta 3001)

```bash
cd bff-teste
npm install
npm run dev
```

### 2. Frontend (porta 5173)

```bash
cd bff-teste/frontend
npm install
npm run dev
```

Abra http://localhost:5173. O front chama o BFF em http://localhost:3001 (via proxy do Vite).

---

## Endpoints do BFF

| Método | Rota               | Descrição |
|--------|--------------------|-----------|
| GET    | /api/health        | Status do BFF |
| GET    | /api/posts         | Lista de posts (formato depende de X-Client) |
| GET    | /api/posts/:id     | Post por ID (corpo truncado no mobile) |
| GET    | /api/users         | Lista de usuários (menos campos no mobile) |
| GET    | /api/dashboard     | Agregação: totais + últimos posts (só web); 1 request |

### Header opcional

- **`X-Client: web`** ou **`X-Client: mobile`** — define se a resposta é “web” ou “mobile”. Se não enviar, o BFF usa o `User-Agent` para detectar mobile.
