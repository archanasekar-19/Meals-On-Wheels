import React from 'react'
import './Home.css'
import { assets } from '../../assets/assets'
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <>
    <div className="home-container">
    <div className="home-banner-container">
      <div className="home-bannerImage-container">
        <img src={assets.BannerBackground} alt="" />
      </div>
      <div className="home-text-section">
        <h4 className="primary-heading">
          Your Favourite Food Delivered Hot & Fresh
        </h4>
        <p className="primary-text">
          Healthy switcher chefs do all the prep work, like peeding, chopping
          & marinating, so you can cook a fresh food.
        </p>
        <button className="secondary-button">
          Order Now <FiArrowRight />{" "}
        </button>
      </div>
      <div className="home-image-section">
        <img src={assets.BannerImage} alt="" />
      </div>
    </div>
  </div>
</>
  )
}

export default Home
