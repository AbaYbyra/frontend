import React from 'react';

import './CardSession.css'

export default function CardSession(props){
  let {path, bg_image, text } = props;
  let fontSize = 5;

  if (text.length > 10){
    fontSize=3.5
  }
  return(
    <a className="cardSession" href={path}>
      <img 
        className="imgCardSession"
        src={require(`../../assets/${bg_image}`).default} 
        alt={`${text}`}/>

      <p 
      className="textCardSession"
      style={{fontSize: `${fontSize}rem`}}
      >
        {text}
      </p>
    </a>
  )
}