import React from 'react';
import {Provider } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import HeaderSchool from '../../templates/Header/HeaderSchool.js';
import Footer from '../../templates/Footer';
import FirstPageProfile from '../FirstPageProfile';
import InnerBlog from '../InnerBlog';
import MaterialDocenteMenu from '../Professor/MaterialDocente';
import ProfileSchool from '../Profile/ProfileSchool';
import SobreProfessor from '../Sobre/SobreProfessor';
import Contatos from '../Contatos';
import ProfessorList from '../ProfessorList';

import { Store } from '../../store';
import './Escola.css';



export default function PaginaInicial(){
  let { path, url } = useRouteMatch();
  return(
    <>
      <header>
        <HeaderSchool/>
      </header>
      <main className="main-school">
      <Provider store={ Store }>
          <Switch>
            <Route exact path={path}>
              <FirstPageProfile theme="school"/>
            </Route>
            <Route path={`${url}/sobre`}>
              <div className="ghost-grid"/>
              <SobreProfessor theme="school" />  
            </Route>
            <Route path={`${url}/blog`}>
              <InnerBlog theme="school"/>  
            </Route>
            <Route path={`${url}/contatos`}>
              <Contatos theme="school"/>  
            </Route>
            <Route path={`${url}/perfil`}>
              <ProfileSchool />
            </Route>
            <Route path={`${url}/material-docente`}>
              <MaterialDocenteMenu theme="school"/>  
            </Route>
            <Route path={`${url}/professores`}>
              <ProfessorList theme="school"/>  
            </Route>
          </Switch>
        </Provider>
      </main>
      <footer>
        <Footer theme="school" />
      </footer>
    </>
  );
}