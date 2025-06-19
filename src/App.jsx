// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
import Header from "./components/Header";
import Inicio from "./pages/Inicio";
import Contato from "./pages/Contato";
import Entrar from "./pages/Entrar";
import Carrinho from "./pages/Carrinho";
import DetalheProduto from "./pages/DetalheProduto";
import PaginaCategoria from "./pages/PaginaCategoria"; 
import MinhaConta from "./pages/MinhaConta";
import PerguntasFreq from "./pages/PerguntasFreq";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/entrar" element={<Entrar />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/categoria/:nomeCategoria" element={<PaginaCategoria />} />
        <Route path="/produto/:id" element={<DetalheProduto />} />
        <Route path="/minha-conta" element={<MinhaConta />} />
        <Route path="/perguntasfreq" element={<PerguntasFreq />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;