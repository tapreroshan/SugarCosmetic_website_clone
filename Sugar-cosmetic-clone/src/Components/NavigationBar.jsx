// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { CiMobile2 , CiDiscount1, CiLocationOn,CiSearch } from "react-icons/ci";
import { FaUserCircle, FaHeart, FaShoppingBag, } from "react-icons/fa";
import { HiGiftTop } from "react-icons/hi2";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

import "./navbar.css"; 
import logo from "../images/logo.png"

function NavigationBar() {
  const [bannerText, setBannerText] = useState("");

  // Array of promotional texts
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const promotions =[
        "New launch⚠️: Try our Drop A Tint Lip Oil at Rs.599",
        "Use code: TREAT10 and enjoy 10% OFF on all orders🙌",
        "Enjoy Rs.300 Off on orders above Rs.999! Use Code: FESTIVE300🎉",
      ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setBannerText(promotions[index]);
      index = (index + 1) % promotions.length; // Loop through promotions
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  },[]);

  return (
    <header className="app-container">
      {/* Announcement Banner */}
      <div className="banner">
        <a href="#" className="banner-text">{bannerText}</a>
        <div className="banner-links">
          <a href="#" className="banner-link">
            <CiMobile2 /> GET APP
          </a>
          <a href="#" className="banner-link">
            <CiLocationOn /> STORE
          </a>
          <a href="#" className="banner-link">
            <HiGiftTop /> GIFT CARD
          </a>
          <a href="#" className="banner-link">
            <IoMdHelpCircleOutline /> HELP
          </a>
        </div>
      </div>
      {/*Navbar*/}
      <div className="navbar">
      {/* Logo */}
      <div className="navbar-logo"><img src={logo} alt="logo" srcset="" /></div>

      {/* Search Bar */}
      <div className="navbar-search">
        <input
          type="text"
          placeholder='Try "Liquid Lipstick"'
          className="search-input"
        />
        <button className="search-btn"><span className="ser"><FiSearch/> Search</span></button>
      </div>

      {/* Action Buttons */}
      <div className="navbar-actions">
        <div className="login"><button className="action-item">
        <FaUserCircle /><span> Login/Register</span>
        </button>
        </div>
        <div className="cart">
          <span className="action-item" data-tooltip="Wishlist">
            <FaHeart />
          </span>
          <span className="action-item" data-tooltip="Cart">
            <FaShoppingBag />
          </span>
          <span className="action-item" data-tooltip="Discounts">
            <CiDiscount1 />
          </span>
      </div>

      </div>
    </div>

     
      {/* Navigation Links */}
      <nav className="nav-links">
        <div className="links">
        <a href="#">SUGAR PLAY</a>
        <a href="#">LIPS</a>
        <a href="#">EYES</a>
        
        <div className="dropdown">
          <a href="#">FACE</a>
      <div className="dropdown-column">
        <h4>FOUNDATION & BB CREAM</h4>
        <ul>
          <li><a href="#">Stick Foundation</a></li>
          <li><a href="#">Liquid Foundation</a></li>
          <li><a href="#">BB Cream</a></li>
        </ul>
      
        <h4>COMPACT & FIXERS</h4>
        <ul>
          <li><a href="#">Setting Sprays</a></li>
          <li><a href="#">Loose Powder</a></li>
          <li><a href="#">Compact</a></li>
        </ul>
     
        <h4>PALETTES</h4>
        <ul>
          <li><a href="#">Blush</a></li>
          <li><a href="#">Highlighter</a></li>
          <li><a href="#">Bronzer</a></li>
        </ul>
      </div>
    </div>

        <a href="#">NAILS</a>
        <a href="#">SKINCARE</a>
        <a href="#">ACCESSORIES</a>
        <a href="#">GIFTING</a>
        <a href="#">BESTSELLERS</a>
        <a href="#">NEW LAUNCHES</a>
        <a href="#">OFFERS</a>
        <a href="#">BLOG</a>
        <a href="#">SUGAR POP</a>
        </div>
      </nav>
    </header>
  );
}

export default NavigationBar;
