import * as React from "react"
import NavigationBar from "../components/NavigationBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from "../components/Hero.js";
import MenuCard from "../components/MenuCard";
import Menu from "../components/Menu";
import item from '../components/menuData.js'
import Info from "../components/Info";
import Footer from "../components/Footer";

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
          <MenuCard dish={item[5]}/>
          <MenuCard dish={item[6]}/>
          <MenuCard dish={item[7]}/>
          <MenuCard dish={item[8]}/>
          <MenuCard dish={item[9]}/>
          <MenuCard dish={item[10]}/>
          <MenuCard dish={item[11]}/>
          <MenuCard dish={item[12]}/>
        </Menu>
        <Info/>
        <Footer/>
      </main>
    );
  }
};

export default IndexPage
