import SideMenu from "../../templates/SideMenu";
import CardBlog from '../../components/CardBlog';

import './InnerBlog.css';
import SectionTitle from "../../components/SectionTitle";

export default function InnerBlog(props){
  return(
    <>
      {/* <SideMenu theme={props.theme}/> */}
      <div className="ghost-grid"/>
      <SectionTitle theme={props.theme}>Blog</SectionTitle>
      <section className="main-section">
        <CardBlog
          theme={props.theme}
          image="planeta-plastico.jpg"
          title="Planeta Plástico"
          preview="Reportagem da FAPESP sobre crescimento do consumo de plástico"
          path="https://revistapesquisa.fapesp.br/planeta-plastico/"
        />

        <CardBlog
          theme={props.theme}
          image="reciclagem-a-favor.jpg"
          title="Reciclagem a favor dos negócios e da natureza"
          preview="Iniciativas revertendo a baixa taxa de coleta e reaproveitamento de resíduos"
          path="https://blog.santaluziamolduras.com.br/reciclagem-a-favor-dos-negocios-e-da-natureza/"
        />
        
        <CardBlog
          theme={props.theme}
          image="problema-lixo.jpg"
          title="Como resolver o problema do lixo"
          preview="Alternativas para resolver a alta quantidade de resíduos sem tratamento"
          path="#"
        />
      </section>
    </>
  )
}