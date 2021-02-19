import {useState, useEffect } from 'react';
import { Form, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {useHistory} from 'react-router-dom';

import * as UserAction from '../../actions/userActions';

import SectionTitle from "../../components/SectionTitle";
import ButtonAY from '../../components/ButtonAY';
import SideMenu from "../../templates/SideMenu";
import UpdateProfilePicture from './UpdateProfilePic';

import {validate_data} from '../validate_data.js';

import './Profile.css';


function Profile(props){
  const [messageConfirmSenha, setMessageConfirmSenha] = useState("");
  const [messageSenha, setMessageSenha] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [user, setUser] = useState({});
  const history = useHistory();

  console.log(props.user.user)
  useEffect(()=>{
    setUser(props.user.user)
  },[])

  function handleSubmit(e){
    e.preventDefault()
    console.log(e.target)
    console.log("Enviado")
    fetch("http://abaybyra-online.umbler.net/teacher_update", { 
      method: "post",
      body: new FormData(e.target) 
    })
    .then(resposta => resposta.json())
    .then(res => {
      console.log(res)
      if(res){
        props.setUser()
        alert("Dados atualizados com sucesso!")
      }
      else{
        alert("Algo de errado aconteceu.\nPor favor, tente novamente mais tarde")
      }         
    })
  }

  function handleKeyUp(e){
    let {campo, message, message2 } = validate_data(e)

    if (campo === 'confirmSenha'){
      setMessageConfirmSenha(message)
      messageConfirmSenha === "" && messageSenha === "" ? 
        setIsDisabled(false) : setIsDisabled(true)
    } 
    else if(campo === 'senha'){
      setMessageSenha(message)
      setMessageConfirmSenha(message2)
      messageConfirmSenha === "" && messageSenha === "" ? 
        setIsDisabled(false) : setIsDisabled(true)
    }
  }

  function deleteAccount(e){
    e.preventDefault();
    console.log(props.user.user.escola_id)
    fetch(`http://abaybyra-online.umbler.net/delete_prof/${props.user.user.escola_id}/${props.user.user.professor_id}`, { 
      method: "get"
    })
    .then(resposta => resposta.json())
    .then(res => {
      console.log(res)
      if(res === 1){
        props.setUser()
        alert("Cadastro excluído com sucesso!")
        history.push('/')
      }
      else{
        alert("Algo de errado aconteceu.\nPor favor, tente novamente mais tarde")
      }         
    })
  }

  return(
    <>
    {/* <SideMenu theme="professor"/> */}
    <div className="ghost-grid"/>
    <SectionTitle theme="professor">Meus Dados</SectionTitle>

    <section className="profile-body">
      <UpdateProfilePicture />

      <Form id="form-update-professor" onSubmit={handleSubmit}  method='post'>
        <Form.Group>
          <Form.Label >Nome</Form.Label>
          <Form.Control defaultValue={user.nome} required id="name" name="nome" placeholder="Nome"/>
        </Form.Group>
                
        
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control defaultValue={user.email} readOnly name="email" type="email" placeholder="Email"/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Senha</Form.Label>
          <Form.Control defaultValue={user.senha} id='senha' onKeyUp={handleKeyUp} required name="senha" type="password" placeholder="Senha"/>
          {messageSenha && <span className="wrong-input">{messageSenha}</span>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirme sua senha</Form.Label>
          <Form.Control defaultValue={user.senha} id="confirmSenha" onKeyUp={handleKeyUp} required name="checkPassword" type="password" placeholder="Confirme sua senha"/>

          {messageConfirmSenha && <span className="wrong-input">{messageConfirmSenha}</span>}
        </Form.Group>

      </Form>


      <ButtonAY 
        theme="primary" 
        type="submit" 
        form="form-update-professor" 
        disabled={!(messageConfirmSenha ==="" && messageSenha ==="")}
      >
        Atualizar Dados</ButtonAY>
      <ButtonAY theme="secondary" onClick={deleteAccount}>Excluir conta</ButtonAY>
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