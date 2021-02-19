import CardSession from '../../components/CardSession';
import SectionTitle from '../../components/SectionTitle';
import './FirstPageProfile.css'

export default function FirstPageProfile(props){
  let rota = props.theme == 'school' ? "escola" : "professor"
  return(
    <>
      <div className="ghost-grid"></div>
      <SectionTitle theme={props.theme}>Docente</SectionTitle>
      <section className="main-section">
        <CardSession path={`/${rota}/blog`} bg_image='bgs/water.jpg' text="Blog"/>
        <CardSession path={`/${rota}/material-docente`} bg_image='bgs/green.jpg' text="Material de Ensino"/>
        <CardSession path={`/${rota}/aprendizado`} bg_image='bgs/sky.jpg' text="Material de Aprendizado"/>
        {props.theme==="school"?
          <CardSession path="#" bg_image='bgs/fire.jpg' text="Posts"/>
          : null
        }
      </section>
    </>
  )
}