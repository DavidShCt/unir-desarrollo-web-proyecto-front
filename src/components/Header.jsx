import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">📚 Biblioteca Online</h1>
      <nav className="header__nav">
        <Link to="/" className="header__link">Inicio</Link>
        <Link to="/alquileres" className="header__link">Mis Alquileres</Link>
        <Link to="/buscar" className="header__link">Buscar</Link>
      </nav>
    </header>
  );
}
