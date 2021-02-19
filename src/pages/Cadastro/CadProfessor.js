import {useState } from 'react';
import {useHistory} from 'react-router-dom';
import { Form } from 'react-bootstrap';

import ButtonAY from '../../components/ButtonAY';
import SectionTitle from '../../components/SectionTitle';

import {validate_data} from '../validate_data.js';

export default function CadProfessor(){
  const [messageSenha, setMessageSenha] = useState("");
  const [messageConfirmSenha, setMessageConfirmSenha] = useState("");
  const history = useHistory();
  
  function handleSubmit(e){
    e.preventDefault()
    console.log("Enviado")
    console.log("EVENTO:", e.target)
    fetch("https://abaybyra-online.umbler.net/add_prof", 
    { method: "POST", 
      body: new FormData(e.target) 
    })
    .then(response => response.json())
    .then(result => {  
      console.log(result)     

      if(typeof result.errors === 'undefined' && typeof result.error === 'undefined'){        
        alert("Cadastro realizado com sucesso!");
        history.push('/')
      }
      else{
        if(!(typeof result.error === 'undefined')){
          console.log(result.error)
          alert("Falha no cadastro. \nPor favor, tente novamente mais tarde.");
        }      
        else{
          let erros = ""
          result.errors.forEach(erro => {
            erros += erro.msg + '\n'
          })
          alert(erros) 
        }
      }
    });
  }

  function handleKeyUp(e){
    e.preventDefault();
    let {campo, message, message2 } = validate_data(e)

    if (campo === 'confirmSenha'){
      setMessageConfirmSenha(message)
    } 
    else if(campo === 'senha'){
      setMessageSenha(message)
      setMessageConfirmSenha(message2)
    }
  }

  return(
    <>
    <SectionTitle theme="student">Cadastro Docente</SectionTitle>

    <section className="cadastro-form">
      <Form id="form-cadastro-professor" onSubmit={handleSubmit}  method='post'>
        <Form.Group>
          <Form.Label >Nome</Form.Label>
          <Form.Control required id="name" name="nome" placeholder="Nome"/>
        </Form.Group>
                
        
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control required name="email" type="email" placeholder="Email"/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Identificação da Escola</Form.Label>
          <Form.Control id="escola_id" required name="id_escola" type="text"/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Senha</Form.Label>
          <Form.Control id='senha' onKeyUp={handleKeyUp} required name="senha" type="password" placeholder="Senha"/>
          {messageSenha && <span className="wrong-input">{messageSenha}</span>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirme sua senha</Form.Label>
          <Form.Control id="confirmSenha" onKeyUp={handleKeyUp} required name="checkSenha" type="password" placeholder="Confirme sua senha"/>

          {messageConfirmSenha && <span className="wrong-input">{messageConfirmSenha}</span>}
        </Form.Group>

      </Form>


      <ButtonAY 
        theme="primary" 
        type="submit" 
        form="form-cadastro-professor" 
        disabled={!(messageConfirmSenha ==="" && messageSenha ==="")}
      >
        Cadastrar
      </ButtonAY>

    </section>
  </>
 )
}