import { useState, useEffect } from "react";
import "./App.css";

const BFF_URL = "/api";

function bffFetch(path, clientType = "web") {
  return fetch(`${BFF_URL}${path}`, {
    headers: { "X-Client": clientType },
  });
}

function App() {
  const [simularMobile, setSimularMobile] = useState(false);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState({ posts: true, users: true, dashboard: false });
  const [error, setError] = useState(null);

  const client = simularMobile ? "mobile" : "web";

  useEffect(() => {
    bffFetch("/posts", client)
      .then((r) => r.json())
      .then((data) => {
        setPosts(Array.isArray(data) ? data : []);
        setLoading((l) => ({ ...l, posts: false }));
      })
      .catch((e) => {
        setError(e.message);
        setLoading((l) => ({ ...l, posts: false }));
      });
  }, [client]);

  useEffect(() => {
    bffFetch("/users", client)
      .then((r) => r.json())
      .then((data) => {
        setUsers(Array.isArray(data) ? data : []);
        setLoading((l) => ({ ...l, users: false }));
      })
      .catch((e) => {
        setError(e.message);
        setLoading((l) => ({ ...l, users: false }));
      });
  }, [client]);

  const loadDashboard = () => {
    setLoading((l) => ({ ...l, dashboard: true }));
    bffFetch("/dashboard", client)
      .then((r) => r.json())
      .then((data) => {
        setDashboard(data);
        setLoading((l) => ({ ...l, dashboard: false }));
      })
      .catch((e) => {
        setError(e.message);
        setLoading((l) => ({ ...l, dashboard: false }));
      });
  };

  if (error) {
    return (
      <div className="app">
        <h1>BFF + React (estudo)</h1>
        <p className="error">
          Erro ao falar com o BFF. Confira se o servidor está rodando na porta 3001.
        </p>
        <pre>{error}</pre>
      </div>
    );
  }

  return (
    <div className="app">
      <header>
        <h1>BFF + React (estudo)</h1>
        <p>Dados vêm do BFF (Express), que consome o JSONPlaceholder.</p>
        <div className="toggle-mobile">
          <label>
            <input
              type="checkbox"
              checked={simularMobile}
              onChange={(e) => setSimularMobile(e.target.checked)}
            />
            Simular cliente mobile (X-Client: mobile → payload enxuto)
          </label>
        </div>
      </header>

      <section className="dashboard-section">
        <h2>Agregação (1 request = vários backends)</h2>
        <button type="button" onClick={loadDashboard} disabled={loading.dashboard}>
          {loading.dashboard ? "Carregando…" : "Buscar dashboard"}
        </button>
        {dashboard && (
          <pre className="dashboard-response">
            {JSON.stringify(dashboard, null, 2)}
          </pre>
        )}
      </section>

      <section>
        <h2>Posts (via BFF) {simularMobile && "— payload mobile"}</h2>
        {loading.posts ? (
          <p>Carregando posts…</p>
        ) : (
          <ul className="list">
            {posts.slice(0, 10).map((p) => (
              <li key={p.id}>
                <strong>{p.titulo}</strong>
                <span className="meta">ID: {p.id} · User: {p.usuarioId}</span>
                {p.corpo != null && <p>{p.corpo.slice(0, 80)}…</p>}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2>Usuários (via BFF) {simularMobile && "— só id + nome"}</h2>
        {loading.users ? (
          <p>Carregando usuários…</p>
        ) : (
          <ul className="list users">
            {users.map((u) => (
              <li key={u.id}>
                <strong>{u.nome}</strong>
                {u.email != null && <span className="meta">{u.email}</span>}
                {u.usuario != null && <span className="meta">@{u.usuario}</span>}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default App;
