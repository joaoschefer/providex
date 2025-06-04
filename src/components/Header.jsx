import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaAddressBook,
  // Ícones para o menu hambúrguer e categorias
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

// Definição das categorias (como mostrado acima)
const categoriesForMenu = [
  { to: "/categoria/Placas de Desenvolvimento", icon: FaLaptop, label: "Placas de Dev" },
  { to: "/categoria/Módulos de Comunicação", icon: FaMicrochip, label: "Módulos" },
  { to: "/categoria/Displays", icon: FaWrench, label: "Displays" },
  { to: "/categoria/Sensores", icon: FaTools, label: "Sensores" },
  { to: "/categoria/Acessórios", icon: FaBolt, label: "Acessórios" },
  { to: "/categoria/Componentes Eletrônicos", icon: FaBolt, label: "Componentes" },
  { to: "/categoria/Cabos", icon: FaBolt, label: "Cabos" },
  { to: "/categoria/todos", icon: FaCog, label: "Todos os Produtos" }, // Label um pouco mais descritivo
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fecha o menu quando a rota muda
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo Providex" />
          </Link>
        </div>

        <div className="search">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Buscar..." />
        </div>

        {/* Botões existentes no desktop */}
        <div className="buttons desktop-buttons">
          <Link to="/contato" className="btn">
            <FaAddressBook className="btn-icon" /> <span className="btn-text">Contato</span>
          </Link>
          <Link to="/carrinho" className="btn">
            <FaShoppingCart className="btn-icon" /> <span className="btn-text">Carrinho</span>
          </Link>
          <Link to="/entrar" className="btn">
            <FaUser className="btn-icon" /> <span className="btn-text">Entrar</span>
          </Link>
        </div>

        {/* Ícone do Hamburger para mobile/tablet */}
        <div className="hamburger-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Menu Hambúrguer Dropdown */}
      {isMenuOpen && (
        <nav className="mobile-menu">
          <h3 className="mobile-menu-title">Categorias</h3>
          {categoriesForMenu.map((category) => (
            <Link key={category.to} to={category.to} className="mobile-menu-item" onClick={() => setIsMenuOpen(false)}>
              <category.icon className="mobile-menu-icon" />
              {category.label}
            </Link>
          ))}
          {/* Você pode adicionar outros links aqui se necessário, como Contato, Entrar, etc. para mobile */}
          <div className="mobile-menu-separator"></div>
          <Link to="/contato" className="mobile-menu-item" onClick={() => setIsMenuOpen(false)}>
            <FaAddressBook className="mobile-menu-icon" /> Contato
          </Link>
          <Link to="/entrar" className="mobile-menu-item" onClick={() => setIsMenuOpen(false)}>
            <FaUser className="mobile-menu-icon" /> Entrar
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;