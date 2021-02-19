import { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';

import * as data from '../../json/texto-sobre.json';

import './Sobre.css'

export default function Sobre(props){
  const [sobre, setSobre] = useState([]);

  useEffect(()=>{
    if(data){
      let aux = data.texto.split('\n');
      setSobre(aux)
    }
  },[])

  return(
    <>
      <SectionTitle theme={props.theme === "lp" ? 'student' : props.theme}>Abá Ybyrá</SectionTitle>
      <div className="sobre-prof">
        {sobre && sobre.map((s,index) =>
          <p key={index}>{s}</p>
        )}
      </div>       
    </>
  )
}