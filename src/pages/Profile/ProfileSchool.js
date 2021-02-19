import {useState, useEffect } from 'react';
import { Form, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UserAction from '../../actions/userActions';

import SectionTitle from "../../components/SectionTitle";
import ButtonAY from '../../components/ButtonAY';
import UpdateProfilePicture from './UpdateProfilePic';

import {validate_data} from '../validate_data.js';

import './Profile.css';


function Profile(props){
  const [messageCEP, setMessageCEP] = useState("");
  const [messageConfirmSenha, setMessageConfirmSenha] = useState("");
  const [messageSenha, setMessageSenha] = useState("");

  const [user, setUser] = useState({});
  
  useEffect(()=>{
    setUser(props.user.user)
  },[])

  function handleSubmit(e){
    e.preventDefault()
    fetch("https://abaybyra-online.umbler.net/update_escola", { 
      method: "post",
      body: new FormData(e.target) 
    })
    .then(resposta => resposta.json())
    .then(res => {
      if(typeof res.errors === 'undefined' && typeof res.error === 'undefined'){        
        alert("Dados atualizados com sucesso!");
        props.setUser(user)
      }
      else{
        if(!(typeof res.error === 'undefined')){
          alert("Falha na atualização dos dados. \nPor favor, tente novamente mais tarde.");
        }      
        else{
          let erros = ""
          res.errors.forEach(erro => {
            erros += erro.msg + '\n'
          })
          alert(erros) 
        }
      }       
    })
  }

  function updateUser(e){
    e.preventDefault()
    let auxUser = user
    auxUser[e.target.name] = e.target.value
    setUser(auxUser)
  }

  function handleKeyUp(e){
    let {campo, message, message2 } = validate_data(e)

    if (campo === 'cep'){
      setMessageCEP(message)
    } else if (campo === 'confirmSenha'){
      setMessageConfirmSenha(message)
    } 
    else if(campo === 'senha'){
      setMessageSenha(message)
      setMessageConfirmSenha(message2)
    }
  }

  return(
    <>
    {/* <SideMenu theme="professor"/> */}
    <div className="ghost-grid"/>
    <SectionTitle theme="school">Meus Dados</SectionTitle>

    <section className="profile-body">
      <UpdateProfilePicture />

      <Form id="form-update-escola" onSubmit={handleSubmit}  method='post'>
          <Form.Row className="container-fluid">
            <Form.Group as={Col}>
              <Form.Label >Nome</Form.Label>
              <Form.Control onChange={updateUser} defaultValue={user.nome} required id="name" name="nome" placeholder="Nome"/>
            </Form.Group>
          </Form.Row>

          <Form.Row className="container-fluid">
            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>
              <Form.Control defaultValue={user.email} readOnly name="email" type="email" placeholder="Email"/>
            </Form.Group>
          </Form.Row>

          
          <Form.Row className="container-fluid">
            <Form.Group as={Col}>
              <Form.Label>Senha</Form.Label>
              <Form.Control onChange={updateUser} defaultValue={user.senha} id='senha' onKeyUp={handleKeyUp} required name="senha" type="password" placeholder="Senha"/>
              {messageSenha && <span className="wrong-input">{messageSenha}</span>}
            </Form.Group>
            <Form.Group as={Col} md={6}>
              <Form.Label>Confirme sua senha</Form.Label>
              <Form.Control onChange={updateUser} defaultValue={user.senha} id="confirmSenha" onKeyUp={handleKeyUp} required name="confirmSenha" type="password" placeholder="Confirme sua senha"/>
              {messageConfirmSenha && <span className="wrong-input">{messageConfirmSenha}</span>}
            </Form.Group>
          </Form.Row>
          <Form.Row className="container-fluid">
            <Form.Group as={Col} md={5}>
              <Form.Label>Telefone </Form.Label>
              <Form.Control onChange={updateUser} defaultValue={user.telefone} name="telefone" required />
            </Form.Group>
            <Form.Group as={Col} md={5}>
              <Form.Label>Telefone auxiliar</Form.Label>
              <Form.Control onChange={updateUser} defaultValue={user.telefone_2} name="telefone_2" />
            </Form.Group>
            <Form.Group as={Col} md={2}>
            <Form.Label>Tipo</Form.Label>
            <div>{user.publica? user.publica.toUpperCase() === "SIM" ? "PÚBLICA" : "PRIVADA" : "PRIVADA"}</div>
            </Form.Group>
          </Form.Row>
          
          <br/>
          <Form.Row className="container-fluid">
            <Form.Group as={Col}>
              <Form.Label>CEP</Form.Label>
              <Form.Control onChange={updateUser} defaultValue={user.cep} id='cep' onKeyUp={handleKeyUp} required name="cep" type="number"/>
              {messageCEP && <span className="wrong-input">{messageCEP}</span>}
            </Form.Group>
            <Form.Group as={Col} md={1}>
              <Form.Label>UF</Form.Label>
              <Form.Control onChange={updateUser} defaultValue={user.estado} id="uf" required name="estado" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Cidade</Form.Label>
              <Form.Control onChange={updateUser} defaultValue={user.cidade} id="city" required name="cidade" />
            </Form.Group>
          </Form.Row>

          <Form.Row className="container-fluid">
            <Form.Group as={Col}>
              <Form.Label>Logradouro</Form.Label>
              <Form.Control onChange={updateUser} defaultValue={user.logradouro} id="address" required name="logradouro"/>
            </Form.Group>
            <Form.Group as={Col} md={2}>
              <Form.Label>Número</Form.Label>
              <Form.Control onChange={updateUser} defaultValue={user.numero} name="numero" required type="number" />
            </Form.Group>
          </Form.Row>

          <Form.Row className="container-fluid">
            <Form.Group as={Col} md={6}>
              <Form.Label>Complemento</Form.Label>
              <Form.Control onChange={updateUser} defaultValue={user.complemento} name="complemento" />
            </Form.Group>
            <Form.Group as={Col} >
              <Form.Label>Bairro</Form.Label>
              <Form.Control onChange={updateUser} defaultValue={user.bairro} name="bairro" id="nbhd"/>
            </Form.Group>
          </Form.Row>
        </Form>

       {/*  <button className="submit" id="btn-register" type="submit"  form='form-update-escola' disabled={!(messageConfirmSenha ==="" && messageCEP ==="" && messageCPF ==="")}>Cadastrar</button> */}
        <ButtonAY 
        theme="primary" 
        type="submit" 
        form="form-update-escola" 
        disabled={!(messageConfirmSenha ==="" && messageCEP ==="" && messageSenha ==="")}
      >Atualizar Dados</ButtonAY>
    </section>
    </>
  )
}

const mapStateToProps = state =>({
  user: state.user
})
const mapDispatchToProps = (dispatch) => 
      bindActionCreators(UserAction, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(Profile)