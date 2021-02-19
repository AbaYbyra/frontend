import React, { useContext, useState } from 'react';
import { Form} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UserAction from '../../actions/userActions';
import './Login.css';

function Login(props){
  const history = useHistory();
  const [userstate, setUserState] = useState({});

  async function login(e){
    e.preventDefault();
    console.log(e.target)

    fetch("https://abaybyra-online.umbler.net/auth_post", { 
      method: "post",
      body: new FormData(e.target) 
    })
    .then(resposta => resposta.json())
    .then(resultado => {
      console.log(resultado)
      if(resultado[0].professor){
        console.log("RESULTADO 0: ", resultado.professor)
        fetch("https://abaybyra-online.umbler.net/teacher_profile_post", { 
          method: "post",
          body: new FormData(e.target) 
        })
        .then(resposta => resposta.json())
        .then(res => {
          console.log(res[0])
          if(res){
            props.setUser(res[0])
            history.push('/professor')
          }
          else{
            alert("Algo de errado aconteceu.\nPor favor, tente novamente mais tarde")
          }         
        })
      }
      else if(resultado[0].escola){
        console.log("RESULTADO 1: ", resultado.escola)
        fetch("https://abaybyra-online.umbler.net/escola_profile_post", { 
          method: "post",
          body: new FormData(e.target) 
        })
        .then(resposta => resposta.json())
        .then(res => {
          console.log(res[0])
          if(res){
            props.setUser(res[0])
            history.push('/escola')
          }
          else{
            alert("Algo de errado aconteceu.\nPor favor, tente novamente mais tarde")
          }         
        })
      }
      else{
        alert("Usuário ou senha errado");
      }
    });
  }

  function signUp(e){
    e.preventDefault();
    history.push('/cadastrar');
  }
  return(
    <div id="login-container " className= "dropdown-menu-login collapse container-fluid justify-content-end p-0">
      
      <div id='login' className="p-0 float-right d-lg-flex flex-column">  
        <Form id="form-signin" onSubmit={login}> 
          <div className="email-container form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' name='email' className="form-control input-login" placeholder="Digite seu email" required/>
          </div>
          <div className="password-container form-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id='password' name='senha' className="form-control input-login" placeholder="Digite sua senha" required/>
          </div>
        </Form>
        <div id="buttons" className="d-flex flex-column p-2">
          <button type="submit" id='signin-btn' className="btn text-light my-2" name="signin" form="form-signin">Entrar</button>
          <button id="signup-btn" className="btn my-2" onClick={signUp} /* disabled */>Cadastrar</button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state =>({
  user: state.user
})
const mapDispatchToProps = (dispatch) => 
      bindActionCreators(UserAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login)