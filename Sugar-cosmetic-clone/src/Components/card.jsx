import React from 'react';
import { FaRegHeart } from "react-icons/fa6";

import './ProductCard.css';

export const Card = ({
  image,
  badge,
  title,
  price,
  mrp,
  shades,
  rating,
  reviews,
  buttonLabel,
}) => {
  return (
  
    <div className="product-card">
      {badge && <span className="product-badge">{badge}</span>}
      <span className="imgspan">
      <img className="product-image" src={image} alt={title} />
      </span>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-shades">{shades} shades</p>
        <div className="price">
        <span className="product-price">₹{price}</span>
        {mrp && <span className="product-mrp">MRP ₹{mrp}</span>}
        </div>
        <div className="product-rating">★ {rating} ({reviews} reviews)</div>
      </div>
      <div className="product-actions">
        <button className="wishlist"><FaRegHeart />
        </button>
        <button className="lable">{buttonLabel}</button>
      </div>
      
    </div>
   
    
  );
};

