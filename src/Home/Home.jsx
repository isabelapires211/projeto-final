import Card from "../Componentes/Card"
import Menu from '../Componentes/Menu'
export default function Home(){

  const lista = JSON.parse(localStorage.getItem("Lista"))

  return(
    <div>

      <Menu/>

      {lista.map((videos) => 

        <Card videos = {videos}/>

      )}

      </div>
  )
}