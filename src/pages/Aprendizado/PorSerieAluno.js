import {useState} from 'react';
import { Form } from 'react-bootstrap'
import SectionTitle from "../../components/SectionTitle";

import * as data from '../../json/material-discente.json';
import CardBlog from '../../components/CardBlog';
import CardVideo from '../../components/CardVideo';

import './PorSerieAluno.css';

export default function PorSerieAluno(props){
  const [material, setMaterial] = useState(data.default)

  function selectSerie(e){
    let selectedMaterial = data.default.filter(item => {
      if(e.target.value ==="todas"){
        return item
      }
      else if(item.serie === e.target.value){
        return item
      }
    })
    setMaterial(selectedMaterial);
  }
  return(
    <>
      <SectionTitle theme={props.theme}>Conteúdo por Série</SectionTitle>
      <section className="material-por-serie">
        
        <Form className="matdoc-select">
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Selecione a série:</Form.Label>
            <Form.Control as="select" custom onChange={selectSerie}>
              <option value="todas">Todas</option>
              <option value="6">6ª série - Orgânicos</option>
              <option value="7">7ª série - Plástico</option>
              <option value="8">8ª série - Metais</option>
              <option value="9">9ª série - Papel</option>
            </Form.Control>
          </Form.Group>
        </Form>   
      
      <section className="articles">
        {material && material.map((item,index) =>{
          if(item.type === "exercicios"){
            return (
              <CardBlog 
                key={`article-${index}`}
                theme={props.theme} 
                image={item.image!=""? `material-ensino/${item.image}`: ""}
                title={item.title}
                preview={item.text.slice(0,50)}
                path={item.url}
              />
            )
          }else if (item.type === "conteudo"){
            return(
              <CardVideo key={`tut-${index}`} theme={props.theme} tutorial={item}/>         
            )
          }
        })}
      </section>   
      </section>
    </>
  )
}