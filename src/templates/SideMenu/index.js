import { useState } from 'react';

import './SideMenu.css';

export default function SideMenu(props){
  const {theme,children, title} = props;
  const [open, setOpen] = useState(false);
  function openClose(e){
    e.preventDefault();
    const isOpen = open
    setOpen(!isOpen)
  }

  return(
    <aside 
      className={`side-menu ${theme} 
      ${open? 'opened':'closed'}`}>
      <div className="side-menu-content">
        <p 
          className="side-menu-title"
          style={{color: `var(--color-${theme})`}}
        >{title}</p>

        {props.children}
      </div>
      <div className={`side-menu-opener ${theme}`} onClick={openClose}>
        {open? '\u226A' : '\u226B'}
      </div>
    </aside>
  )
} 