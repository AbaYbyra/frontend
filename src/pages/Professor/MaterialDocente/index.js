import { Route, Switch, useRouteMatch,Link } from 'react-router-dom';
import { Nav, Accordion, Card } from 'react-bootstrap'
import SideMenu from '../../../templates/SideMenu';
import CardMaterial from '../../../components/CardMaterial';
import PorSerie from './PorSerie';
import SectionTitle from '../../../components/SectionTitle';
import { Provider } from 'react-redux';

import { Store } from '../../../store';
import Artigos from '../../Artigos';
function MaterialDocenteInicio(props){
  let {url} = props
  console.log("URL: ", url)
  return(
    <>
      <SectionTitle theme={props.theme}>Material de Ensino</SectionTitle>
      <section className="main-section material-docente">
        <CardMaterial 
          path={`${url}/por-serie`}
          icon='icon_material_book.svg'
          theme="school"
          text="Por série"
        />
        <CardMaterial 
          path={`${url}/artigos`}
          icon='icon_material_file.svg'
          theme="professor"
          text="Artigos"
        />
        <CardMaterial 
          path={`${url}/tutoriais`} 
          icon='icon_material_video.svg'
          theme="student"
          text="Tutoriais"
        />
      </section>
    </>
  )
}
export default function MaterialDocenteMenu(props){
  let { path, url } = useRouteMatch();
  
  return(
    <>
      <SideMenu theme={props.theme} title="Material do docente">
        
          <Nav.Link as={Link} eventKey="1" to={`${url}/por-serie`}>Por série</Nav.Link>
          <Nav.Link eventKey="2" href={`${url}/artigos`}>Artigos</Nav.Link>
          <Nav.Link eventKey="3" href="#contato">Tutoriais</Nav.Link>
      </SideMenu>
      
      <Provider store={Store}>
      <Switch>
        <Route exact path={path}>
          <MaterialDocenteInicio theme={props.theme} url={url}/> 
        </Route>
        <Route path={`${url}/por-serie`}>
          <PorSerie theme={props.theme}/>  
        </Route>
        <Route path={`${url}/artigos`}>
          <Artigos theme={props.theme}/>  
        </Route>
      </Switch> 
      </Provider>
    </>
  )
}