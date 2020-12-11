import React, { useState,useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import './NavigationBar.css';


const NavigationBar = () => {
  
  const [scrollNav,setScrollNav] = useState(false);

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

  return (
    <div>
      <Navbar className={scrollNav?'navbar active':'navbar'} fixed="top" variant="dark" expand="lg">
        <Navbar.Brand className="navLogo" href='/' >React-Bootstrap</Navbar.Brand>
      </Navbar>
    </div>
    
  )
}

export default NavigationBar
