import { NavLink, Outlet } from "react-router";
import { CurrentUser } from "./CurrentUser";
import "./MainLayout.css";

export function MainLayout() {
  return (
    <div>
      <header className="site-header">
        <NavLink to="/" className="brand">
          My Books
        </NavLink>
        <nav className="site-nav">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/components">Components</NavLink>
          <NavLink to="/create">Create Book</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
        <CurrentUser />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
