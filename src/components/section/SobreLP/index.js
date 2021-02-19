import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import ButtonAY from '../../ButtonAY/';

import './SobreLP.css';

export default function SobreLP(){
  const history = useHistory();

  function handleClick(e){
    e.preventDefault();
    history.push('/sobre')

  }

  return(
      <Container as={'section'} id="sobre" className="sobre-block section-mainpage">
          <Row as={'article'}>
            <Col xs={12} md={6} className="sobre-article">      
                <h2 className='lp-section-title'>Sobre Nós</h2>
                <p>
                  Abá Ybyrá é um projeto que visa contribuir com um futuro sustentável ao nosso planeta. Por meio de materiais didáticos e atividades práticas, queremos não só trazer conhecimento sobre o meio ambiente, mas também reconectar o homem à natureza. 
                </p>
                <ButtonAY theme="primary" onClick={handleClick}>Saiba mais</ButtonAY>
                
                {/* <ButtonAY path="/sobre" theme="primary" texto="Saiba Mais"/> */}
            </Col>
            <Col xs={12} md={6} className="sobre-image">
              <img src={require('../../../assets/logo-circle.svg').default} 
                alt="imagem sobre nós" />            
            </Col>
          </Row>
      </Container>
  );
}