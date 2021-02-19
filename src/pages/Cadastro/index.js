import Header from "../../templates/Header";
import CardMaterial from "../../components/CardMaterial";
import SectionTitle from "../../components/SectionTitle";
import Footer from "../../templates/Footer";
import CadProfessor from './CadProfessor';
import CadEscola from './CadEscola';

import './Cadastro.css';
import { Route, Switch, useRouteMatch } from "react-router-dom";


export default function Cadastro(){
  let { path, url } = useRouteMatch();
  return(
    <div >
      <header>
        <Header />
      </header>
      <Switch>
        <Route exact path={path}>  
          <SectionTitle theme="student">Cadastro</SectionTitle>
          <main className="main-section cadastro-page">
            <CardMaterial 
              path="/cadastrar/professor" 
              icon="profile_professor.png"
              theme="professor"
              text="Docente"
            />

            <CardMaterial 
              path="/cadastrar/escola" 
              icon="profile_school.png"
              theme="school"
              text="Escola"
            />
          </main>
      </Route>
      <Route path={`${url}/professor`}>
        <CadProfessor/>
      </Route>
      <Route path={`${url}/escola`}>
        <CadEscola/>
      </Route>
      
      </Switch>
      <footer>
        <Footer theme="lp"/>
      </footer>
    </div>
  )
}