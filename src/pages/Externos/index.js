import { Link, Route } from "react-router-dom";
import Sobre from '../Sobre';
import Teste from '../Teste';

export default function Externos(){
  return(
    <>
    <h1>Externos</h1>
    <Link to='/sobre'>Sobre</Link>
    <Link to='/teste'>Teste</Link>
    <Route path='/sobre' exact component={Sobre} />
    <Route path='/teste' component={Teste}/>
    </>
  )
}   