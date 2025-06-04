import React from "react";
import "./Entrar.css";
import ColunaLateral from "../components/ColunaLateral";
import Footer from "../components/Footer";

function Entrar() {
  return (
    <>
    <div className="main-content">
      <div className="page-content">
        <ColunaLateral />

        <div className="conteudo-principal">
          <h2 className="titulo-entrar">Identificação</h2>
          <p className="descricao-entrar">
            Acesse sua conta ou crie uma nova.
          </p>

          <div className="entrar-conteudo">
            {/* Formulário de Login */}
            <form className="form-box">
              <h3>Entrar</h3>

              <label>E-mail</label>
              <input type="email" placeholder="Seu e-mail" required />

              <label>Senha</label>
              <input type="password" placeholder="Sua senha" required />

              <div className="linha-opcoes">
                <div className="checkbox-linha">
                  <input type="checkbox" id="lembrar" />
                  <label htmlFor="lembrar">Lembrar-me</label>
                </div>
                <a href="#">Esqueceu a senha?</a>
              </div>

              <button type="submit" className="btn-principal">
                Entrar
              </button>

              <div className="linha-ou">Ou entre com</div>
              <div className="redes-sociais">
                <button className="google">Google</button>
                <button className="facebook">Facebook</button>
              </div>

              <p className="troca">
                Não tem uma conta? <a href="#">Cadastre-se</a>
              </p>
            </form>

            {/* Formulário de Cadastro */}
            <form className="form-box">
              <h3>Cadastrar</h3>

              <label>Nome Completo</label>
              <input type="text" placeholder="Seu nome completo" required />

              <label>E-mail</label>
              <input type="email" placeholder="Seu e-mail" required />

              <label>Senha</label>
              <input type="password" placeholder="Sua senha" required />

              <label>Confirmar Senha</label>
              <input type="password" placeholder="Confirme sua senha" required />

              <div className="checkbox-linha">
                <input type="checkbox" id="termos" required />
                <label htmlFor="termos">
                  Concordo com os <a href="#">Termos de Uso</a> e{" "}
                  <a href="#">Política de Privacidade</a>
                </label>
              </div>

              <button type="submit" className="btn-principal">
                Criar Conta
              </button>

              <p className="troca">
                Já tem uma conta? <a href="#">Entrar</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Entrar;
