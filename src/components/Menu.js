import React,{ useState,useEffect, Children }  from 'react'
import './Menu.css'
import './Button'

const Menu = (props) => {

const [category,setCategory] = useState('All');

const changeCategory = (newCategory) =>{
  setCategory(newCategory);
}
useEffect(()=>{
  console.log(category);
})

  return (
    <div className="menu-component"> 
      <section className="menu-section">
        <div className="menu-title">
          <h2>Our Menu</h2>
        </div>
          <div className="underline"></div>
          <div className="btn-container">
            <button type="button" className="filter-btn" onClick={() => changeCategory('All')}>
              All
            </button>
            <button type="button" className="filter-btn" onClick={() => changeCategory('Breakfast')}>
              Breakfast
            </button>
            <button type="button" className="filter-btn" onClick={() => changeCategory('Dinner')}>
              Dinner
            </button>
            <button type="button" className="filter-btn" onClick={() => changeCategory('Lunch')}>
              Lunch
            </button>
            <button type="button" className="filter-btn" onClick={() => changeCategory('Drinks')}>
              Drinks
            </button>
            <button type="button" className="filter-btn" onClick={() => changeCategory('Dessert')}>
              Dessert
            </button>
          </div>
      </section>
      <div className="menu-items">
        {React.Children.map(props.children, child =>{
          return React.cloneElement(child,{buttonState: category} )
        })} 
         
      </div>
    </div>
  )
}

export default Menu
