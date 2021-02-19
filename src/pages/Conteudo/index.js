import { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import CardVideo from '../../components/CardVideo';

import * as data from '../../json/material-discente.json';

import './Conteudo.css'

export default function Conteudo(props){
  const [conteudos, setConteudos] = useState([])
  useEffect(()=>{
    let auxConteudo = []
    data.default.forEach(dat => {
      if(dat.type === 'conteudo'){
        auxConteudo.push(dat)
      }
    })
    
    setConteudos(auxConteudo)
  },[])
  return(
    <>
      <SectionTitle theme={props.theme}>Conteúdo Didático</SectionTitle>
      <section className="section-conteudos">
      
        {conteudos && conteudos.map((conteudo,index)=>
          <CardVideo key={`cont-${index}`} theme={props.theme} tutorial={conteudo}/>         
        )}
      </section>
    </>
  )
}