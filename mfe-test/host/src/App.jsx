import { lazy, Suspense } from "react";
import "./App.css";

// Carregamento dinâmico dos Micro Frontends (Module Federation)
const RemoteHeader = lazy(() => import("remoteHeader/Header"));
const RemoteDashboard = lazy(() => import("remoteDashboard/Dashboard"));

function App() {
  return (
    <div className="app">
      <Suspense
        fallback={
          <header className="header-skeleton">Carregando header...</header>
        }>
        <RemoteHeader />
      </Suspense>

      <main className="main">
        <Suspense
          fallback={
            <div className="dashboard-skeleton">Carregando dashboard...</div>
          }>
          <RemoteDashboard />
        </Suspense>
      </main>

      <footer className="footer">
        <span>Shell (Host) — conceitos de MFE</span>
      </footer>
    </div>
  );
}

export default App;
