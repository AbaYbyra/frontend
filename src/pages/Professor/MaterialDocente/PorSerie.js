import {useState} from 'react';
import { Form } from 'react-bootstrap'
import SectionTitle from "../../../components/SectionTitle";

import * as data from '../../../json/material-docente.json';
import CardBlog from '../../../components/CardBlog';

import './PorSerie.css';

export default function PorSerie(props){
  const [selected, setSelected] =  useState();
  const [articles, setArticles] = useState(data.default);
  //const articles = data.default
  console.log(articles)

  function selectSerie(e){
    let selectedArticle = data.default.filter(item => {
      if(e.target.value ==="todas"){
        return item
      }
      else if(item.serie === e.target.value){
        return item
      }
    })
    setArticles(selectedArticle);
  }
  return(
    <>
      <SectionTitle theme={props.theme}>Material por série</SectionTitle>
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
      {articles &&
        articles.map((article,index) =>
          <CardBlog 
            key={`article-${index}`}
            theme="professor" 
            image={article.image!=""? `material-ensino/${article.image}`: ""}
            title={article.title}
            preview={article.text.slice(0,50)}
            path={article.href}
          />
        )
      }
      </section>   
      </section>
    </>
  )
}