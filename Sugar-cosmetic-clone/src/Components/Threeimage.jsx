import React from 'react'
import './ProductCard.css';

export const Threeimage = ({img1,img2,img3}) => {
  return (
    <div className='triimage'>
        <img src={img1} alt="image1"/>
        <img src={img2} alt="image2"/>
        <img src={img3} alt="img3" />
    </div>
  )
}
