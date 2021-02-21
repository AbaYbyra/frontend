import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Header.css';

import * as UserAction from '../../actions/userActions';

function HeaderSchool(props){

  function logout(e){
    props.setUser({});
    localStorage.clear();
  }
  
  return(
    <Navbar className="navbar-header-school" expand="lg" variant="dark">
      <Navbar.Brand className="brand-header pl-2 pb-0" href="/escola">
        <img src={require("../../assets/logo-round.png").default} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="header-content">
          <NavDropdown className="drop-menu" title="Meu Perfil" id="h-perfil">
            <NavDropdown.Item className="drop-menu-school" as={Link} to="/escola/perfil" eventKey="1.1">Dados</NavDropdown.Item>
            <NavDropdown.Item className="drop-menu-school" onClick={logout} as={Link} to="/" eventKey="1.2">Sair</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown className="drop-menu" title="Abá Ybyrá" id="h-abaybyra">
            <NavDropdown.Item className="drop-menu-school" as={Link} to="/escola/sobre" eventKey="2.1">Sobre</NavDropdown.Item>
            <NavDropdown.Item className="drop-menu-school" as={Link} to="/escola/blog" eventKey="2.2">Blog</NavDropdown.Item>
            <NavDropdown.Item className="drop-menu-school" as={Link} to="/escola/contatos" eventKey="2.3">Contatos</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown className="drop-menu" title="Docente" id="h-docente">
            <NavDropdown.Item className="drop-menu-school" as={Link} to="/escola/material-docente/artigos" eventKey="3.1">Artigos</NavDropdown.Item>
            <NavDropdown.Item className="drop-menu-school" as={Link} to="/escola/material-docente/tutoriais" eventKey="3.2">Tutoriais</NavDropdown.Item>
            <NavDropdown.Item className="drop-menu-school" as={Link} to="/escola/material-docente/por-serie" eventKey="3.3">Por série</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown className="drop-menu" title="Discente" id="h-discente">
            <NavDropdown.Item className="drop-menu-school" as={Link} to="/escola/aprendizado/conteudo" eventKey="4.1">Conteúdo</NavDropdown.Item>
            <NavDropdown.Item disabled className="drop-menu-school" as={Link} to="/escola/aprendizado/exercicios" eventKey="4.2">Exercícios</NavDropdown.Item>
            <NavDropdown.Item className="drop-menu-school" as={Link} to="/escola/aprendizado/por-serie" eventKey="4.3">Por série</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown className="drop-menu" title="Cadastrados" id="h-cadastrados">
            <NavDropdown.Item className="drop-menu-school" as={Link} to="/escola/professores" eventKey="5.1">Professores</NavDropdown.Item>
            <NavDropdown.Item disabled className="drop-menu-school" as={Link} to="#" eventKey="5.2">Alunos</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
  );
}
const mapStateToProps = state =>({
  user: state.user
})
const mapDispatchToProps = (dispatch) => 
      bindActionCreators(UserAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSchool)