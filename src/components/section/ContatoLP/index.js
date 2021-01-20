import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

import './ContatoLP.css';

export default function ContatoLP(){

  return(
    <div style={{backgroundColor:'#E5E5E5', width: '100%', padding: '40px 0px'}} >
    <Container as={'section'} className='section-mainpage' id="contato">
      <div className='half-page'>
       <h1>Fale Conosco</h1>
      </div>
      <Container as={'article'} className="doe-body container-fluid">
        <Row className="container-fluid"> 
          <Col xs={12} md={6}>
            <p>
              Olá! 
            </p>
            <p>
              Que bom que você chegou até aqui. Isso é sinal que você quer mudar o futuro do nosso planeta para melhor!
            </p>
            <p>
              Você precisa de mais informações sobre implementar Abá Ybyrá na sua escola? 
              Ou gostaria de ajudar a nossa causa de educar os futuros líderes do planeta? 
              Então mande uma mensagem para a gente e responderemos o mais rápido possível.
            </p>

            <Form id="doe-form">
            <Form.Row>
                <Col>
                  <Form.Control type="text" placeholder="Nome"/>
                </Col> 
                <Col>
                  <Form.Control type="email" placeholder="Email"/>
                </Col>
              </Form.Row> 
              <Form.Row>
                <Col>
                  <Form.Control as="textarea" rows={3} placeholder="Escreva sua mensagem..."/>
                </Col>
              </Form.Row>
            </Form>
            <div className="alignRight">
              
            </div>
          </Col>
      

          <Col xs={12} md={6}>
            <img src={require('../../../assets/ola-contato-cinza.jpg').default} width='70%'/>
          </Col>
        </Row>
      </Container>
    </Container>
    </div>
  );
}