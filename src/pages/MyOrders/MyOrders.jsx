import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const MyOrders = ({ loggedInUser }) => {
    const location = useLocation();
    const x = loggedInUser.userId;
    const { userId, values, cartItems } = location.state;
    const { foodList, getTotalCartAmount } = useContext(StoreContext);

    return (
        <div>
            <h1>My Orders</h1>
            <div>
            </div>
            {foodList.map((item, index) => {
                if (cartItems[item.food_id] > 0) {
                    return (
                        <div key={index}>
                            <div className='cart-items-title cart-items-item'>
                                <img src={item.food_image} alt={item.food_name} />
                                <p>{item.food_name}</p>
                                <p>{item.food_price}</p>
                                <p style={{ padding: "0px 10px" }}>{cartItems[item.food_id]}</p>
                                <p>{item.food_price * cartItems[item.food_id]}</p>
                            </div>
                        </div>
                    );
                }
                return null;
            })}


            

        
            <div className="cart-total-details">
                <p style={{ fontSize: "22px" }}>Total</p>
                <p style={{ padding: "0px 10px", color: "#FF4C24", fontSize: "22px" }}>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}</p>
            </div>
        </div>
    );
}

export default MyOrders;
