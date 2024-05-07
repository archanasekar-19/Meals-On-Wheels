import { useState, useContext, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import './UserOrders.css'; 

const UserOrders = ({ loggedInUser, setLoggedInUser }) => {
    const { fetchUserOrders,cartItems } = useContext(StoreContext);
    const [userOrders, setUserOrders] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            if (loggedInUser) {
                try {
                    const orders = await fetchUserOrders(loggedInUser.userId);
                    setUserOrders(orders);
                } catch (error) {
                    console.error('Error fetching user orders:', error);
                    setUserOrders([]); 
                }
            }
        };

        fetchOrders();
    }, [loggedInUser, fetchUserOrders, setLoggedInUser]);

    return (
        <div className="orders-container"> 
            <h2 className="orders-title">Orders List</h2> 
            {userOrders === null || loggedInUser===null ? (
                <p>Loading...</p>
            ) : userOrders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                <ul className="order-cards"> 
                    {userOrders.map(order => (
                        <li key={order.id} className="order-card"> 
                        <p>User ID: {order.userId}</p>
                            <p>Order ID: {order.orderId}</p>
                            <p>Order Date: {order.date}</p>
                            <p>Total: ${order.total}</p>
                            <p>Delivery Information:</p>
                            <ul className="delivery-info"> 
                                {order.values && Object.entries(order.values).map(([key, value]) => (
                                    <li key={key}>
                                        {key}: {value}
                                    </li>
                                ))}
                            </ul>
                            <p>Cart Items:</p>
                            {console.log("Cart Items:", order.cartItems,typeof cartItems)}
                            <ul className="cart-items"> 
                                {Array.isArray(order.cartItems) && order.cartItems.map((item, index) => (
                                    <li key={index}>
                                        Name: {item.name}, Price: ${item.price}, Quantity: {item.quantity}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserOrders;
