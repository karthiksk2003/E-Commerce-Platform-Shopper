import React from 'react'
import './Items.css'
import { Link } from 'react-router-dom'
const Items =(children) => {
  return (
    <div className="item">
       <Link to={`/product/${children.id}`}><img onClick={window.scrollTo(0,0)} src={children.image} alt="" /></Link>
        
        <p>{children.name}</p>
        <div className="item-prices">
            <div className="item-price-new">${children.new_price}</div>
        </div>
        <div className="item-prices-old">${children.old_price}</div>
        
  </div>
  )
  
}

export default Items