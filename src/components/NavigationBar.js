import React, { useState,useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
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
      <Navbar.Brand className="navLogo" href='/' >RESTURANT</Navbar.Brand>
      <Nav>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#menu">Menu</Nav.Link>
      </Nav>
      </Navbar>
    </div>
    
  )
}

export default NavigationBar
