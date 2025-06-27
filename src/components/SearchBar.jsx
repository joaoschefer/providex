/* src/components/SearchBar.jsx */
import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import debounce from "lodash.debounce";
import { produtos as catalogo } from "../data/produtos";
import "./SearchBar.css";

export default function SearchBar() {
  const [query, setQuery]   = useState("");
  const [results, setResults] = useState([]);
  const [open, setOpen]     = useState(false);

  const inputRef   = useRef(null);
  const wrapperRef = useRef(null);
  const navigate   = useNavigate();

  /* ----------- Filtro com debounce ----------- */
  const filtrar = useRef(
    debounce((texto) => {
      if (!texto) { setResults([]); return; }
      const t = texto.toLowerCase();
      setResults(
        catalogo.filter((p) => p.nome.toLowerCase().includes(t))
      );
    }, 300)
  ).current;

  useEffect(() => filtrar(query), [query, filtrar]);

  /* ----------- Fecha dropdown clicando fora ----------- */
  useEffect(() => {
    const close = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  /* ----------- Foco programático ----------- */
  const focarInput = () => {
    // atraso de 0 ms garante foco após o clique, mesmo colapsado
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  /* ----------- Navegação ----------- */
  const irParaProduto = (slug) => {
    setQuery("");
    setResults([]);
    navigate(`/produto/${slug}`);
  };

  const submit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/buscar?query=${encodeURIComponent(query)}`);
    setOpen(false);
  };

  /* ----------- JSX ----------- */
  return (
    <div
      className="search"
      ref={wrapperRef}
      tabIndex={-1}
      onClick={focarInput}          /* clique na área branca */
    >
      <form onSubmit={submit}>
        <FaSearch className="search-icon" onClick={focarInput} />
        <input
          ref={inputRef}
          type="text"
          placeholder="Buscar..."
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => query && setOpen(true)}
        />
      </form>

      {open && results.length > 0 && (
        <ul className="search-dropdown">
          {results.slice(0, 6).map((p) => (
            <li key={p.id} onClick={() => irParaProduto(p.id)}>
              <img src={p.imagem} alt={p.nome} />
              <span>{p.nome}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
