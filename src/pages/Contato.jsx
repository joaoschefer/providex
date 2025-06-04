import React, { useState } from "react";
import "./Contato.css";
import ColunaLateral from "../components/ColunaLateral";
import Footer from "../components/Footer";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaComments,
  FaQuestionCircle,
} from "react-icons/fa";

function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    console.log("Dados", formData);
    setTimeout(() => setEnviado(false), 3000);
  };

  return (
    <>
      <div className="main-content">
        <div className="page-container">
          <div className="coluna-lateral">
            <ColunaLateral />
          </div>

          <div className="conteudo-contato">
            <h2 className="titulo-contato">Entre em contato</h2>
            <div className="contato-wrapper">
              <form onSubmit={handleSubmit} className="formulario-contato">
                <label>Nome:</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  placeholder="Digite seu nome completo"
                />

                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Digite seu email"
                />

                <label>Mensagem:</label>
                <textarea
                  name="mensagem"
                  rows="5"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  placeholder="Digite sua mensagem aqui..."
                />

                <button type="submit" disabled={enviado}>
                  {enviado ? "Enviando..." : "Enviar"}
                </button>
              </form>

              <div className="lado-direito">
                <div className="suporte">
                  <button className="btn-suporte">
                    <FaQuestionCircle /> Dúvidas frequentes
                  </button>
                  <button className="btn-suporte">
                    <FaComments /> Chat ao vivo
                  </button>
                </div>

                <div className="info-contato">
                  <div className="info-box">
                    <FaMapMarkerAlt className="icone-info" />
                    <div>
                      <strong>Endereço</strong>
                      <p>Rua exemplo, 123 - Centro</p>
                    </div>
                  </div>
                  <div className="info-box">
                    <FaPhoneAlt className="icone-info" />
                    <div>
                      <strong>Telefone</strong>
                      <p>(55) 99999-9999</p>
                    </div>
                  </div>
                  <div className="info-box">
                    <FaEnvelope className="icone-info" />
                    <div>
                      <strong>E-mail</strong>
                      <p>exemploctt@gmail.com</p>
                    </div>
                  </div>
                  <div className="info-box">
                    <FaClock className="icone-info" />
                    <div>
                      <strong>Atendimento</strong>
                      <p>Seg a Sex - 8h às 18h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="perguntas-frequentes">
              <h3>Perguntas frequentes</h3>

              <div className="faq-item">
                <h4>❓ Como posso rastrear meu pedido?</h4>
                <p>
                  Você pode rastrear seu pedido através do link enviado no seu
                  e-mail de confirmação.
                </p>
              </div>

              <div className="faq-item">
                <h4>❓ Quais são as opções de pagamento?</h4>
                <p>Trabalhamos com cartão de crédito, boleto bancário e PIX.</p>
              </div>

              <div className="faq-item">
                <h4>❓ Vocês oferecem suporte técnico?</h4>
                <p>
                  Sim! Nosso suporte está disponível de segunda a sexta, das 8h
                  às 18h, por telefone, e-mail e chat ao vivo.
                </p>
              </div>

              <div className="faq-item">
                <h4>❓ Em quanto tempo meu pedido é enviado?</h4>
                <p>
                  Pedidos confirmados até às 14h são enviados no mesmo dia útil.
                  Após esse horário, o envio ocorre no próximo dia útil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contato;
