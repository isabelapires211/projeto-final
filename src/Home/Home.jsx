export default function Home(){

  const lista = JSON.parse(localStorage.getItem("Lista"))

  return(
    <div>
      {lista.map((videos) => 
            <div className="list-video">
                 <p>{videos.titulo}</p>
                 <p>{videos.descricao}</p>
                 <p>{videos.canal}</p>
                 <p>{videos.playlist}</p>
                 <p>{videos.data}</p>
             </div>   
            )}
      </div>
  )
}