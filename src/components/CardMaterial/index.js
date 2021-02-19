import React from 'react';

import './CardMaterial.css'

export default function CardMaterial(props){
  let {path, icon, theme, text, disabled } = props;
 
  let color = `var(--color-${theme})`

  return(
    <a 
      className="cardMaterial" 
      href={path}
      style={{backgroundColor: color}}
      disabled={disabled ? true : false}
      >
      <div className="img-container-cMaterial">
        <img 
          className="imgCardMaterial"
          src={require(`../../assets/${icon}`).default} 
          alt={`${text}`}
        />

      </div>
    
      <p className="textCardMaterial">
        {text}
      </p>
    </a>
  )
}