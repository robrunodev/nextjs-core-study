import { useState } from 'react';
import './Dashboard.css';

export default function Dashboard() {
  const [count, setCount] = useState(0);
  const items = [
    { id: 1, title: 'Conceito MFE', desc: 'Micro Frontends permitem times independentes.' },
    { id: 2, title: 'Module Federation', desc: 'Compartilha módulos em runtime entre apps.' },
    { id: 3, title: 'Remote & Host', desc: 'Host consome remotes via remoteEntry.js.' },
  ];

  return (
    <section className="mfe-dashboard">
      <h2 className="mfe-dashboard__title">Dashboard (Remote MFE)</h2>
      <p className="mfe-dashboard__intro">
        Este bloco é um Micro Frontend carregado dinamicamente pelo Host.
      </p>

      <div className="mfe-dashboard__counter">
        <span>Contador local do remote: {count}</span>
        <button onClick={() => setCount((c) => c + 1)}>+1</button>
      </div>

      <ul className="mfe-dashboard__cards">
        {items.map((item) => (
          <li key={item.id} className="mfe-dashboard__card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
