import React from "react";
import { BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { assets } from "../../assets/assets";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

import './Footer.css'


const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img  src={assets.logo} alt="" />
        </div>
        <div className="desc">
        Meals on Wheels: Your ultimate dining solution! Browse, order, and 
        enjoy a diverse selection of delicious meals, delivered straight to 
        your door. Elevate your dining experience with convenience, variety, 
        and flavor—all at your fingertips!
            </div>
            <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Quality</span>
          <span>Help</span>
        </div>
        <div className="footer-section-columns">
        <div className="footer-icon-text">
            <BsPhone /> 
            <span>+91 9384257033</span>
          </div>
          <div className="footer-icon-text">
            <AiOutlineMail /> 
            <span>mowhelp@gmail.com</span>
          </div>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;