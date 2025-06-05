// src/components/ColunaLateral.jsx
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaLaptop,
  FaMicrochip,
  FaWrench,
  FaTools,
  FaBolt,
  FaCog,
} from "react-icons/fa";
import "./ColunaLateral.css";

// src/components/ColunaLateral.jsx
function ColunaLateral() {
  const desktopBreakpoint = 769;
  const [isDesktopView, setIsDesktopView] = useState(window.innerWidth >= desktopBreakpoint);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopView(window.innerWidth >= desktopBreakpoint);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isDesktopView) {
    return null;
  }

  // Função para determinar se um link de categoria deve estar ativo
  const isCategoryActive = (categoryPath) => {
    // Verifica se o pathname atual começa com o caminho da categoria ou é exatamente o caminho
    return location.pathname.startsWith(categoryPath);
  };

  return (
    <div className="menu-lateral">
      <div className="lista">
        <h2 className="titulo-categorias">Categorias</h2>
        <div className="linha-separadora"></div>
        <NavLink
          to="/categoria/Placas de Desenvolvimento"
          className={({ isActive }) => (isActive ? "lista-item active-lista-item" : "lista-item")}
        >
          <FaLaptop className="icon" /> Placas de Dev
        </NavLink>
        <NavLink
          to="/categoria/Módulos de Comunicação"
          className={({ isActive }) => (isActive ? "lista-item active-lista-item" : "lista-item")}
        >
          <FaMicrochip className="icon" /> Módulos
        </NavLink>
        <NavLink
          to="/categoria/Displays"
          className={({ isActive }) => (isActive ? "lista-item active-lista-item" : "lista-item")}
        >
          <FaWrench className="icon" /> Displays
        </NavLink>
        <NavLink
          to="/categoria/Sensores"
          className={({ isActive }) => (isActive ? "lista-item active-lista-item" : "lista-item")}
        >
          <FaTools className="icon" /> Sensores
        </NavLink>
        <NavLink
          to="/categoria/Acessórios"
          className={({ isActive }) => (isActive ? "lista-item active-lista-item" : "lista-item")}
        >
          <FaBolt className="icon" /> Acessórios
        </NavLink>
        <NavLink
          to="/categoria/Componentes Eletrônicos"
          className={({ isActive }) => (isActive ? "lista-item active-lista-item" : "lista-item")}
        >
          <FaBolt className="icon" /> Componentes
        </NavLink>
        <NavLink
          to="/categoria/Cabos"
          className={({ isActive }) => (isActive ? "lista-item active-lista-item" : "lista-item")}
        >
          <FaBolt className="icon" /> Cabos
        </NavLink>
        <NavLink
          to="/categoria/todos"
          className={({ isActive }) => (isActive ? "lista-item active-lista-item" : "lista-item")}
          end // 'end' garante que só será ativo se o path for EXATAMENTE "/categoria/todos"
        >
          <FaCog className="icon" /> Todos
        </NavLink>
      </div>

      <div className="depoimentos">
        <h2 className="titulo-depoimentos">Depoimentos</h2>
        <div className="linha-separadora"></div>
        <div className="depoimentos-container">
          <div className="depoimento-card">
            <p>"Ótima experiência de compra..."</p>
            <span>- João Silva</span>
          </div>
          <div className="depoimento-card">
            <p>"Os produtos chegaram muito rápido e exatamente como descrito. Qualidade excelente, virei cliente!"</p>
            <span>- Maria Oliveira</span>
          </div>
          <div className="depoimento-card">
            <p>"Tive uma dúvida sobre um componente e o suporte foi incrivelmente atencioso e rápido. Recomendo demais a loja!"</p>
            <span>- Paulo Pereira</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColunaLateral;

