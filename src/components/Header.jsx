// src/components/Header.jsx
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { FaHome, FaSearch, FaBookReader, FaBars } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Cerrar si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__logo">
          <Link to="/" onClick={closeMenu}>
            📚 Biblioteca Online
          </Link>
        </h1>

        <button className="header__toggle" onClick={toggleMenu}>
          <FaBars />
        </button>

        <nav
          ref={navRef}
          className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}
        >
          <Link to="/" className="header__link" onClick={closeMenu}>
            <FaHome className="header__icon" /> Inicio
          </Link>
          <Link to="/alquileres" className="header__link" onClick={closeMenu}>
            <FaBookReader className="header__icon" /> Mis Alquileres
          </Link>
        </nav>
      </div>
    </header>
  );
}