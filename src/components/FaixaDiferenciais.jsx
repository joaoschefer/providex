// src/components/FaixaDiferenciais.js
import React from 'react';
import {
  FaShieldAlt,
  FaFlag,
  FaFileInvoiceDollar,
  FaLightbulb,
  FaHeadset
} from 'react-icons/fa';
import './FaixaDiferenciais.css';

const FaixaDiferenciais = () => {
  const diferenciais = [
    { icon: <FaShieldAlt />, text: <>COMPRA<br />SEGURA</> },
    { icon: <FaFlag />, text: <>EMPRESA<br />BRASILEIRA</> },
    { icon: <FaFileInvoiceDollar />, text: <>NOTA<br />FISCAL</> },
    { icon: <FaLightbulb />, text: <>INOVAÇÃO E<br />TECNOLOGIA</> }, // "E" pode ficar na primeira ou segunda linha
    { icon: <FaHeadset />, text: <>SUPORTE<br />DEDICADO</> },
  ];

  return (
    <div className="faixa-diferenciais-container">
      {diferenciais.map((item, index) => (
        <div className="diferencial-item" key={index}>
          <span className="diferencial-icon">{item.icon}</span>
          <span className="diferencial-text">{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default FaixaDiferenciais;