import { Route, Switch, useRouteMatch,Link } from 'react-router-dom';
import { Nav} from 'react-bootstrap'
import SideMenu from '../../templates/SideMenu';
import CardMaterial from '../../components/CardMaterial';
import SectionTitle from '../../components/SectionTitle';
import { Provider } from 'react-redux';
import Conteudo from '../Conteudo';
import PorSerieAluno from './PorSerieAluno';

import { Store } from '../../store';

function AprendizadoInicio(props){
  let {url} = props
  return(
    <>
      <SectionTitle theme={props.theme}>Material de Estudo</SectionTitle>
      <section className="main-section material-docente">
        <CardMaterial 
          path={`${url}/por-serie`}
          icon='icon_material_book.svg'
          theme="school"
          text="Por série"
        />
        <CardMaterial 
          path={`${url}/conteudo`}
          icon='icon_block_letters.png'
          theme="professor"
          text="Conteúdo"
        />
        <CardMaterial 
          path="#" 
          icon='icon_test_a.png'
          theme="student"
          text="Exercícios"
          disabled={true}
        />
      </section>
    </>
  )
}
export default function Aprendizado(props){
  let { path, url } = useRouteMatch();
  
  return(
    <>
      <SideMenu theme={props.theme} title="Material do Estudante">
          <Nav.Link eventKey="2" href={`${url}/conteudo`}>Conteúdo</Nav.Link>
          <Nav.Link disabled eventKey="3" href={`${url}/exercicios`}>Exercícios</Nav.Link>
          <Nav.Link as={Link} eventKey="1" to={`${url}/por-serie`}>Por série</Nav.Link>
      </SideMenu>
      
      <Provider store={Store}>
      <Switch>
        <Route exact path={path}>
          <AprendizadoInicio theme={props.theme} url={url}/> 
        </Route>
        <Route path={`${url}/conteudo`}>
          <Conteudo theme={props.theme}/>  
        </Route>
        <Route path={`${url}/por-serie`}>
          <PorSerieAluno theme={props.theme}/>  
        </Route>
      </Switch> 
      </Provider>
    </>
  )
}