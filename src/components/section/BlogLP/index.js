import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './BlogLP.css';

function CardBlog(props){
  return(
    <Col className="blog-card-container">
      <div className = "blog-card thumbnail">
      <a href={props.href} target="_blank">
        <img src={props.src} 
          alt="imagem sobre nós" 
          width='100%'/>   
        <div className="">
          <p>{props.legenda}</p>         
        </div>
      </a>
      </div>
    </Col>
  );
}
export default function BlogLP(){
  return(
      <Container as={'section'} id="blog" className="section-mainpage">
          <h2 className=''>Blog</h2>
          <Row as={'article'}>
            <CardBlog 
              href="https://revistapesquisa.fapesp.br/planeta-plastico/" 
              src={require('../../../assets/planeta-plastico.jpg').default} 
              legenda="Planeta plástico" />
            
            <CardBlog href="https://blog.santaluziamolduras.com.br/reciclagem-a-favor-dos-negocios-e-da-natureza/" src={require('../../../assets/reciclagem-a-favor.jpg').default} 
              legenda="Reciclagem a favor dos negócios e da natureza" />
            
            <CardBlog href="#" src={require('../../../assets/problema-lixo.jpg').default} 
              legenda="Como resolver o problema do lixo" />
          </Row>
      </Container>
  );
}