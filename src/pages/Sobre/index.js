import { useEffect, useState } from 'react';
import Footer from '../../templates/Footer';
import Header from '../../templates/Header';
import HeaderSchool from '../../templates/Header/HeaderSchool.js';
import HeaderStudent from '../../templates/Header/HeaderStudent.js';
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
      { props.theme==="professor" ? null : 
        <header>
          {props.theme === "lp" ? 
          <Header /> : ( props.theme === "student" ?
          <HeaderStudent theme={props.theme}/> :
          <HeaderSchool theme={props.theme}/>)
        }
        </header>
      }
      <SectionTitle theme={props.theme === "lp" ? 'student' : props.theme}>Abá Ybyrá</SectionTitle>
      <main className="main-sobre">
        <div>
          {sobre && sobre.map((s,index) =>
            <p key={index}>{s}</p>
          )}
        </div>
        
      </main>
      {props.theme === "professor" ? 
        null :
      <footer>
        <Footer theme={props.theme}/>
      </footer>
      }
    </>
  )
}