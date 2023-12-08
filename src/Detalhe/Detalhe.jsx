import { useParams } from "react-router-dom";
import CardDEtalhe from "../Componentes/CardDetalhe";
import Menu from "../Componentes/Menu"

export default function Detalhe() {

            const { id } = useParams();
            const lista = JSON.parse(localStorage.getItem("Lista"));
        
            const atividade = lista.filter((videos)=>{
            if(videos.id == id){
            return videos;
            }
            return null;
            }); 
        
            console.log(atividade[0]);
        
            return(
            <div>
            <Menu/>
            <CardDEtalhe videos ={atividade[0]}/>
            </div>
            );  
        
        }
