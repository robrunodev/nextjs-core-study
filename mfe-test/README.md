# MFE Test — Micro Frontends (estudo)

Projeto de estudo de **Micro Frontends (MFE)** usando **Module Federation** com Vite e React.

## Estrutura

```
mfe-test/
├── host/              # Shell (container) — aplicação principal que consome os remotes
├── remote-header/     # MFE 1 — Header/Navegação
├── remote-dashboard/  # MFE 2 — Dashboard/Conteúdo
└── package.json       # Scripts para rodar tudo junto
```

## Conceitos MFE neste projeto

| Conceito | Onde aparece |
|----------|----------------|
| **Host (Shell)** | App `host` — orquestra a página e carrega os remotes |
| **Remote** | `remote-header` e `remote-dashboard` — expõem componentes via `remoteEntry.js` |
| **Module Federation** | Plugin `@originjs/vite-plugin-federation` — compartilha módulos em runtime |
| **Shared dependencies** | `react` e `react-dom` compartilhados entre host e remotes |
| **Lazy loading** | Host usa `React.lazy()` + `import('remoteHeader/Header')` para carregar os MFE |

## Como rodar

### 1. Instalar dependências

Na raiz do monorepo:

```bash
cd mfe-test
npm run install:all
```

Ou em cada pasta: `host`, `remote-header`, `remote-dashboard`:

```bash
npm install
```

### 2. Desenvolvimento (Host + Remotes)

O Module Federation com Vite expõe `remoteEntry.js` apenas após o **build** dos remotes. Por isso o fluxo é:

1. **Buildar os remotes** (uma vez, ou quando mudar algo neles):

```bash
npm run build:remotes
```

2. **Subir os remotes em modo preview** (servem o `remoteEntry.js`):

```bash
npm run preview:remotes
```

Deixe esse terminal aberto (portas **5001** e **5002**).

3. **Em outro terminal, subir o host**:

```bash
npm run dev:host
```

Acesse: **http://localhost:5173**

**Atalho:** rodar tudo em sequência (build remotes + preview remotes + dev host):

```bash
npm run dev
```

### 3. Rodar cada app sozinho (para desenvolver o remote isolado)

- **Só o host:** `cd host && npm run dev` — os remotes não carregarão (falta do remoteEntry).
- **Só um remote:** `cd remote-header && npm run dev` — abre em http://localhost:5001 com a UI só do header (útil para desenvolver o componente).

## Portas

| App | Porta |
|-----|--------|
| Host | 5173 |
| remote-header | 5001 |
| remote-dashboard | 5002 |

## Próximos passos de estudo

- Trocar dados entre host e remotes (event bus, shared state).
- Autenticação compartilhada (token no host, remotes consumindo).
- Deploy: cada remote em um domínio/origem e host apontando para as URLs de produção.
