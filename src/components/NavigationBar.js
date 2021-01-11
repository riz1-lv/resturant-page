import React, { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from "gatsby"
import './NavigationBar.css';



const NavigationBar = () => {
  
  const [scrollNav,setScrollNav] = useState(false);
  const [click,setClick] = useState(false);
  const [button,setButton] = useState(true);

  const changeClick = ()=>{ 
    setClick(!click);
  }

  const changeNav = () =>{
    if(window.scrollY >= 80)
      setScrollNav(true);
    else{
      setScrollNav(false);
    }  
  }
  const closeMobileMenu = () =>{
    setClick(false);
  }
  const showButton = () =>{
    if(window.innerWidth <= 960){
      setButton(false);
    }
    else{
      setButton(true);
    }
  }

  useEffect(() =>{
  window.addEventListener('resize',showButton);
  })
  useEffect(()=>{
    window.addEventListener('scroll', changeNav)
  },[scrollNav]);
  
  useEffect(()=>{
    changeNav()
  },[scrollNav]) 

  return (
    <div>
      <div className={scrollNav || click? 'navContainer active':'navContainer'}>
        <div className='navybar'>
          <Link className='navyLogo' to = '/' onClick={closeMobileMenu} >RESTURANT</Link>
        
        <div className="menu-icon" onClick={changeClick}>
          <FontAwesomeIcon  icon={click?faTimes :faBars} id={click?'xIcon':'barIcon'}/>
        </div>
        <ul className={click?'navMenu active':'navMenu'}>  
          <li className='navItem'>
            <Link to='/#heroContainer' className="navLinks" onClick={closeMobileMenu}>
            Home
            </Link>
          </li>
          <li className='navItem'>
            <Link to='/#menu' className="navLinks" onClick={closeMobileMenu}>
            Menu
            </Link>
          </li>
          <li className='navItem'>
            <Link to='/about' className="navLinks" onClick={closeMobileMenu}>
            About
            </Link>
          </li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default NavigationBar
