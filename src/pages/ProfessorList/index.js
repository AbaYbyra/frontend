import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { Table } from "react-bootstrap";
import SectionTitle from "../../components/SectionTitle";

import './ProfessorList.css';

function ProfessorList(props){
  let [professors, setProfessors] = useState([])
  useEffect(()=>{
    fetch(`http://abaybyra-online.umbler.net/professores_post`, { 
      method: "post",headers: {
        'Content-Type': 'application/json',
      }, 
      body:  JSON.stringify({
        "id_escola": props.user.user.escola_id
      })
    })
    .then(resposta => resposta.json())
    .then(res => {
      if(typeof res.errno != "undefined"){
      }
      else{
        setProfessors(res)
      }
      
    });
  },[])

  return (
    <>
      <div className="ghost-grid"/>
      <SectionTitle theme={props.theme}>Meus Professores</SectionTitle>
      
      <section className="main-professor-list">
        <Table responsive>
          <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Email</th>
          </tr>
          </thead>
          <tbody>
            
              {professors && professors.map((professor, index) =>
            
                <tr>
                  <td>{index + 1}</td>  
                  <td>{professor.nome}</td>
                  <td>{professor.email}</td>
                </tr>
                
              )} 
          </tbody>
        </Table>
      </section>

    </>
  )
}

const mapStateToProps = state =>({
  user: state.user
})

export default connect(mapStateToProps)(ProfessorList)