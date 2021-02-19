import React from 'react';

import './CardBlog.css'

export default function CardBlog(props){
  let { theme, image, title, preview, path } = props;
  //console.log("IMAGE:", image)
  let color = `var(--color-${theme})`

  if(title.length >= 20){
    if(preview.length > 60){
      preview = preview.slice(0, preview.indexOf(" ", 50)) + '...'; 
    }      
  } else{
    if(preview.length > 70){
      preview = preview.slice(0, preview.indexOf(" ", 70)) + '...'; 
    }
  }
  return(
    <article 
      className="cardBlog"
      style={{borderColor: color}}  
    >
      <div className="img-container-blog">
        <img 
          className="imgCardBlog"
          src={image != ""? require(`../../assets/${image}`).default: ""} 
          alt={`${title}`}
        />
      </div>
      <div className={`content-block-blog ${theme}`}>
        <h5 className="cardBlogTitle">{title}</h5>
        
        <p className="cardBlogPreview">{preview}</p>
      </div>
      <a 
        className="link-card-blog" 
        href={path}
      >Veja mais...
      </a>
    </article>
    
  )
}