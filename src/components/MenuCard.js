import React, { useState,useEffect } from 'react'
import './MenuCard.css'

const MenuCard = (props) => {
  
  
  return (
    
    <div className="menu-card">
      <div className="photo-card">
        <img src={props.img} className="photo"/>
      </div>
      <div className="menu-text">
        <header>
          <h5>{props.title}</h5>
          <h5 className="price">{props.price}</h5>
        </header>
        <p className='item-text'>
          {props.desc}
        </p>
      </div>
    </div>
    
  )
}

export default MenuCard
