import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Header.css';

import * as UserAction from '../../actions/userActions';

function HeaderProf(props){
  function logout(e){
    props.setUser({});
    localStorage.clear();
  }
  
  return(
    <Navbar className="navbar-header-prof" expand="lg" variant="dark">
      <Navbar.Brand className="brand-header pl-2 pb-0" href="/professor">
        <img src={require("../../assets/logo-round.png").default} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="header-content">
          {/* <Nav.Link as={Link} eventKey="1" to="/professor/perfil">Meu Perfil</Nav.Link> */}
          <NavDropdown className="drop-menu" title="Meu Perfil" id="h-perfil">
            <NavDropdown.Item className="drop-menu-professor-opt" as={Link} to="/professor/perfil" eventKey="1.1">Dados</NavDropdown.Item>
            <NavDropdown.Item className="drop-menu-professor-opt" as={Link} onClick={logout} to="/" eventKey="1.2">Sair</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown className="drop-menu" title="Abá Ybyrá" id="h-abaybyra">
            <NavDropdown.Item className="drop-menu-professor-opt" as={Link} to="/professor/sobre" eventKey="2.1">Sobre</NavDropdown.Item>
            <NavDropdown.Item className="drop-menu-professor-opt" as={Link} to="/professor/blog" eventKey="2.2">Blog</NavDropdown.Item>
            <NavDropdown.Item className="drop-menu-professor-opt" as={Link} to="/professor/contatos" eventKey="2.3">Contatos</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown className="drop-menu" title="Ensino" id="h-ensino">
            <NavDropdown.Item className="drop-menu-professor-opt" as={Link} to="/professor/material-docente/artigos" eventKey="3.1">Artigos</NavDropdown.Item>
            <NavDropdown.Item className="drop-menu-professor-opt" as={Link} to="/professor/material-docente/tutoriais" eventKey="3.2">Tutoriais</NavDropdown.Item>
            <NavDropdown.Item className="drop-menu-professor-opt" as={Link} to="/professor/material-docente/por-serie" eventKey="3.3">Por série</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown className="drop-menu" title="Aprendizado" id="h-aprendizado">
            <NavDropdown.Item className="drop-menu-professor-opt" as={Link} to="/professor/aprendizado/conteudo" eventKey="4.1">Conteúdo</NavDropdown.Item>
            <NavDropdown.Item disabled className="drop-menu-professor-opt" as={Link} to="/professor/aprendizado/exercicios" eventKey="4.2">Exercícios</NavDropdown.Item>
            <NavDropdown.Item className="drop-menu-professor-opt" as={Link} to="/professor" eventKey="4.3">Por série</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown disabled className="drop-menu" title="Estudantes" id="h-meus-estudantes">
            <NavDropdown.Item className="drop-menu-professor-opt" as={Link} to="/professor" eventKey="5.1">Escolas</NavDropdown.Item>
            <NavDropdown.Item className="drop-menu-professor-opt" as={Link} to="/professor" eventKey="5.2">Turmas</NavDropdown.Item>
            <NavDropdown.Item className="drop-menu-professor-opt" as={Link} to="/professor" eventKey="5.3">Estudantes</NavDropdown.Item>
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderProf)