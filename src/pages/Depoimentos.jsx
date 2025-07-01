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
                <p>
                  “A Providex transformou a maneira como gerenciamos nossos
                  componentes eletrônicos. Atendimento impecável!”
                </p>
                <h4>— Ana Ribeiro, Engenheira Eletrônica</h4>
              </article>

              <article className="depoimento-page">
                <p>
                  “Recebi meu pedido muito rápido e com total suporte técnico.
                  Recomendo demais!”
                </p>
                <h4>— Carlos Almeida, Técnico em Robótica</h4>
              </article>

              <article className="depoimento-page">
                <p>
                  “A plataforma é intuitiva e os preços são justos. Sempre volto
                  a comprar com eles.”
                </p>
                <h4>— Mariana Lopes, Desenvolvedora Maker</h4>
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
