// src/components/ColunaLateral.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaLaptop,
  FaMicrochip,
  FaWrench,
  FaTools,
  FaBolt,
  FaCog,
} from "react-icons/fa";
import "./ColunaLateral.css";

function ColunaLateral() {
  const desktopBreakpoint = 769; // Defina o breakpoint (ex: visível acima de 768px)
  const [isDesktopView, setIsDesktopView] = useState(window.innerWidth >= desktopBreakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopView(window.innerWidth >= desktopBreakpoint);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Verifica o tamanho inicial

    return () => window.removeEventListener('resize', handleResize); // Limpeza
  }, []);

  // Se não for a visualização desktop, o componente não renderiza nada
  if (!isDesktopView) {
    return null;
  }

  // Conteúdo original da ColunaLateral (renderizado apenas em desktop)
  return (
    <div className="menu-lateral">
      <div className="lista">
        <h2 className="titulo-categorias">Categorias</h2>
        <div className="linha-separadora"></div>
        <Link to="/categoria/Placas de Desenvolvimento" className="lista-item">
          <FaLaptop className="icon" /> Placas de Dev
        </Link>
        {/* ... Mantenha todos os seus links de categoria aqui ... */}
        <Link to="/categoria/Módulos de Comunicação" className="lista-item">
          <FaMicrochip className="icon" /> Módulos
        </Link>
        <Link to="/categoria/Displays" className="lista-item">
          <FaWrench className="icon" /> Displays
        </Link>
        <Link to="/categoria/Sensores" className="lista-item">
          <FaTools className="icon" /> Sensores
        </Link>
        <Link to="/categoria/Acessórios" className="lista-item">
          <FaBolt className="icon" /> Acessórios
        </Link>
        <Link to="/categoria/Componentes Eletrônicos" className="lista-item">
          <FaBolt className="icon" /> Componentes
        </Link>
        <Link to="/categoria/Cabos" className="lista-item">
          <FaBolt className="icon" /> Cabos
        </Link>
        <Link to="/categoria/todos" className="lista-item">
          <FaCog className="icon" /> Todos
        </Link>
      </div>

      {/* A seção de Depoimentos (se você quiser mantê-la apenas no desktop) */}
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