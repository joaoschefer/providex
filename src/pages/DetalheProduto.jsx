import { useParams } from "react-router-dom";
import { useState } from "react";
import { produtos } from "../data/produtos";
import ColunaLateral from "../components/ColunaLateral";
import "./DetalheProduto.css";
import Footer from "../components/Footer";

function DetalheProduto() {
  const { id } = useParams();
  const produto = produtos.find((p) => p.id === id);
  const [activeTab, setActiveTab] = useState("descricao");

  if (!produto) return <p>Produto não encontrado.</p>;

  const formatarCampo = (chave) => {
    const traducoes = {
      tensao: "Tensão",
      conexao: "Conexão",
      processador: "Processador",
    };
    return traducoes[chave] || chave.charAt(0).toUpperCase() + chave.slice(1);
  };

  const avaliacoes = [5, 5, 4, 5, 4, 3, 5, 5, 2, 1]; // exemplo

  const media =
    avaliacoes.reduce((acc, nota) => acc + nota, 0) / avaliacoes.length;

  const produtosRelacionados = produtos.filter((p) => p.id !== produto.id).slice(0, 4);

  return (
    <>
    <div className="main-content">
      <div className="page-container">
        <ColunaLateral />
        <section className="produto-detalhes">
          <div className="breadcrumb">
            <a href="/">Início</a> &gt;
            <a href="/produtos">Produtos</a> &gt;
            <span>{produto.nome}</span>
          </div>

          <div className="produto-detalhes-conteudo">
            <div className="galeria-produto">
              <div className="imagem-principal">
                <img src={produto.imagem} alt={produto.nome} />
                {produto.precoAnterior && produto.precoAnterior > produto.preco && (
                  <span className="selo-promocao">Promoção</span>
                )}
              </div>
              <div className="miniaturas">
                {[...Array(4)].map((_, i) => (
                  <img key={i} src={produto.imagem} alt={`Miniatura ${i + 1}`} />
                ))}
              </div>
            </div>

            <div className="info-produto">
              <h1>{produto.nome}</h1>
              <div className="preco">
                {produto.precoAnterior && (
                  <span className="preco-antigo">R$ {produto.precoAnterior}</span>
                )}
                <span className="preco-atual">R$ {produto.preco}</span>
              </div>
              <p><strong>Categoria:</strong> {produto.categoria}</p>
              <p><strong>Marca:</strong> {produto.marca}</p>
              <p><strong>Disponibilidade:</strong> {produto.disponibilidade}</p>

              <div className="acoes">
                <button className="btn-comprar">Adicionar ao Carrinho</button>
              </div>

              <div className="info-adicional">
                <p><i className="fa fa-truck"></i> Frete grátis para compras acima de R$ 200,00</p>
                <p><i className="fa fa-credit-card"></i> Até 12x sem juros</p>
                <p><i className="fa fa-shield"></i> Garantia de {produto.garantia}</p>
              </div>
            </div>
          </div>

          <div className="abas">
            <button onClick={() => setActiveTab("descricao")} className={activeTab === "descricao" ? "ativa" : ""}>Descrição</button>
            <button onClick={() => setActiveTab("especificacoes")} className={activeTab === "especificacoes" ? "ativa" : ""}>Especificações</button>
            <button onClick={() => setActiveTab("avaliacoes")} className={activeTab === "avaliacoes" ? "ativa" : ""}>Avaliações</button>
          </div>

          <div className="conteudo-abas">
            {activeTab === "descricao" && (
              <div>
                <p>{produto.descricaoLonga || produto.descricao}</p>
                <p><strong>Peso:</strong> {produto.peso}</p>
                <p><strong>Conteúdo da Embalagem:</strong> {produto.conteudo}</p>
                <p><strong>Datasheet:</strong>{" "}
                  <a href={produto.datasheet} target="_blank" rel="noopener noreferrer">
                    Ver documento
                  </a>
                </p>
              </div>
            )}

            {activeTab === "especificacoes" && (
              <ul>
                {Object.entries(produto.especificacoes).map(([k, v]) => (
                  <li key={k}><strong>{formatarCampo(k)}:</strong> {v}</li>
                ))}
              </ul>
            )}

            {activeTab === "avaliacoes" && (
              <div className="avaliacoes">
                <div className="resumo-avaliacoes">
                  <div className="media-nota">
                    <div className="nota-numero">{media.toFixed(1)}</div>
                    <div className="estrelas">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`fa fa-star ${
                            i < Math.round(media) ? "filled" : ""
                          }`}
                        ></i>
                      ))}
                    </div>
                    <div className="total-avaliacoes">
                      {avaliacoes.length} avaliações
                    </div>
                  </div>

                  <div className="barras-avaliacao">
                    {[5, 4, 3, 2, 1].map((estrela) => {
                      const count = avaliacoes.filter((a) => a === estrela).length;
                      const percent = Math.round((count / avaliacoes.length) * 100);
                      return (
                        <div key={estrela} className="barra-linha">
                          <span>{estrela} estrelas</span>
                          <div className="barra-fundo">
                            <div
                              className="barra-preenchida"
                              style={{ width: `${percent}%` }}
                            ></div>
                          </div>
                          <span>{percent}%</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="produtos-relacionados">
            <h2 className="titulo-sessao">Produtos Relacionados</h2>
            <div className="grid-relacionados">
              {produtosRelacionados.map((p) => (
                <div key={p.id} className="card-produto">
                  <div className="img-card"><img src={p.imagem} alt={p.nome} /></div>
                  <h3>{p.nome}</h3>
                  <p className="preco-card">R$ {p.preco}</p>
                  <a className="btn-detalhes" href={`/produto/${p.id}`}>Ver Detalhes</a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default DetalheProduto;
