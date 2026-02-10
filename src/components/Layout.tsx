import { NavLink, Outlet } from "react-router-dom";

const linkedinUrl = "https://www.linkedin.com/in/brahim-el-mossaoui-347a58223/";

export default function Layout() {
  return (
    <div className="app-shell">
      <header className="header">
        <div className="container header-inner">
          <div className="brand">Brahim El Mossaoui</div>

          <nav className="nav">
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>
              Blog
            </NavLink>
            <NavLink to="/internship" className={({ isActive }) => (isActive ? "active" : "")}>
              Internship
            </NavLink>
            <a href={linkedinUrl} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </nav>
        </div>
      </header>

      <main className="container main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>(c) {new Date().getFullYear()} - Portfolio</span>
          <span className="muted">WPL-stage blog</span>
        </div>
      </footer>
    </div>
  );
}
