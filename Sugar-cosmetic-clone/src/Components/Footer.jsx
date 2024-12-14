import React from 'react'
import { Heading } from  './Heading'
// social media icons
import { CiFacebook } from "react-icons/ci";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";

import { AiFillPinterest } from "react-icons/ai";


//footer logo
import ftlogo from '../images/logo/ftlogo.jpg'


import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer-class' >
      <div className="subscription-container">
          <Heading title="LET'S STAY IN TOUCH" />
          <p>Get the latest beauty tips straight to your inbox. Can't wait to connect!</p>
          <div className="subscription-input">
            <input type="email" placeholder="Enter Email" />
            <button>SUBSCRIBE</button>
            {/* <img src={ftlogo} alt="Logo" /> */}
          </div>
    </div>

      <div className='footer__container'>
      <div className="footer-logo">
        <img src={ftlogo} alt="Logo" />
        
      </div>
      <div className="lote">
      <h2>SUGAR</h2>
      </div>
      <div className="social-icons">
        <a href="#"><CiFacebook />        </a>
        <a href="#"><AiFillTwitterCircle />        </a>
        <a href="#"><FaInstagramSquare />        </a>
        <a href="#"><TiSocialYoutubeCircular />
        </a>
        <a href="#"><AiFillPinterest />        </a>
      </div>
          <div className="line">
            <div className="dataft">
              <span>Stores</span>
              <span>Elite</span>
              <span>Terms & Conditions</span>
              <span>Returns</span>
              <span>FAQs</span>
              <span>About Us</span>
            </div>
          </div>
     
        <div className="get-touch">
          <div className="get-touch__container">
            <h1>GET IN TOUCH</h1>
            <h2>Call us at</h2>
            <h3>1800-209-9933</h3>
            <p>Monday to Saturday: 09:00 AM - 07:00 PM</p>
          </div>
          <div className="get-touch__container">
            
            <h2>Support</h2>
            <p>hello@sugarcosmetics.com</p>
          </div>
          <div className="get-touch__container">
           
            <h2>Careers</h2>
            <p>We're hiring!</p>
          </div>
          <div className="get-touch__container">
           
            <h2>Press & Media</h2>
            <p>pr@sugarcosmetics.com</p>
          </div>
          <div className="get-touch__container">
            <h1></h1>
            <h2>Influencer Collab</h2>
            <p>Join Us</p>
          </div>
          </div>
        </div>

      </div>
    
  )
}
