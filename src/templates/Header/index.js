import React from 'react';
import { useState } from 'react';
import {Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, NavItem, Dropdown } from 'react-bootstrap';
import Login from '../Login/';
import './Header.css';

export default function Header(){

  const [username,setUserName] = useState("");
  
  return(
    <Navbar className="navbar-header-lpage" expand="md" variant="dark">
      <Navbar.Brand className="brand-header pl-2 pb-0" href="#home">
        <img src={require("../../assets/logo-square.svg").default} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="header-content">
          <Nav.Link href="#sobre">Sobre</Nav.Link>
          <Nav.Link href="#blog">Blog</Nav.Link>
          <Nav.Link href="#contato">Contato</Nav.Link>
          <NavDropdown className="login-modal-open" title="Login">
            <Login changeName={setUserName}/>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
  );
}