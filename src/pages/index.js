import * as React from "react"
import NavigationBar from "../components/NavigationBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Hero from "../components/Hero.js";
import MenuCard from "../components/MenuCard";
import Menu from "../components/Menu";


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
          <MenuCard img="../images/item-1.jpeg" desc="oh me oh my, place your bets in time, i try to take a roll, but the dice are on patrol, friday night, shining like a secret forest spy." title="pancakes or something I guess" price="$15"/>
          <MenuCard img="/images/item-1.jpeg" desc="oh me oh my, place your bets in time, i try to take a roll, but the dice are on patrol, friday night, shining like a secret forest spy." title="pancakes or something I guess" price ="$15"/>
          <MenuCard img="/images/item-1.jpeg" desc="oh me oh my, place your bets in time, i try to take a roll, but the dice are on patrol, friday night, shining like a secret forest spy." title="pancakes or something I guess" price ="$15"/>
          <MenuCard img="/images/item-1.jpeg" desc="oh me oh my, place your bets in time, i try to take a roll, but the dice are on patrol, friday night, shining like a secret forest spy." title="pancakes or something I guess" price ="$15"/>
          <MenuCard img="/images/item-1.jpeg" desc="oh me oh my, place your bets in time, i try to take a roll, but the dice are on patrol, friday night, shining like a secret forest spy." title="pancakes or something I guess" price ="$15"/>
        </Menu>


        <Jumbotron fluid>
      <Container>
    <h1>Fluid jumbotron</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
    <i className='fas fa-times'/>
      </Container>
    </Jumbotron>
    
    <Container>
    <Jumbotron fluid>
    <h1>Fluid jumbotron</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
    </Jumbotron>
    </Container>
     
     
     
    <Jumbotron fluid>
  <Container>
    <h1>Fluid jumbotron</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>
     
<Jumbotron fluid>
  <Container>
    <h1>Fluid jumbotron</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>
     
<Jumbotron fluid>
  <Container>
    <h1>Fluid jumbotron</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>

<Jumbotron fluid>
  <Container>
    <h1>Fluid jumbotron</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>

<Jumbotron fluid>
  <Container>
    <h1>Fluid jumbotron</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>
     
     
      </main>
      
      

    );
  }
};

export default IndexPage
