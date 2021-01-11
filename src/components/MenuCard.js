import React, { useState,useEffect } from 'react'
import './MenuCard.css'

const MenuCard = (props) => {

let visible = true;

  console.log(props.buttonState);
  if(props.buttonState == props.dish['category'] || props.buttonState == 'all'){
    visible = true;
    console.log('visible')

  }
  else{
    visible = false;
    console.log('notvisible')
    
  }
  
  
  return (
    <div className={visible?"menu-card" : "menu-card-disabled"}>
      <div className="photo-card">
        <img src={props.dish['image']} className="photo"/>
      </div>
      <div className="menu-text">
        <header>
          <h5>{props.dish['title']}</h5>
          <h5 className="price">{props.dish['price']}</h5>
        </header>
        <p className='item-text'>
          {props.dish["desc"]}
        </p>
      </div>
    </div>
    
  )
}

export default MenuCard
