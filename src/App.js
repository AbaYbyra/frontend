import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import PaginaInicial from './pages';
import Sobre from './pages/Sobre';
import Teste from './pages/Teste';
import Professor from './pages/Professor';
import Cadastro from './pages/Cadastro';
import Escola from './pages/Escola';

import './App.css';

function App() {
  
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={PaginaInicial} exact />
        {/* <Route path="/" render={Externos} exact/> */}
        <Route path='/sobre' render={(props) => (<Sobre {...props} theme="lp" />)}/>
        <Route path='/teste' component={Teste}/> 
        <Route path='/cadastrar' component={Cadastro}/> 

        {/** PROFESSOR PROFILE */}
        <Route path="/professor" component={Professor}/>
        {/* <Route path="/professor/blog" component={InnerBlog}/> */}
        {/** SCHOOL PROFILE */}
        <Route path="/escola" component={Escola}/>
      </Switch>
    </div>
  );
}

export default App;
