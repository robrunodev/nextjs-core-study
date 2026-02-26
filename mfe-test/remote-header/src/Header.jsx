import './Header.css';

export default function Header() {
  return (
    <header className="mfe-header">
      <div className="mfe-header__inner">
        <h1 className="mfe-header__logo">MFE Study</h1>
        <nav className="mfe-header__nav">
          <a href="/">Home</a>
          <a href="/#dashboard">Dashboard</a>
        </nav>
      </div>
    </header>
  );
}
