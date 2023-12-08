import Card from '../Componentes/Card'
import Menu from "../Componentes/Menu"
export default function Destaque(){

    const lista = JSON.parse(localStorage.getItem("Lista"))

    return(
        <div>
          <Menu/>
      {lista.slice(-4).map((videos) => 

        <Card videos = {videos}/>

      )}

      </div>
    )
}