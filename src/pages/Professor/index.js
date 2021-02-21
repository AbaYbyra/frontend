import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import HeaderProf from '../../templates/Header/HeaderProf.js';
import Footer from '../../templates/Footer';
import FirstPageProfile from '../FirstPageProfile';
import InnerBlog from '../InnerBlog';
import MaterialDocenteMenu from '../Professor/MaterialDocente';
import Profile from '../Profile';
import SobreProfessor from '../Sobre/SobreProfessor';
import Contatos from '../Contatos';
import Aprendizado from '../Aprendizado';

import * as UserAction from '../../actions/userActions';
import './Professor.css';



function Professor(props){
  useEffect(()=>{
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      props.setUser(foundUser);
    }
  },[])
  console.log(props)
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
            <Route path={`${url}/aprendizado`}>
              <Aprendizado theme="professor"/>  
            </Route>
          </Switch>
      </main>
      <footer>
        <Footer theme="professor" />
      </footer>
    </>
  );
}

const mapStateToProps = state =>({
  user: state.user,
  profile:state.profile
})
const mapDispatchToProps = (dispatch) => 
      bindActionCreators(UserAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Professor)