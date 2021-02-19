import React from 'react';
import { Container } from 'react-bootstrap';

import CardBlog from '../../CardBlog';

import './BlogLP.css';

export default function BlogLP(){
  return(
      <Container as={'section'} id="blog" className="section-mainpage">
          <h2 className='lp-section-title'>Blog</h2>

          <div as={'article'} className="lp-blog-cards">
            <CardBlog 
              theme="student"
              path="https://revistapesquisa.fapesp.br/planeta-plastico/" 
              image='planeta-plastico.jpg' 
              title="Planeta plástico" 
              preview="Reportagem da FAPESP sobre o consumo e descarte de plástico"
              />
            
            <CardBlog 
              theme="student"
              path="https://blog.santaluziamolduras.com.br/reciclagem-a-favor-dos-negocios-e-da-natureza/" 
              image='reciclagem-a-favor.jpg'
              title="Reciclagem a favor dos negócios e da natureza" 
              preview="Como a reciclagem é além de boa para o meio ambiente, muito lucrativa"  
            />
            
            <CardBlog 
              theme="student"
              path="/blog"
              image='problema-lixo.jpg'
              title="Como resolver o problema do lixo" 
              preview="Estudo sobre como alternativas de solução para o problema ambiental do século"  
            />
          </div>
      </Container>
  );
}