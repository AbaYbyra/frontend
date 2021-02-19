import ReactPlayer from 'react-player';

import './CardVideos.css';

export default function CardVideo(props){
  let {tutorial, theme} = props
  let color = `var(--color-${theme})`

  return(
    <article 
      className="cardVideo"
      style={{borderColor: color}}  
    >
      <div className="video-container">
        <ReactPlayer
          className='react-player'
          url={tutorial.url}
          width='100%'
          height='100%'
        />
      </div>
      <div className={`content-block-blog ${theme}`}>
        <h5 className="cardBlogTitle">{tutorial.title}</h5>
        <p className="cardBlogPreview"><strong>Canal: </strong>{tutorial.canal}</p>
      </div>

      <a 
        className="link-card-blog" 
        href={tutorial.url}
        target="_blank"
      >Assistir no YouTube
      </a>
    </article>
  )
}
