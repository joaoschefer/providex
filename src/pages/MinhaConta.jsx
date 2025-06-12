import React, { useState } from "react";
import {
  FaUser,
  FaBoxOpen,
  FaHeart,
  FaLock,
  FaSignOutAlt,
} from "react-icons/fa";
import "./MinhaConta.css";
import Footer from "../components/Footer";

function MinhaConta() {
  const [secao, setSecao] = useState("dados");

  const favoritos = [
    { id: 1, nome: "ESP32 WiFi Bluetooth", preco: "R$ 45,90", imagem: "https://via.placeholder.com/100x100?text=ESP32" },
    { id: 2, nome: "Protoboard 830 pontos", preco: "R$ 12,50", imagem: "https://via.placeholder.com/100x100?text=Protoboard" },
    { id: 3, nome: "Display OLED 0.96\" I2C", preco: "R$ 28,90", imagem: "https://via.placeholder.com/100x100?text=OLED" },
    { id: 4, nome: "Sensor Ultrassônico HC-SR04", preco: "R$ 8,99", imagem: "https://via.placeholder.com/100x100?text=HC-SR04" },
    { id: 5, nome: "Módulo Relé 1 Canal 5V", preco: "R$ 6,75", imagem: "https://via.placeholder.com/100x100?text=Relé" },
    { id: 6, nome: "Kit de Jumpers Macho-Macho", preco: "R$ 9,90", imagem: "https://via.placeholder.com/100x100?text=Jumpers" }
  ];

  const pedidos = [
    { id: "PED-00123", data: "12/06/2025", status: "Entregue", total: "R$ 145,90" },
    { id: "PED-00124", data: "10/06/2025", status: "Em andamento", total: "R$ 89,50" },
    { id: "PED-00125", data: "08/06/2025", status: "Cancelado", total: "R$ 112,00" },
    { id: "PED-00126", data: "05/06/2025", status: "Entregue", total: "R$ 52,40" },
    { id: "PED-00127", data: "02/06/2025", status: "Em separação", total: "R$ 74,30" }
  ];

  const renderConteudo = () => {
    switch (secao) {
      case "dados":
        return (
          <>
            <h2>Informações Pessoais</h2>
            <p>Nome: João da Silva</p>
            <p>E-mail: joao@email.com</p>
            <button className="btn-conta">Editar Dados</button>
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
                      <span className={`status-${pedido.status.toLowerCase().replace(/ /g, "-")}`}>
                        {pedido.status}
                      </span>
                    </p>
                    <p>Total: {pedido.total}</p>
                  </div>
                  <button className="btn-conta">Ver Detalhes</button>
                </div>
              ))}
            </div>
          </>
        );
      case "favoritos":
        return (
          <>
            <h2>Meus Favoritos</h2>
            <div className="lista-favoritos">
              {favoritos.map(prod => (
                <div key={prod.id} className="card-favorito">
                  <img src={prod.imagem} alt={prod.nome} />
                  <div>
                    <h4>{prod.nome}</h4>
                    <p>{prod.preco}</p>
                    <button className="btn-conta">Ver Produto</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        );
      case "senha":
        return (
          <>
            <h2>Alterar Senha</h2>
            <input type="password" placeholder="Senha atual" />
            <input type="password" placeholder="Nova senha" />
            <input type="password" placeholder="Confirmar nova senha" />
            <button className="btn-conta">Salvar Senha</button>
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
          <li onClick={() => setSecao("dados")}><FaUser /> Dados Pessoais</li>
          <li onClick={() => setSecao("pedidos")}><FaBoxOpen /> Meus Pedidos</li>
          <li onClick={() => setSecao("favoritos")}><FaHeart /> Favoritos</li>
          <li onClick={() => setSecao("senha")}><FaLock /> Alterar Senha</li>
          <li onClick={() => alert("Você saiu!")}><FaSignOutAlt /> Sair</li>
        </ul>
      </aside>

      <main className="conteudo-conta">
        {renderConteudo()}
      </main>
    </div>
    <Footer />
    </>
  );
}

export default MinhaConta;
