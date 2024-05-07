import { createContext, useEffect, useState } from "react";
import { food_list, menu_list } from "../assets/assets";
import axios from 'axios';


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [orders, setOrders] = useState([]);
    const [userOrders, setUserOrders] = useState({});
    const [foodList, setFoodList] = useState(food_list); 

    const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem('loggedInUser')) || null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isUser,setisUser] = useState(true);


    const [username, setUsername] = useState('');

    useEffect(() => {
        setUsername(loggedInUser.username);
    }, [loggedInUser.username]); 
    // console.log('loggedin username', username); //commentted


    useEffect(() => {
        setisUser(loggedInUser.role === 'user');
    }, [loggedInUser.role]);
    
    useEffect(() => {
        setIsAdmin(loggedInUser.role === 'admin');
    }, [loggedInUser]);


    useEffect(()=>{
        console.log(foodList);
    },[foodList]);

    const addToCart = (itemId) =>{
        if(!cartItems[itemId])
        {
            setCartItems((prev)=>({...prev,[itemId]:1}));
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        }
    }


    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    }

    const removeItemFromCart = (itemId) => {
        setCartItems((prevCartItems) => {
            const updatedCartItems = { ...prevCartItems };
            delete updatedCartItems[itemId]; 
            return updatedCartItems;
        });
    };
      
    const getCartCount = () => {
        let count = 0;
        for(const item in cartItems)
        {
            count+=cartItems[item]
        }return count;
    }

    const placeOrder = (userId, values, cartItems) => {

        const generateOrderId = () => {
            const prefix = 'MOWX'; 
            const randomNum = Math.floor(Math.random() * 10000); 
            return `${prefix}${randomNum}`;
        };
    
        const orderId = generateOrderId(); 

        setOrders(prevOrders => [...prevOrders, values]);
        setUserOrders(prevUserOrders => ({
            ...prevUserOrders,
            [userId]: [...(prevUserOrders[userId] || []), values],
            [`${userId}_cartItems`]: [...(prevUserOrders[`${userId}_cartItems`] || []), cartItems],
            [`${userId}_orderId`]: orderId
        }));
        console.log('userId',userId);

        placeOrdertoApi(userId, values, cartItems, orderId);
    };
    
    const placeOrdertoApi = (userId, values, cartItems,orderId) => {
        const endpoint = 'http://localhost:8000/orders';
    
        // Convert cartItems object into an array of item details
        const cartItemDetails = Object.entries(cartItems).map(([itemId, quantity]) => {
            const itemInfo = foodList.find(item => item.food_id === Number(itemId));
            if (itemInfo) {
                return {
                    name: itemInfo.food_name,
                    price: itemInfo.food_price,
                    quantity: quantity
                };
            }
            return null;
        }).filter(item => item !== null); 
        const total = cartItemDetails.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    
        const currentDate = new Date();
        const options = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            timeZoneName: 'short'
        };

        const formattedDate = currentDate.toLocaleDateString('en-IN', options);

        console.log(formattedDate);
        const orderData = {
            userId: userId,
            orderId:orderId,
            date: formattedDate,
            values: values,
            cartItems: cartItemDetails,
            total: total
        };
    
       
        axios.post(endpoint, orderData)
            .then(response => {
                
                console.log('Order placed successfully:', response.data);
                
                setOrders(prevOrders => [...prevOrders, values]);
                setUserOrders(prevUserOrders => ({
                    ...prevUserOrders,
                    [userId]: [...(prevUserOrders[userId] || []), values],
                    [`${userId}_cartItems`]: cartItemDetails,
                    [`${userId}_orderId`]: response.data.id
                }));
            })
            .catch(error => {
               
                console.error('Error placing order:', error);
            });
    };
    
    const fetchUserOrders = async (userId) => {
        try {
            const endpoint = `http://localhost:8000/orders?userId=${userId}`;
            const response = await fetch(endpoint);
    
            if (!response.ok) {
                throw new Error('Failed to fetch user orders');
            }
    
            const data = await response.json();
            console.log(data);
            return data;

        } catch (error) {
            console.error('Error fetching user orders:', error);
            return [];
        }
    };
    


    useEffect(() => {
        console.log('Updated userOrders:', userOrders);
    }, [userOrders]);
    

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems]);

    const addFoodItem = (newFoodItem) => {
        const requiredProperties = ['food_id', 'food_name', 'food_image', 'food_price', 'food_desc', 'food_category'];
    
        const isIdTaken = foodList.some(item => item.food_id === newFoodItem.food_id);
        if (isIdTaken) {
            console.error('food_id is already taken.');
            return;
        }
    
        const updatedFoodList = [...foodList, newFoodItem];
        setFoodList(updatedFoodList);
    
        localStorage.setItem('foodList', JSON.stringify(updatedFoodList));
    };


    const removeFoodItem = (foodIdToRemove) => {
        
        const updatedFoodList = foodList.filter(item => item.food_id !== foodIdToRemove);
        setFoodList(updatedFoodList);
    
        
        localStorage.setItem('foodList', JSON.stringify(updatedFoodList));
    
        console.log(`Food item with ID ${foodIdToRemove} removed successfully.`);
    };
    
    

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = foodList.find((product) => product.food_id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.food_price * cartItems[item];
                } else {
                    console.error(`Food item with ID ${item} not found.`);
                }
            }
        }
        return totalAmount;
    }


    const signupUser = async (userData) => {
        try {
            const response = await axios.post('http://localhost:8001/users', userData);
            const newUser = response.data;
            setLoggedInUser(newUser);
            localStorage.setItem('loggedInUser', JSON.stringify(newUser));
            
        } catch (error) {
            console.error('Error signing up user:', error);
        }
    };
    
    const contextValue = {
        menu_list,
        foodList,
        cartItems,
        userOrders,
        isAdmin,
        isUser,
        username,
        signupUser,
        fetchUserOrders,
        placeOrdertoApi,
        removeFoodItem,
        addToCart,
        removeFromCart,
        removeItemFromCart,
        getTotalCartAmount,
        getCartCount,
        placeOrder,
        setLoggedInUser,
        setUserOrders,
        addFoodItem
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
