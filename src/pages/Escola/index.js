import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
import Aprendizado from '../Aprendizado';

import { Store } from '../../store';
import * as UserAction from '../../actions/userActions';
import './Escola.css';



function Escola(props){
  useEffect(()=>{
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      props.setUser(foundUser);
    }
  },[])
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
            <Route path={`${url}/aprendizado`}>
              <Aprendizado theme="school"/>  
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
const mapStateToProps = state =>({
  user: state.user
})
const mapDispatchToProps = (dispatch) => 
      bindActionCreators(UserAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Escola)