import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Home from './Home/Home'
import Detalhe from './Detalhe/Detalhe'
import Cadastrar from './Cadastrar/Cadastrar'
import Destaque from './Destaque/Destaque'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home/>}></Route>
        <Route path="/detalhe/:id" element={<Detalhe/>}></Route>
        <Route path="/cadastrar" element={<Cadastrar/>}></Route>
        <Route path="/destaque" element={<Destaque/>}></Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
