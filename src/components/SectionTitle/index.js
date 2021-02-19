
import './SectionTitle.css'

export default function SectionTitle(props){
  let {theme} = props

  return(
    <h1 
      className="section-title"
      style={{color: `var(--color-${theme})`}}
    >
      {props.children}
    </h1>
  )
}