import Card from "../Componentes/Card"
import Menu from '../Componentes/Menu'
export default function Home(){

  const lista = JSON.parse(localStorage.getItem("Lista"))

  if(lista === null){
    return(
      <div>
        <Menu/>
        <h1>Nenhum video cadastrado</h1>
      </div>
    )
  }

  return(
    <div>

      <Menu/>

      {lista.map((videos) => 

        <Card videos = {videos}/>

      )}

      </div>
  )
}