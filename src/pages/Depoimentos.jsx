import React from "react";
import ColunaLateral from "../components/ColunaLateral";
import Footer from "../components/Footer";
import "./Depoimentos.css";

function Depoimentos() {
  return (
    <>
      <div className="main-content">
        <div className="page-container">
          <div className="coluna-lateral">
            <ColunaLateral />
          </div>

          <div className="conteudo-depoimentos-page">
            <h2 className="titulo-depoimentos-page">Depoimentos de Clientes</h2>

            <section className="lista-depoimentos-page">
              <article className="depoimento-page">
                <div className="avatar-inicial">A</div>
                <div>
                  <p className="citacao">
                    “A Providex transformou a maneira como gerenciamos nossos
                    componentes eletrônicos. Atendimento impecável!”
                  </p>
                  <h4>— Ana Ribeiro</h4>
                </div>
              </article>

              <article className="depoimento-page">
                <div className="avatar-inicial">C</div>
                <div>
                  <p className="citacao">
                    “Recebi meu pedido muito rápido e com total suporte técnico.
                    Recomendo demais!”
                  </p>
                  <h4>— Carlos Almeida</h4>
                </div>
              </article>

              <article className="depoimento-page">
                <div className="avatar-inicial">M</div>
                <div>
                  <p className="citacao">
                    “A plataforma é intuitiva e os preços são justos. Sempre
                    volto a comprar com eles.”
                  </p>
                  <h4>— Mariana Lopes</h4>
                </div>
              </article>

              <article className="depoimento-page">
                <div className="avatar-inicial">L</div>
                <div>
                  <p className="citacao">
                    “Achei tudo o que precisava para meu projeto de automação.
                    Entrega rápida e produtos de ótima qualidade!”
                  </p>
                  <h4>— Lucas Andrade</h4>
                </div>
              </article>

              <article className="depoimento-page">
                <div className="avatar-inicial">J</div>
                <div>
                  <p className="citacao">
                    “O atendimento da equipe foi excelente. Tiraram todas as
                    minhas dúvidas com paciência e clareza.”
                  </p>
                  <h4>— Juliana Costa</h4>
                </div>
              </article>

              <article className="depoimento-page">
                <div className="avatar-inicial">V</div>
                <div>
                  <p className="citacao">
                    “Minha experiência com a Providex foi incrível. Os kits
                    educacionais chegaram completos e bem embalados.”
                  </p>
                  <h4>— Vinícius Mota</h4>
                </div>
              </article>

              <article className="depoimento-page">
                <div className="avatar-inicial">T</div>
                <div>
                  <p className="citacao">
                    “Já comprei várias vezes e sempre fui muito bem atendido. Os
                    preços são competitivos e o site é bem organizado.”
                  </p>
                  <h4>— Tiago Fernandes</h4>
                </div>
              </article>

              <article className="depoimento-page">
                <div className="avatar-inicial">S</div>
                <div>
                  <p className="citacao">
                    “Encontrei componentes que não achei em nenhum outro lugar.
                    A Providex virou minha referência.”
                  </p>
                  <h4>— Sofia Martins</h4>
                </div>
              </article>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Depoimentos;
