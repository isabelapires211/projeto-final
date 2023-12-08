import Card from '../Componentes/Card'
import Menu from "../Componentes/Menu"
import "../styles.css"
export default function Destaque(){

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
      {lista.slice(-4).map((videos) => 

        <Card videos = {videos}/>

      )}

      </div>
    )
}