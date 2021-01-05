import React from 'react'
import './Menu.css'
import './Button'

const Menu = (props) => {
  return (
    <div>
      <section className="menu-section">
        <div className="menu-title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
          <div className="btn-container">
            <button type="button" className="filter-btn">
              All
            </button>
            <button type="button" className="filter-btn">
              Breakfast
            </button>
            <button type="button" className="filter-btn">
              Dinner
            </button>
            <button type="button" className="filter-btn">
              Lunch
            </button>
            <button type="button" className="filter-btn">
              Drinks
            </button>
            <button type="button" className="filter-btn">
              Dessert
            </button>
          </div>
        </div>
        {props.children}      
      </section>
    </div>
  )
}

export default Menu
