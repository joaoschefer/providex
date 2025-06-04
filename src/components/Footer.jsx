import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa';
import logo from "../assets/logo-providex.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <div className="logo-container">
              <h1>Providex</h1>
            </div>
            <p className="footer-description">
              A Providex é especializada em hardware eletrônico de alta qualidade para projetos de todos os níveis, 
              desde iniciantes até profissionais.
            </p>
            <div className="social-media">
              <a href="#" className="social-link"><FaFacebookF /></a>
              <a href="#" className="social-link"><FaInstagram /></a>
              <a href="#" className="social-link"><FaTwitter /></a>
              <a href="#" className="social-link"><FaYoutube /></a>
              <a href="#" className="social-link"><FaLinkedinIn /></a>
            </div>
          </div>

          <div className="footer-section links">
            <h3 className="footer-title">Links Rápidos</h3>
            <ul className="footer-links">
              <li><Link to="/">Início</Link></li>
              <li><Link to="/categoria/todos">Produtos</Link></li>
              <li><Link to="/contato">Contato</Link></li>
              <li><Link to="/entrar">Minha Conta</Link></li>
            </ul>
          </div>

          <div className="footer-section categories">
            <h3 className="footer-title">Categorias</h3>
            <ul className="footer-links">
              <li><Link to="/categoria/placas-desenvolvimento">Placas de Desenvolvimento</Link></li>
              <li><Link to="/categoria/sensores">Sensores</Link></li>
              <li><Link to="/categoria/displays">Displays</Link></li>
              <li><Link to="/categoria/componentes">Componentes</Link></li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h3 className="footer-title">Contato</h3>
            <div className="contact-info">
              <p><FaMapMarkerAlt /> Av. Tecnologia, 1000 - São Paulo</p>
              <p><FaPhoneAlt /> (11) 9999-9999</p>
              <p><FaEnvelope /> contato@providex.com.br</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Providex - Todos os direitos reservados</p>
          <div className="footer-bottom-links">
            <Link to="/privacidade">Política de Privacidade</Link>
            <Link to="/termos">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
