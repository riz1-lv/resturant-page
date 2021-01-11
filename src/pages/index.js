import * as React from "react"
import NavigationBar from "../components/NavigationBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Hero from "../components/Hero.js";
import MenuCard from "../components/MenuCard";
import Menu from "../components/Menu";
import item from '../components/menuData.js'

  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')




class IndexPage extends React.Component{
  
  render(){
    return (
      <main>
        <title>Home Page</title>
        <NavigationBar/>
        <Hero/>
        <Menu>
          <MenuCard dish={item[0]}/>
          <MenuCard dish={item[1]}/>
          <MenuCard dish={item[2]}/>
          <MenuCard dish={item[3]}/>
          <MenuCard dish={item[4]}/>
        </Menu>
      </main>
    );
  }
};

export default IndexPage
