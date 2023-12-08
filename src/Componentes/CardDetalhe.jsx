export default function CardDEtalhe({videos}){
 
    return(
            <div className="list-video">
                 <p>{videos.titulo}</p>
                 <p>{videos.descricao}</p>
                 <p>{videos.canal}</p>
                 <p>{videos.playlist}</p>
                 <p>{videos.data}</p>

                 <iframe 
                        width="600"
                        height="400"
                        src={`https://www.youtube.com/embed/${videos.link.slice(17)}`}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                  </iframe>

             </div>   
    )

}