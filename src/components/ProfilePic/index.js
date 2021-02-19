  import React from 'react';

import './ProfilePic.css'

export default function ProfilePic(props){
  let { newURL, profilePic } = props
  
  return(
    <img 
      className="profilePic" 
      src={newURL? profilePic : require(`../../assets/${profilePic}`).default} 
      alt="Foto de perfil" />
  )
}