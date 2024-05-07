import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css'
import { StoreContext } from '../../context/StoreContext';
import { toast } from 'react-toastify';
const FoodItem = ({ image, name, price, desc , id }) => {

    const {cartItems,addToCart,removeFromCart,removeFoodItem,username,isUser,isAdmin} = useContext(StoreContext);
    console.log(isUser);
    const onDeleteClick = (food_id) => {
            removeFoodItem(food_id);
            toast.success('Food Item Deleted !');
    };

    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={image} alt="" />
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p> <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-desc">{desc}</p>
                <p className="food-item-price">${price}
                {!cartItems[id]
                ?<img className='add' onClick={() =>  addToCart(id)} src={assets.Plus} alt="" />
                :<div className='counter' >
                        <img style={{marginLeft:"2px",marginRight:"2px"}}src={assets.Remove} onClick={()=>removeFromCart(id)} alt="removed" />
                        <p>{cartItems[id]}</p>
                        <img src={assets.Plus} onClick={()=>addToCart(id)}  alt="added" />
                    </div>
                }</p>

                {!isUser ? (
                    <button onClick={() => onDeleteClick(id)} >Delete Food</button>
                ) : (
                    <button onClick={() => onDeleteClick(id)} disabled={isUser}>Delete Food</button>
                )}


            </div>

        </div>
    )
}

export default FoodItem


