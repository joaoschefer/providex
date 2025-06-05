import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaAddressBook,
  FaLaptop,
  FaMicrochip,
  FaWrench,
  FaTools,
  FaBolt,
  FaCog,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./Header.css";
import logo from "../assets/logo-providex.png";

const categoriesForMenu = [
  { to: "/categoria/Placas de Desenvolvimento", icon: FaLaptop, label: "Placas de Dev" },
  { to: "/categoria/Módulos de Comunicação", icon: FaMicrochip, label: "Módulos" },
  { to: "/categoria/Displays", icon: FaWrench, label: "Displays" },
  { to: "/categoria/Sensores", icon: FaTools, label: "Sensores" },
  { to: "/categoria/Acessórios", icon: FaBolt, label: "Acessórios" },
  { to: "/categoria/Componentes Eletrônicos", icon: FaBolt, label: "Componentes" },
  { to: "/categoria/Cabos", icon: FaBolt, label: "Cabos" },
  { to: "/categoria/todos", icon: FaCog, label: "Todos os Produtos" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="Logo Providex" />
          </NavLink>
        </div>

        <div className="search">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Buscar..." />
        </div>

        <div className="buttons desktop-buttons">
          {/* CORREÇÃO AQUI: Use className como uma função de callback */}
          <NavLink
            to="/contato"
            className={({ isActive }) => (isActive ? "btn active-btn" : "btn")}
          >
            <FaAddressBook className="btn-icon" /> <span className="btn-text">Contato</span>
          </NavLink>
          <NavLink
            to="/carrinho"
            className={({ isActive }) => (isActive ? "btn active-btn" : "btn")}
          >
            <FaShoppingCart className="btn-icon" /> <span className="btn-text">Carrinho</span>
          </NavLink>
          <NavLink
            to="/entrar"
            className={({ isActive }) => (isActive ? "btn active-btn" : "btn")}
          >
            <FaUser className="btn-icon" /> <span className="btn-text">Entrar</span>
          </NavLink>
        </div>

        <div className="hamburger-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {isMenuOpen && (
        <nav className="mobile-menu">
          <h3 className="mobile-menu-title">Categorias</h3>
          {categoriesForMenu.map((category) => (
            <NavLink
              key={category.to}
              to={category.to}
              // CORREÇÃO AQUI para itens do menu mobile também
              className={({ isActive }) => (isActive ? "mobile-menu-item active-mobile-item" : "mobile-menu-item")}
              onClick={() => setIsMenuOpen(false)}
            >
              <category.icon className="mobile-menu-icon" />
              {category.label}
            </NavLink>
          ))}
          <div className="mobile-menu-separator"></div>
          <NavLink
            to="/contato"
            className={({ isActive }) => (isActive ? "mobile-menu-item active-mobile-item" : "mobile-menu-item")}
            onClick={() => setIsMenuOpen(false)}
          >
            <FaAddressBook className="mobile-menu-icon" /> Contato
          </NavLink>
          <NavLink
            to="/entrar"
            className={({ isActive }) => (isActive ? "mobile-menu-item active-mobile-item" : "mobile-menu-item")}
            onClick={() => setIsMenuOpen(false)}
          >
            <FaUser className="mobile-menu-icon" /> Entrar
          </NavLink>
        </nav>
      )}
    </header>
  );
}

export default Header;