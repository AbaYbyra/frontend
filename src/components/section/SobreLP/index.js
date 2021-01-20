import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
/* import SectionTitle from '../SectionTitle/SectionTitle';
import ButtonTeto from '../Button/'; */

import './SobreLP.css';

export default function SobreLP(){
  return(
      <Container as={'section'} id="sobre" className="sobre-block section-mainpage">
        {/* <SectionTitle theme='main' text='Quem somos' border={true}/> */}
          <Row as={'article'}>
            <Col xs={12} md={6} className="sobre-article">      
                <h2 className='subtitle'>Sobre Nós</h2>
                <p>
                  Abá Ybyrá é um projeto que visa contribuir com um futuro sustentável ao nosso planeta. Por meio de materiais didáticos e atividades práticas, queremos não só trazer conhecimento sobre o meio ambiente, mas também reconectar o homem à natureza. 
                </p>
                <a href="#"><span>Click aqui para saber mais sobre essa iniciativa.</span></a>

               {/*  <ButtonTeto theme='blue' arrow={true} text="Lorem Ipsum"/> */}
            </Col>
            <Col xs={12} md={6} className="sobre-image">
              <img src={require('../../../assets/logo-circle.svg').default} 
                alt="imagem sobre nós" />            
            </Col>
          </Row>
      </Container>
  );
}