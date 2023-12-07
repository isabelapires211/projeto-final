import React, { useState, useEffect } from "react";

export default function Cadastrar() {
  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")
  const [canal, setCanal] = useState("")
  const [playlist, setPlaylist] = useState("")
  const [data, setData] = useState("")
  const [id, setId] = useState("")
}

useEffect(() => { localStorage.setItem("Lista", JSON.stringify(lista)) }, [lista])

const salvar = () => {
    e.preventDefault()
    setLista([...lista, {
        titulo: titulo,
        descricao: descricao,
        canal: canal,
        playlist: playlist,
        data: data,
        id: id,
      }])

    }

