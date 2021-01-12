import React,{ useState,useEffect, Children }  from 'react'
import './Menu.css'
import './Button'

const Menu = (props) => {

const [category,setCategory] = useState('all');

const changeCategory = (newCategory) =>{
  setCategory(newCategory);
}
  return (
    <div className="menu-component" id="menu"> 
      <section className="menu-section" >
        <div className="menu-title" >
          <h2 >Our Menu</h2>
        </div>
          <div className="underline" ></div>
          <div className="btn-container">
            <button type="button" className="filter-btn" onClick={() => changeCategory('all')}>
              All
            </button>
            <button type="button" className="filter-btn" onClick={() => changeCategory('breakfast')}>
              Breakfast
            </button>
            <button type="button" className="filter-btn" onClick={() => changeCategory('lunch')}>
              Lunch
            </button>
            <button type="button" className="filter-btn" onClick={() => changeCategory('dinner')}>
              Dinner
            </button>
            <button type="button" className="filter-btn" onClick={() => changeCategory('drinks')}>
              Drinks
            </button>
            <button type="button" className="filter-btn" onClick={() => changeCategory('dessert')}>
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
