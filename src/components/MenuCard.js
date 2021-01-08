import React, { useState,useEffect } from 'react'
import './MenuCard.css'

const MenuCard = (props) => {
  console.log(props.buttonState);
  console.log(props.dish);
  
  return (
    
    <div className="menu-card">
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
