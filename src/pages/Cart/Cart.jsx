import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './Cart.css'
import { assets } from '../../assets/assets';
import { GoArrowRight } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const navigate = useNavigate();
  const {cartItems,foodList,removeFromCart,addToCart,removeItemFromCart , getTotalCartAmount}= useContext(StoreContext);
  return (
    <div className='cart'>
        <div className='cart-items'>
            <div className='cart-items-title'>
                <a><p>Items</p></a>
                <a><p>Title</p></a>
                <a><p>Price</p></a>
                <a><p>Quantity</p></a>
                <a><p>Total</p></a>
                <a><p>Remove</p></a>
            </div>
        </div>
        {foodList.map((item,index)=>{
            if(cartItems[item.food_id]>0){
                return (<div>
                    <div className='cart-items-title cart-items-item'>
                        <img src={item.food_image}/>
                        <p>{item.food_name}</p>
                        <p>{item.food_price}</p>
                        <p className="quantity">
                            <img src={assets.Plus} onClick={() => addToCart(item.food_id)} />
                            <p style={{padding:"0px 10px"}}>{cartItems[item.food_id]}</p>
                            <img style={{margin:"auto",width:"50px"}} src={assets.Remove} onClick={() => removeFromCart(item.food_id)} />
                        </p>

                        <p>{item.food_price*cartItems[item.food_id]}</p>
                        <img style={{width:"35px",height:"30px",cursor:"pointer"}} src={assets.Bin} onClick={()=>removeItemFromCart(item.food_id)}/>
                    </div>
                     </div>            
                )
            }
        })}
      {foodList.map((item, index) => {
        if (cartItems[item.food_id] > 0) {
          <hr style={{ borderTop: "3px dotted orange", color: "black", backgroundColor: "transparent" }} />
        }
      })}

<div className="ticket">
  <div className="ticket__content">
    <p style={{marginTop:"10px",paddingBottom:"10px",color:"#555555",fontSize:"22px"}}>Cart Total</p>
    <div>
      <div className="cart-total-details"><p>Subtotal</p><p style={{padding:"0px 10px",color:"#FF4C24"}}>${getTotalCartAmount()}</p></div>
      <div className="cart-total-details"><p>Delivery Fee</p><p style={{padding:"0px 10px",color:"#FF4C24"}}>${getTotalCartAmount()===0?0:5}</p></div>
      <div className="cart-total-details"><p style={{fontSize:"22px"}}>Total</p><p style={{padding:"0px 10px",color:"#FF4C24",fontSize:"22px"}}>${getTotalCartAmount()===0?0:getTotalCartAmount()+5}</p></div>
    </div>
    <button onClick={()=>navigate('/placeorder')}>CheckOut<GoArrowRight style={{alignItems:"center",justifyContent:"center"}}/></button>
  </div>
</div>


        
    </div>
  ) 
}

export default Cart
