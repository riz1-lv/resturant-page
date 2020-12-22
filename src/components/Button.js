
import React from 'react'
import './Button.css'
import {Link} from 'gatsby'

const STYLES = ['btn--primary','btn--outline'];

const SIZES = ['btn--medium','btn--large'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
  const checkStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return(
    <Link to='/menu' className="btn-mobile">
      <button className= {`btn ${checkStyle} ${checkSize}`} onClick={onClick} type={type}>
        {children}
      </button>
    </Link>
  );
}
