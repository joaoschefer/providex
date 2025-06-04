// src/pages/PaginaCategoria.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { produtos as todosOsProdutos } from '../data/produtos'; // Renomeado para clareza
import ColunaLateral from '../components/ColunaLateral';
import Footer from '../components/Footer';
import './PaginaCategoria.css'; // Usaremos este CSS para ambos os casos

// Você pode reutilizar o seu componente de card de produto ou este exemplo
function ProdutoCard({ produto }) {
  return (
    // Use a mesma classe que você já tem para os cards de produto
    // Exemplo: <div className="card-produto"> ou <div className="produto-card-categoria">
    <div className="produto-card-categoria"> {/* Ajuste a classe se necessário */}
      <Link to={`/produto/${produto.id}`}>
        <img src={produto.imagem} alt={produto.nome} />
        <h4>{produto.nome}</h4>
        <p className="preco">{produto.preco}</p>
        {/* Se você tinha um botão "Ver mais" no Produtos.jsx, pode adicioná-lo aqui */}
        <button className="btn-vermais">Ver mais</button>
      </Link>
    </div>
  );
}

function PaginaCategoria() {
  // useParams() vai pegar o valor de :nomeCategoria da URL
  // Se a URL for /categoria/todos, nomeCategoriaDaURL será "todos"
  // Se a URL for /categoria/Placas de Desenvolvimento, nomeCategoriaDaURL será "Placas de Desenvolvimento"
  const { nomeCategoria: nomeCategoriaDaURL } = useParams();

  const nomeCategoriaLimpo = decodeURIComponent(nomeCategoriaDaURL); // Decodifica se tiver caracteres como %20

  let produtosParaExibir;
  let tituloDaPagina;

  // Verifica se a categoria é "todos" (ignorando maiúsculas/minúsculas)
  if (nomeCategoriaLimpo.toLowerCase() === "todos") {
    produtosParaExibir = todosOsProdutos; // Pega todos os produtos
    tituloDaPagina = "Todos os Produtos";
  } else {
    // Filtra os produtos pela categoria específica (ignorando maiúsculas/minúsculas)
    produtosParaExibir = todosOsProdutos.filter(
      (produto) => produto.categoria.toLowerCase() === nomeCategoriaLimpo.toLowerCase()
    );
    tituloDaPagina = `Categoria: ${nomeCategoriaLimpo}`;
  }

  return (
    <>
      <div className="main-content">
        <div className="page-container"> {/* Ou page-content, conforme seu padrão */}
          <div className="coluna-lateral-wrapper"> {/* Verifique se esta div é necessária ou se ColunaLateral já se posiciona bem */}
            <ColunaLateral />
          </div>

          <div className="conteudo-principal-categoria"> {/* Ou a classe que você usava em Produtos.jsx */}
            <h2 className="titulo-pagina-categoria">{tituloDaPagina}</h2>
            {produtosParaExibir && produtosParaExibir.length > 0 ? (
              <div className="lista-produtos-categoria"> {/* Ou a classe que você usava em Produtos.jsx */}
                {produtosParaExibir.map((produto) => (
                  <ProdutoCard key={produto.id} produto={produto} />
                ))}
              </div>
            ) : (
              <p>Nenhum produto encontrado para "{nomeCategoriaLimpo}".</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PaginaCategoria;