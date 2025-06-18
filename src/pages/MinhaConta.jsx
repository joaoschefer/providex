import React, { useState } from "react";
import {
  FaUser,
  FaBoxOpen,
  FaHeart,
  FaSignOutAlt,
  FaGoogle,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import "./MinhaConta.css";
import Footer from "../components/Footer";
import fotoPerfil from "../assets/foto-perfil.jpg";
import { produtos } from "../data/produtos";

function MinhaConta() {
  const [secao, setSecao] = useState("dados");

  const favoritosIds = [
    "esp32_wifi_bt",
    "kit_jumpers_protoboard",
    "display_oled_096",
    "modulo_rele_1_canal",
  ];

  const pedidos = [
    {
      id: "PED-00123",
      data: "12/06/2025",
      status: "Entregue",
      total: "R$ 145,90",
    },
    {
      id: "PED-00124",
      data: "10/06/2025",
      status: "Em andamento",
      total: "R$ 89,50",
    },
    {
      id: "PED-00125",
      data: "08/06/2025",
      status: "Cancelado",
      total: "R$ 112,00",
    },
    {
      id: "PED-00126",
      data: "05/06/2025",
      status: "Entregue",
      total: "R$ 52,40",
    },
    {
      id: "PED-00127",
      data: "02/06/2025",
      status: "Em separação",
      total: "R$ 74,30",
    },
  ];

  const renderConteudo = () => {
    switch (secao) {
      case "dados":
        return (
          <>
            <h2>Informações Pessoais</h2>
            <div className="dados-pessoais-container">
              <div className="perfil-header">
                <img src={fotoPerfil} alt="Foto de perfil" className="foto-perfil" />
                <h3>João da Silva</h3>
                <p>joao@email.com</p>
                <span className="badge-nivel-cliente">Ouro ⭐</span>
              </div>

              <div className="cards-info-wrapper">
                <div className="info-card">
                  <h4>Dados Básicos</h4>
                  <p>
                    <strong>Nome:</strong> João da Silva
                  </p>
                  <p>
                    <strong>E-mail:</strong> joao@email.com
                  </p>
                </div>

                <div className="info-card">
                  <h4>Endereço de Entrega</h4>
                  <p>Rua das Inovações, 123</p>
                  <p>Bairro da Tecnologia - São Paulo/SP</p>
                  <p>CEP: 01234-567</p>
                </div>
              </div>

              <div className="acoes-conta">
                <button className="btn-primario">Editar Dados</button>
                <button className="btn-secundario-perigo">Excluir Conta</button>
              </div>

              <div className="form-senha-card">
                <h4>Alterar Senha</h4>
                <div className="input-group">
                  <input type="password" placeholder=" " id="senhaAtual" />
                  <label htmlFor="senhaAtual">Senha atual</label>
                </div>
                <div className="input-group">
                  <input type="password" placeholder=" " id="novaSenha" />
                  <label htmlFor="novaSenha">Nova senha</label>
                </div>
                <div className="input-group">
                  <input type="password" placeholder=" " id="confirmarSenha" />
                  <label htmlFor="confirmarSenha">Confirmar nova senha</label>
                </div>
                <button className="btn-primario">Salvar Senha</button>
              </div>
            </div>

            <div className="redes-conectadas">
              <p>
                <strong>Contas conectadas:</strong>
              </p>
              <div className="logos-sociais">
                <FaGoogle />
                <FaFacebookF />
                <FaLinkedinIn />
              </div>
            </div>
          </>
        );

      case "pedidos":
        return (
          <>
            <h2>Meus Pedidos</h2>
            <div className="lista-pedidos">
              {pedidos.map((pedido) => (
                <div key={pedido.id} className="card-pedido">
                  <div>
                    <strong>{pedido.id}</strong>
                    <p>Data: {pedido.data}</p>
                    <p>
                      Status:{" "}
                      <span
                        className={`status-tag status-${pedido.status
                          .toLowerCase()
                          .replace(/ /g, "-")}`}
                      >
                        {pedido.status}
                      </span>
                    </p>
                    <p>Total: {pedido.total}</p>
                  </div>
                  <button className="btn-primario">Ver Detalhes</button>
                </div>
              ))}
            </div>
          </>
        );

      case "favoritos":
        const favoritos = produtos.filter((p) => favoritosIds.includes(p.id));
        return (
          <>
            <h2>Meus Favoritos</h2>
            <div className="lista-favoritos">
              {favoritos.map((prod) => (
                <div key={prod.id} className="card-favorito">
                  <img src={prod.imagem} alt={prod.nome} />
                  <div>
                    <h4>{prod.nome}</h4>
                    <p>{prod.preco}</p>
                    <a href={`/produto/${prod.id}`} className="btn-primario">
                      Ver Produto
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </>
        );

      default:
        return <p>Bem-vindo à sua conta.</p>;
    }
  };

  return (
    <>
      <div className="minha-conta-layout">
        <aside className="sidebar-conta">
          <h3>Minha Conta</h3>
          <ul>
            <li onClick={() => setSecao("dados")}>
              <FaUser /> Dados Pessoais
            </li>
            <li onClick={() => setSecao("pedidos")}>
              <FaBoxOpen /> Meus Pedidos
            </li>
            <li onClick={() => setSecao("favoritos")}>
              <FaHeart /> Favoritos
            </li>
            <li onClick={() => alert("Você saiu!")}>
              <FaSignOutAlt /> Sair
            </li>
          </ul>
        </aside>

        <main className="conteudo-conta">{renderConteudo()}</main>
      </div>
      <Footer />
    </>
  );
}

export default MinhaConta;