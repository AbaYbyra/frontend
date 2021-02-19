import SectionTitle from '../../components/SectionTitle';
import CardVideo from '../../components/CardVideo';

import * as data from '../../json/material-docente.json';

import './Tutoriais.css';
import { useEffect, useState } from 'react';


export default function Tutoriais(props){
  const [tutoriais, setTutoriais] = useState([])
  
  useEffect(()=>{
    let auxTutorial = []
    data.default.forEach(dat => {
      if(dat.type === 'tutorial'){
        auxTutorial.push(dat)
      }
    })
    
    setTutoriais(auxTutorial)
  },[])
  return(
    <>
      <SectionTitle theme={props.theme}>Tutoriais</SectionTitle>
      <section className="section-tutoriais">
      
        {tutoriais && tutoriais.map((tutorial,index)=>
          <CardVideo key={`tut-${index}`} theme={props.theme} tutorial={tutorial}/>         
        )}
      </section>
    </>
  )
}