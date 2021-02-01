import { Link } from 'react-router-dom';
import './ButtonAY.css';

function ButtonAY(props){
  
  return(
    <Link as={'button'} to={props.newPath} className={`button button-${props.theme} ${props.className}`}>
      {props.texto}
    </Link>
  );
}

export default ButtonAY;