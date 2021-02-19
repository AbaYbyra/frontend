import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import HeaderProf from '../../templates/Header/HeaderProf.js';
import Footer from '../../templates/Footer';
import FirstPageProfile from '../FirstPageProfile';
import InnerBlog from '../InnerBlog';
import MaterialDocenteMenu from '../Professor/MaterialDocente';
import Profile from '../Profile';
import SobreProfessor from '../Sobre/SobreProfessor';
import Contatos from '../Contatos';

import './Professor.css';



export default function PaginaInicial(){
  let { path, url } = useRouteMatch();
  return(
    <>
      <header>
        <HeaderProf/>
      </header>
      <main className="main-professor">
          
          <Switch>
            <Route exact path={path}>
              <FirstPageProfile theme="professor"/>
            </Route>
            <Route path={`${url}/sobre`}>
              <div className="ghost-grid"/>
              <SobreProfessor theme="professor" />  
            </Route>
            <Route path={`${url}/blog`}>
              <InnerBlog theme="professor"/>  
            </Route> 
            <Route path={`${url}/contatos`}>
              <Contatos theme="professor"/>  
            </Route>
            <Route path={`${url}/perfil`}>
              <Profile/>
            </Route>
            <Route path={`${url}/material-docente`}>
              <MaterialDocenteMenu theme="professor"/>  
            </Route>
          </Switch>
      </main>
      <footer>
        <Footer theme="professor" />
      </footer>
    </>
  );
}