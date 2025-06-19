import React, { useState } from "react";
import "./PerguntasFreq.css";
import ColunaLateral from "../components/ColunaLateral";
import Footer from "../components/Footer";

const faqs = [
  {
    pergunta: "Quais são as formas de pagamento aceitas?",
    resposta: "Aceitamos cartões de crédito, débito, Pix e boleto bancário.",
  },
  {
    pergunta: "Quanto tempo demora a entrega?",
    resposta:
      "O prazo médio de entrega é de 3 a 7 dias úteis, dependendo da sua região.",
  },
  {
    pergunta: "Posso trocar um produto com defeito?",
    resposta:
      "Sim, nossa política de troca permite substituição em até 7 dias após o recebimento.",
  },
  {
    pergunta: "Vocês vendem para CNPJ?",
    resposta:
      "Sim, realizamos vendas para pessoas jurídicas com emissão de nota fiscal.",
  },
  {
    pergunta: "Como entro em contato com o suporte?",
    resposta:
      "Você pode nos contatar pelo formulário na página de contato ou pelo WhatsApp.",
  },
  {
    pergunta: "É possível retirar o pedido pessoalmente?",
    resposta:
      "Atualmente, trabalhamos apenas com entregas via transportadora ou Correios.",
  },
  {
    pergunta: "Os produtos possuem garantia?",
    resposta:
      "Sim, todos os produtos têm garantia de 3 meses contra defeitos de fabricação.",
  },
  {
    pergunta: "Vocês oferecem desconto para compras em grande quantidade?",
    resposta:
      "Sim, entre em contato com nosso setor comercial para cotações personalizadas.",
  },
  {
    pergunta: "É seguro comprar no site?",
    resposta:
      "Sim, nosso site possui certificado SSL e todas as transações são criptografadas.",
  },
  {
    pergunta: "Como posso acompanhar meu pedido?",
    resposta:
      "Após a confirmação do pagamento, enviamos um link de rastreio por e-mail.",
  },
  {
    pergunta: "Vocês enviam para todo o Brasil?",
    resposta: "Sim, realizamos entregas em todos os estados brasileiros.",
  },
  {
    pergunta: "Posso cancelar um pedido já realizado?",
    resposta:
      "Sim, desde que o pedido ainda não tenha sido despachado. Entre em contato o quanto antes.",
  },
];

function PerguntasFreq() {
  const [ativo, setAtivo] = useState(null);

  const toggle = (index) => {
    setAtivo(ativo === index ? null : index);
  };

  return (
    <>
      <div className="main-content">
        <div className="page-container">
          <div className="coluna-lateral">
            <ColunaLateral />
          </div>

          <div className="conteudo-principal">
            <h1 className="faq-titulo-externo">Perguntas Frequentes</h1>{" "}

            <div className="faq-box">
              <div className="faq-lista">
                {faqs.map((item, index) => (
                  <div
                    className={`faq-item ${ativo === index ? "ativo" : ""}`}
                    key={index}
                    onClick={() => toggle(index)}
                  >
                    <div className="faq-pergunta">{item.pergunta}</div>
                    <div className="faq-resposta">{item.resposta}</div>
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

export default PerguntasFreq;
