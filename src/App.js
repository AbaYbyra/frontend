import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import PaginaInicial from './pages';
import Sobre from './pages/Sobre';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={PaginaInicial} exact />
        <Route path='/sobre' component={Sobre} />
      </Switch>
    </div>
  );
}

export default App;
