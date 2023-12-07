import React, { useState, useEffect } from "react";

export default function Cadastrar() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [canal, setCanal] = useState("");
  const [playlist, setPlaylist] = useState("");
  const [data, setData] = useState("");
  const [id, setId] = useState(1); 

  const [lista, setLista] = useState([]);

  useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(lista));
  }, [lista]);

  const salvar = (e) => {
    e.preventDefault();

    if (!titulo || !descricao || !canal || !playlist || !data) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setLista([
      ...lista,
      {
        titulo: titulo,
        descricao: descricao,
        canal: canal,
        playlist: playlist,
        data: data,
        id: id,
      },
    ]);

    setTitulo("");
    setDescricao("");
    setCanal("");
    setPlaylist("");
    setData("");
    setId(id + 1); 
  };

  return (
    <div>
      <form onSubmit={salvar}>
        <label>
          Título:
          <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </label>
        <br />
        <label>
          Descrição:
          <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} />
        </label>
        <br />
        <label>
          Canal:
          <input type="text" value={canal} onChange={(e) => setCanal(e.target.value)} />
        </label>
        <br />
        <label>
          Playlist:
          <input type="text" value={playlist} onChange={(e) => setPlaylist(e.target.value)} />
        </label>
        <br />
        <label>
          Data:
          <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
        </label>
        <br />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}