import React from 'react';
import { useState } from 'react';
import {Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavLink, NavItem, Dropdown } from 'react-bootstrap';
import Login from '../Login';
import './Header.css';

export default function HeaderStudent(){

  const [username,setUserName] = useState("");
  
  return(
    <Navbar className="navbar-header-student" expand="md" variant="dark">
      <Navbar.Brand className="brand-header pl-2 pb-0" href="/estudante">
        <img src={require("../../assets/logo-round.png").default} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="header-content">

          <Nav.Link eventKey="1" href="#">Meu Perfil</Nav.Link>

          <NavDropdown className="drop-menu" title="Abá Ybyrá" id="h-abaybyra">
            <NavDropdown.Item className="drop-menu-student" as={Link} to="/estudante/sobre" eventKey="2.1">Sobre</NavDropdown.Item>
            <NavDropdown.Item className="drop-menu-student" as={Link} to="/estudante/blog" eventKey="2.2">Blog</NavDropdown.Item>
            <NavDropdown.Item className="drop-menu-student" as={Link} to="/estudante/contatos" eventKey="2.3">Contatos</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown className="drop-menu" title="Material" id="h-discente">
            <NavDropdown.Item className="drop-menu-student" as={Link} to="/estudante" eventKey="3.1">Histórias</NavDropdown.Item>
            <NavDropdown.Item className="drop-menu-student" as={Link} to="/estudante" eventKey="3.2">Exercícios</NavDropdown.Item>
            <NavDropdown.Item className="drop-menu-student" as={Link} to="/estudante" eventKey="3.3">Por série</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
  );
}