import {Form, Col} from 'react-bootstrap';
import SectionTitle from "../../components/SectionTitle";
import ButtonAY from '../../components/ButtonAY';

import './Contatos.css';

export default function Contatos(props){

  function sendEmail(e){
    e.preventDefault()
    alert("Email enviado com sucesso!")
    document.getElementById("contato-form").reset();
  }
  return(
    <>
      <div className="ghost-grid"/>
      <SectionTitle theme={props.theme}>Contatos</SectionTitle>
      <section className="contato-main">
        <div className="contato-text-forms">
          <div className="contato-texto">
            <p>
              Olá! Em que podemos te ajudar? 
            </p>
            <p>
              Acreditamos no poder da comunicação aberta, então sinta-se a vontade para mandar
              suas dúvidas, sugestões ou reclamações para a gente. 
              Responderemos o mais rápido possível.
            </p>

          </div>
        
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
        </div>
        <div  className="image-contato">
          <img src={require('../../assets/ola-contato.jpg').default} alt="Aba Ybyra dizendo: 'Olá, sou Abá Ybyrá'"/>
        </div>
        
      </section>
    </>
  )
}