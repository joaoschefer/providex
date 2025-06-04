// Inicio.jsx
import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaFire, FaRocket, FaTags } from "react-icons/fa";
import "./Inicio.css"; // Contém os estilos gerais e a media query para esconder
import ColunaLateral from "../components/ColunaLateral";
import Footer from "../components/Footer";
import { produtos } from "../data/produtos";
import FaixaDiferenciais from "../components/FaixaDiferenciais"; // Este componente já tem a classe

function Inicio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  };

  const maisVendidos = produtos.filter(p =>
    ["esp32_wifi_bt", "arduino_uno_compat", "kit_jumpers_protoboard"].includes(p.id)
  );

  const lancamentos = produtos.filter(p =>
    ["sensor_dht22", "display_oled_096", "orange_pi_zero_3"].includes(p.id)
  );

  return (
    <>
      <div className="main-content">
        <div className="page-container">
          <div className="coluna-lateral">
            <ColunaLateral />
          </div>

          <div className="conteudo-principal">
            {/* Agora chamamos diretamente, pois a classe já está no componente */}
            <FaixaDiferenciais />

            <div className="destaques">
              <Slider {...settings}>
                {/* ... seus slides ... */}
                <div className="banner-slide banner-promo">
                  <div className="icon-wrapper">
                    <FaTags size={40} />
                  </div>
                  <h2>Promoção Especial</h2>
                  <p className="tagline">Economize até 50% em produtos selecionados!</p>
                </div>

                <div className="banner-slide banner-precos">
                  <h2>Preços Baixos Sempre</h2>
                  <p className="subtext">Qualidade e economia para seu projeto.</p>
                </div>

                <div className="banner-slide banner-lancamentos">
                  <div className="icon-wrapper">
                    <FaRocket size={40} />
                  </div>
                  <h2>Lançamentos Exclusivos</h2>
                  <p className="description">Conheça as novidades que acabaram de chegar em nossa loja.</p>
                </div>
              </Slider>
            </div>

            {/* ... restante do código de mais-vendidos e lancamentos ... */}
            <div className="mais-vendidos">
              <h3><FaFire /> Mais vendidos da semana</h3>
              <div className="lista-produtos">
                {maisVendidos.map(produto => (
                  <div className="card-produto" key={produto.id}>
                    <img src={produto.imagem} alt={produto.nome} />
                    <h4>{produto.nome}</h4>
                    <p className="preco">{produto.preco}</p>
                    <Link to={`/produto/${produto.id}`}>
                      <button className="btn-vermais">Ver mais</button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="lancamentos">
              <h3><FaRocket /> Lançamentos</h3>
              <div className="lista-produtos">
                {lancamentos.map(produto => (
                  <div className="card-produto" key={produto.id}>
                    <img src={produto.imagem} alt={produto.nome} />
                    <h4>{produto.nome}</h4>
                    <p className="preco">{produto.preco}</p>
                    <Link to={`/produto/${produto.id}`}>
                      <button className="btn-vermais">Ver mais</button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Inicio;