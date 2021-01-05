import React, { useState,useEffect } from 'react'
import './MenuCard.css'

const MenuCard = (props) => {
  
  
  return (
    <div className="section-center">
    <div className="menu-card">
      <header>
        <h4>{props.title}</h4>
        <h4 className="price">{props.price}</h4>
      </header>
      <div className="photo-card">
        <img src={props.img} className="photo"/>
      </div>
      <p>
        {props.desc}
      </p>
    </div>
    </div>
  )
}

export default MenuCard
