import Card from "../Componentes/Card"
export default function Home(){

  const lista = JSON.parse(localStorage.getItem("Lista"))

  return(
    <div>
      {lista.map((videos) => 

        <Card videos = {videos}/>

      )}

      </div>
  )
}