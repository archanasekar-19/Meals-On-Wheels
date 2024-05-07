// FoodCard.jsx
import React from 'react';

const FoodCard = ({ image, name, price, desc, onClose }) => {
  return (
    <section className="product">
      <button className="close-button" onClick={onClose}>Close</button>
      <div className="product__photo">
        <div className="photo-container">
          <div className="photo-main">
            <div className="controls">
              <i className="material-icons">share</i>
              <i className="material-icons">favorite_border</i>
            </div>
            <img src={image} alt="Food" />
          </div>
        </div>
      </div>
      <div className="product__info">
        <div className="title">
          <h1>{name}</h1>
        </div>
        <div className="price">
          R$ <span>{price}</span>
        </div>
        <div className="description">
          <h3>{desc}</h3>
        </div>
        <button className="buy--btn">ADD TO CART</button>
      </div>
    </section>
  );
};

export default FoodCard;
