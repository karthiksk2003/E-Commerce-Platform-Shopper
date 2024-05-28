import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
const ProductDisplay = (children) => { 
    const {product} =children;
     const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
           <div className="productdisplay-img-list">
            <img src={product.image}alt="" />
            <img src={product.image}alt="" />
            <img src={product.image}alt="" />
            <img src={product.image}alt="" />
           </div>
          <div className="productdispaly-img">
            <img className='productdisplay-main-img'src={product.image} alt="" />
          </div>
        </div>
    
      <div className="productdisplay-right"><h1>{product.name}</h1>
      <div className="productdisplay-right-stars">
        <img src={star_icon}alt="" />
      
        <img src={star_icon}alt="" />

        <img src={star_icon}alt="" />

        <img src={star_icon}alt="" />
     
      
       <img src={star_dull_icon} alt="" />
       <p>(120)</p>
       <div className="productdisplay-right-prices">
        <div className="productdisplay-right-prices-old">
          ${product.old_price}
        </div>
        <div className="productdisplay-right-price-new">${product.new_price}</div>
       </div>
       <div className="productdisplay-right-description">
       Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse
       </div>
       <div className="productdisplay-right-siwe">
        <h1>Select Size</h1>
        <div className="productdisplay-right-siwes">
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
        </div>
       </div>
       <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category:</span>Women,T-Shirt,Crop Top</p>
       <p className='productdisplay-right-category'><span>Tags:</span>Modern,Latest</p>
      </div>
      </div>
      </div>
  );
};

export default ProductDisplay;