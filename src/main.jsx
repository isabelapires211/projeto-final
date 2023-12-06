import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Detalhe from './Detalhe/Detalhe'
import Cadastrar from './Cadastrar/Cadastrar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detalhe" element={<Detalhe />}></Route>
        <Route path="/cadastrar" element={<Cadastrar />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
