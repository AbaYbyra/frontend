import React from 'react';
import ButtonAY from '../ButtonAY';
import {useHistory} from 'react-router-dom';

import './CardProfile.css'

export default function CardProfile(props){
  let { theme, image, name, active, path } = props;
  let color = `var(--color-${theme})`
  const history = useHistory();

  function handleClick(e){
    e.preventDefault();
    history.push(path)
  }
  
  return(
    <article 
      className="cardProfile"
      style={{borderColor: color}}  
    >
      <div 
        className="img-container-profile"
        style={{borderColor: color}}
      >
        <img 
          className="imgCardProfile"
          src={require(`../../assets/${image}`).default} 
          alt={`Foto de ${name}`}
        />
      </div>
      <div className="content-block-profile">
        <p className="cardProfileName">{name}</p>
        <ButtonAY onClick={handleClick} theme="primary">
          + info
        </ButtonAY> 
        {active && 
          <p className="perfil-ativo">ATIVO</p>
        }       
      </div>
    </article>
    
  )
}