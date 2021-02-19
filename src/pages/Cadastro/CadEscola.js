import {useState} from 'react';
import { Form, Col } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import ButtonAY from '../../components/ButtonAY';

import SectionTitle from '../../components/SectionTitle'

import {validate_data} from '../validate_data.js';

export default function CadEscola(){
  
  const [messageCEP, setMessageCEP] = useState("");
  const [messageSenha, setMessageSenha] = useState("");
  const [messageConfirmSenha, setMessageConfirmSenha] = useState("");
  const [ePublica, setEPublica] = useState("NAO")
  const history = useHistory();
  
  const ehPublica = (e)=> {
    
    ePublica === "NAO" ? setEPublica("SIM") : setEPublica("NAO")
  }
  const handleKeyUp = (e) => {
    e.preventDefault();
    let {campo, message,message2 } = validate_data(e)

    if (campo === 'cep'){
      setMessageCEP(message)
    } else if(campo === 'senha'){
      setMessageSenha(message)
      setMessageConfirmSenha(message2)
    }else if (campo === 'confirmSenha'){
      setMessageConfirmSenha(message)
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("EVENTO:", event.target)
    console.log("Values:", event.target.publica.value)
    
    fetch("https://abaybyra-online.umbler.net/add_escola", 
    { method: "POST", 
      body: new FormData(event.target) 
    })
    .then(response => response.json())
    .then(result => {  
      console.log("ERRORS: ", typeof result.errors)   
      console.log(typeof result.errors === 'undefined') 
      console.log("ERROR: ", typeof result.error)   
      console.log(typeof result.error === 'undefined') 
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
  };

  return(
    <>
    <SectionTitle theme="student">Cadastro da Escola</SectionTitle>

    <section className="cadastro-form container-fluid">
        <Form id="form-cadastro-escola" onSubmit={handleSubmit}  method='post'>
          <Form.Row className="container-fluid">
            <Form.Group as={Col}>
              <Form.Label >Nome</Form.Label>
              <Form.Control required id="name" name="nome" placeholder="Nome"/>
            </Form.Group>
          </Form.Row>

          <Form.Row className="container-fluid">
            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>
              <Form.Control required name="email" type="email" placeholder="Email"/>
            </Form.Group>
          </Form.Row>

          
          <Form.Row className="container-fluid">
            <Form.Group as={Col}>
              <Form.Label>Senha</Form.Label>
              <Form.Control id='senha' onKeyUp={handleKeyUp} required name="senha" type="password" placeholder="Senha"/>
              {messageSenha && <span className="wrong-input">{messageSenha}</span>}
            </Form.Group>
            <Form.Group as={Col} md={6}>
              <Form.Label>Confirme sua senha</Form.Label>
              <Form.Control id="confirmSenha" onKeyUp={handleKeyUp} required name="confirmSenha" type="password" placeholder="Confirme sua senha"/>
              {messageConfirmSenha && <span className="wrong-input">{messageConfirmSenha}</span>}
            </Form.Group>
          </Form.Row>
          <Form.Row className="container-fluid">
            <Form.Group as={Col} md={5}>
              <Form.Label>Telefone </Form.Label>
              <Form.Control name="telefone" required />
            </Form.Group>
            <Form.Group as={Col} md={5}>
              <Form.Label>Telefone auxiliar</Form.Label>
              <Form.Control name="telefone_2" />
            </Form.Group>
            <Form.Group as={Col} md={2}>
            <Form.Label>Tipo</Form.Label>
              <Form.Check 
                type="switch"
                id="publica-privada"
                name="publica"
                label="Pública"
                onClick={ehPublica}
                value={ePublica}
              />
              {ePublica=== "NAO" && <input type="hidden" name="publica" value={ePublica}/>
              }

            </Form.Group>
          </Form.Row>
          
          <br/>
          <Form.Row className="container-fluid">
            <Form.Group as={Col}>
              <Form.Label>CEP</Form.Label>
              <Form.Control id='cep' onKeyUp={handleKeyUp} required name="cep" type="number"/>
              {messageCEP && <span className="wrong-input">{messageCEP}</span>}
            </Form.Group>
            <Form.Group as={Col} md={1}>
              <Form.Label>UF</Form.Label>
              <Form.Control id="uf" required name="estado" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Cidade</Form.Label>
              <Form.Control id="city" required name="cidade" />
            </Form.Group>
          </Form.Row>

          <Form.Row className="container-fluid">
            <Form.Group as={Col}>
              <Form.Label>Logradouro</Form.Label>
              <Form.Control id="address" required name="logradouro"/>
            </Form.Group>
            <Form.Group as={Col} md={2}>
              <Form.Label>Número</Form.Label>
              <Form.Control name="numero" required type="number" />
            </Form.Group>
          </Form.Row>

          <Form.Row className="container-fluid">
            <Form.Group as={Col} md={6}>
              <Form.Label>Complemento</Form.Label>
              <Form.Control name="complemento" />
            </Form.Group>
            <Form.Group as={Col} >
              <Form.Label>Bairro</Form.Label>
              <Form.Control name="bairro" id="nbhd"/>
            </Form.Group>
          </Form.Row>
        </Form>

       {/*  <button className="submit" id="btn-register" type="submit"  form='form-cadastro-escola' disabled={!(messageConfirmSenha ==="" && messageCEP ==="" && messageCPF ==="")}>Cadastrar</button> */}
        <ButtonAY 
        theme="primary" 
        type="submit" 
        form="form-cadastro-escola" 
        disabled={!(messageConfirmSenha ==="" && messageCEP ==="" && messageSenha ==="")}
      >Cadastrar</ButtonAY>
      </section>
    </>
  )
}