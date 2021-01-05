import React, { useState,useEffect } from 'react'
import './MenuCard.css'

const MenuCard = (props) => {
  
  
  return (
    <div className="menu-card">
      <div>
        <img />
      </div>
      
      <p>
        {props.desc}
      </p>
    </div>
  )
}

export default MenuCard
