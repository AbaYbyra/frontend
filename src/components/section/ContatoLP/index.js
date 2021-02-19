import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import ButtonAY from '../../ButtonAY';

import './ContatoLP.css';

export default function ContatoLP(){
  function sendEmail(e){
    e.preventDefault()
    alert("Email enviado com sucesso!")
    document.getElementById("contato-form").reset();
  }
  return(
    <div style={{backgroundColor:'#E5E5E5', width: '100%', padding: '40px 0px'}} >
    <Container as={'section'} className='section-mainpage' id="contato">
      <div className='half-page'>
       <h2 className='lp-section-title'>Fale Conosco</h2>
      </div>
      <article>
        <div className="contato-texto">
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

        </div>
        <div className="contato-forms-img">
          <Form id="contato-form" onSubmit={sendEmail}>
            <Form.Row className="contato-forms-input" >
              <Col>
                <Form.Control type="text" placeholder="Nome" required/>
              </Col> 
              <Col>
                <Form.Control type="email" placeholder="Email" required/>
              </Col>
            </Form.Row> 
            <Form.Row>
              <Col>
                <Form.Control as="textarea" rows={3} placeholder="Escreva sua mensagem..." required/>
              </Col>
            </Form.Row>
            <div className="alignRight">
              <ButtonAY type='submit' form='contato-form' theme="primary" className="button-ay">Enviar</ButtonAY>
            </div>
          </Form>

          <div  className="image-contato">
            <img src={require('../../../assets/ola-contato-cinza.jpg').default} alt="Aba Ybyra dizendo: 'Olá, sou Abá Ybyrá'"/>
          </div>
        </div>
      </article>
    </Container>
    </div>
  );
}