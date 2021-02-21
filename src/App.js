import {useEffect, useState} from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PaginaInicial from './pages';
import Sobre from './pages/Sobre';
import Teste from './pages/Teste';
import Professor from './pages/Professor';
import Cadastro from './pages/Cadastro';
import Escola from './pages/Escola';

import * as UserAction from './actions/userActions';
import * as ProfileAction from './actions/profileActions';

import './App.css';

function App(props) {
  const location =  useLocation();
  const [loaded,setLoaded] = useState(false);

  useEffect(()=>{
    const loggedInUser = localStorage.getItem("user");
    const profileStored = localStorage.getItem("profile");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      props.setUser(foundUser);
    }
    if (profileStored){
      props.setProfile(profileStored)
    }
    setLoaded(true)
  },[])
  console.log(props.profile)
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <PaginaInicial/>
          </Route>
        {/* <Route path="/" render={Externos} exact/> */}
        <Route path='/sobre' render={(props) => (<Sobre {...props} theme="lp" />)}/>
        <Route path='/teste' component={Teste}/> 
        <Route path='/cadastrar' component={Cadastro}/> 

      {loaded && 
        
        <Route path="/professor" >
          {props.profile.profile === "professor" 
          ? <Professor /> : <Redirect to={{pathname: '/cadastrar', state: { from: location }}} />}
        </Route>
      }
      {loaded && 
        <Route path="/escola">
        {props.profile.profile === "escola" 
          ? <Escola /> : <Redirect to="/cadastrar" />}
        </Route>
        }
      </Switch>
    </div>
  );
}

const mapStateToProps = state =>({
  user: state.user,
  profile: state.profile
})
const mapDispatchToProps = (dispatch) => 
      bindActionCreators({...UserAction, ...ProfileAction}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
