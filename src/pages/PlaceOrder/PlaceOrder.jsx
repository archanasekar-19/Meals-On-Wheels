import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext';
import { Formik, Form, Field } from 'formik';
import { assets } from '../../assets/assets';
import { toast } from 'react-toastify';
import './PlaceOrder.css'
import { useNavigate } from 'react-router-dom';

const PlaceOrder = ({loggedInUser,setLoggedInUser}) => {
    const { getTotalCartAmount,placeOrder,cartItems,placeOrdertoApi } = useContext(StoreContext);
    const navigate = useNavigate();

    const userId = loggedInUser ? loggedInUser.userId : null;
    console.log(userId);

    const handleSubmit = async (values) => {
        try {
            if (!values) {
                throw new Error('Form values are undefined.');
            }

            const userId = loggedInUser ? loggedInUser.userId : null;
            await placeOrder(userId, values, cartItems);
            setLoggedInUser({ ...loggedInUser, orders: [...(loggedInUser.orders || []), values] });
            toast.success('Order placed successfully!');
            navigate('/myorders', { state: { userId, values, cartItems } });

            
            // await placeOrder(userId, values, cartItems);
            // // await placeOrdertoApi(userId,values,cartItems);
            // toast.success('Order placed successfully!');
            // navigate('/myorders', { state: { userId, values, cartItems } });

        } catch (error) {
            toast.error('Failed to place order. Please try again later.');
            console.error('Error placing order:', error);
        }
    };

    return (
        <div className='place-order'>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    street: '',
                    city: '',
                    state: '',
                    zipcode: '',
                    country: '',
                    phone: ''
                }}
                onSubmit={handleSubmit}
            >

                
                    <Form>
                        <div className="place-order-left">
                            <p className='title'>Delivery Information</p>
                            <div className="multi-field">
                                <Field type="text" name="firstName" placeholder="First name" />
                                <Field type="text" name="lastName" placeholder="Last name" />
                            </div>
                            <Field type="email" name="email" placeholder="Email address" />
                            <Field type="text" name="street" placeholder="Street" />
                            <div className="multi-field">
                                <Field type="text" name="city" placeholder="City" />
                                <Field type="text" name="state" placeholder="State" />
                            </div>
                            <div className="multi-field">
                                <Field type="text" name="zipcode" placeholder="Zip code" />
                                <Field type="text" name="country" placeholder="Country" />
                            </div>
                            <Field type="text" name="phone" placeholder="Phone" />
                        </div>
                        <div className="place-order-right">
                            <div className="cart-total">
                                <p style={{ fontSize: "large", fontWeight: "400", marginBottom: "20px", textAlign: "center" }} >Cart Total</p>
                                <div>
                                    <p style={{ fontSize: "large", fontWeight: "400", marginBottom: "20px", textAlign: "center" }} >Total</p>
                                    <b style={{ fontSize: "large", fontWeight: "400", marginBottom: "20px", textAlign: "center" }} >${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}</b>
                                </div>
                            </div>
                            <div className="payment-options">
                                <p style={{ fontSize: "large", fontWeight: "400", marginBottom: "20px", textAlign: "center" }}>Select Payment Method</p>
                                <div className="payment-option">
                                    <img src={assets.Selector} alt="" />
                                    <p>COD ( Cash On Delivery )</p>
                                </div>
                                <button type="submit" >Place Order<img style={{ width: "30px", height: "30px" }} src={assets.Order} /></button>
                            </div>
                        </div>
                    </Form>

            </Formik>
        </div>
    );
}

export default PlaceOrder
