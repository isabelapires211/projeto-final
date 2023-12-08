import Card from '../Componentes/Card'
export default function Destaque(){

    const lista = JSON.parse(localStorage.getItem("Lista"))

    return(
        <div>
      {lista.slice(-4).map((videos) => 

        <Card videos = {videos}/>

      )}

      </div>
    )
}