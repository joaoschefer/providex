import React, { useState } from "react";
import "./Carrinho.css";
import ColunaLateral from "../components/ColunaLateral";
import Footer from "../components/Footer";

function Carrinho() {
  const [produtos, setProdutos] = useState([
    { id: 1, nome: "Arduino Uno R3", preco: 89.9, quantidade: 2 },
    { id: 2, nome: "Sensor de Temperatura DHT22", preco: 29.9, quantidade: 1 }
  ]);
  const [mostrarPagamento, setMostrarPagamento] = useState(false);
  const [formaPagamento, setFormaPagamento] = useState("");

  const atualizarQuantidade = (id, novaQtd) => {
    if (novaQtd >= 1) {
      setProdutos((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantidade: novaQtd } : item
        )
      );
    }
  };

  const removerItem = (id) => {
    const confirmar = window.confirm("Tem certeza que deseja remover este item?");
    if (confirmar) {
      setProdutos((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const subtotal = produtos.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );
  const frete = 15.9;
  const total = subtotal + frete;

  return (
    <>
    <div className="main-content">
      <div className="page-container">
        <ColunaLateral />

        <div className="conteudo-principal">
          <h2 className="titulo-carrinho">Carrinho de Compras</h2>
          <div className="carrinho-layout">
            <div className="carrinho-produtos">
              <table className="tabela-carrinho">
                <thead>
                  <tr>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>Total</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {produtos.map((item) => (
                    <tr key={item.id}>
                      <td>{item.nome}</td>
                      <td>R$ {item.preco.toFixed(2)}</td>
                      <td>
                        <input
                          type="number"
                          min="1"
                          value={item.quantidade}
                          onChange={(e) =>
                            atualizarQuantidade(item.id, parseInt(e.target.value))
                          }
                        />
                      </td>
                      <td>R$ {(item.preco * item.quantidade).toFixed(2)}</td>
                      <td>
                        <button
                          className="btn-remover"
                          onClick={() => removerItem(item.id)}
                        >
                          Remover
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="carrinho-resumo">
              <h3>Resumo do Pedido</h3>
              <div className="resumo-linha">
                <span>Subtotal</span>
                <span>R$ {subtotal.toFixed(2)}</span>
              </div>
              <div className="resumo-linha">
                <span>Frete</span>
                <span>R$ {frete.toFixed(2)}</span>
              </div>
              <div className="resumo-total">
                <span>Total</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>

              <div className="cupom">
                <p><strong>Cupom de Desconto</strong></p>
                <input type="text" placeholder="Digite seu cupom" />
                <button className="btn-aplicar">Aplicar</button>
              </div>

              {!mostrarPagamento && (
                <button
                  className="btn-finalizar"
                  onClick={() => setMostrarPagamento(true)}
                >
                  Finalizar Compra
                </button>
              )}
              <button className="btn-continuar">Continuar Comprando</button>

              {mostrarPagamento && (
                <div className="forma-pagamento">
                  <h4>Escolha a Forma de Pagamento</h4>
                  <select
                    value={formaPagamento}
                    onChange={(e) => setFormaPagamento(e.target.value)}
                  >
                    <option value="">Selecione...</option>
                    <option value="cartao">Cartão de Crédito</option>
                    <option value="boleto">Boleto Bancário</option>
                    <option value="pix">Pix</option>
                  </select>
                  <button
                    className="btn-pagar"
                    disabled={!formaPagamento}
                  >
                    Pagar Agora
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Carrinho;
