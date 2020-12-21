import React, { useState,useEffect } from 'react'
import './NavigationBar.css';


const NavigationBar = () => {
  
  const [scrollNav,setScrollNav] = useState(false);
  const [click,setClick] = useState(false);

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

  
  useEffect(()=>{
    window.addEventListener('scroll', changeNav)
  },[scrollNav]);
  
  useEffect(()=>{
    changeNav()
  },[scrollNav])

  return (
    <div>
      <div className={scrollNav? 'navContainer active':'navContainer'}>
        <div className='navybar'>
          <a className='navyLogo' href = '/'>RESTURANT</a>
        </div>
        <div className="menu-icon" onClick={changeClick}>
          <i id="icon" className={click? 'fas fa-times':'fas fa-bars'}/>
        </div>
        <ul className='navMenu'>  

        </ul>
      </div>
    </div>
    /**
    <div>
      <Navbar className={scrollNav?'navbar active':'navbar'} fixed="top" variant="dark" expand="lg">
      <Navbar.Brand className="navLogo" href='/' >RESTURANT</Navbar.Brand>
      <Nav>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#menu">Menu</Nav.Link>
      </Nav>
      </Navbar>
    </div>
    */
  )
}

export default NavigationBar
