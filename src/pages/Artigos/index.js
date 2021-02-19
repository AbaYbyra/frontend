import SectionTitle from '../../components/SectionTitle';
import CardBlog from '../../components/CardBlog';

import * as data from '../../json/material-docente.json';

//import './Artigos.css';
import { useEffect, useState } from 'react';


export default function Trtigos(props){
  const [artigos, setTrtigos] = useState([])
  
  useEffect(()=>{
    let auxArtigo = []
    data.default.forEach(dat => {
      if(dat.type === 'artigo'){
        auxArtigo.push(dat)
      }
    })
    
    setTrtigos(auxArtigo)
  },[])
  return(
    <>
      <SectionTitle theme={props.theme}>Artigos</SectionTitle>
      <section className="main-section">
      
        {artigos && artigos.map((artigo,index)=>
          <CardBlog 
            key={`article-${index}`}
            theme={props.theme} 
            image={artigo.image!=""? `material-ensino/${artigo.image}`: ""}
            title={artigo.title}
            preview={artigo.text.slice(0,50)}
            path={artigo.url}
          />
        )}
      </section>
    </>
  )
}