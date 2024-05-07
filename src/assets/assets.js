import logo from './logo (3).png';
import searchIcon from './kindpng_254250.png';
import cart from './shopping-cart-512.png';
import BannerBackground from "./home-banner-background.png";
import BannerImage from "./home-banner-image.png";
import Cross from "./cross_icon.png";
import Bike from './delivery-bike.png';
import SignUp from './add-user.png';
import Login from './profile.png';
import Plus from './plus.png';
import Remove from './remove.png';
import Bin from './bin.png';
import Selector from './selector_icon.png';
import Order from './ordered.png';
import Delete from './delete (1).png';

//menu-list
import menu1 from './menu-1.jpg'
import menu2 from './menu-2.jpg'
import menu3 from './menu-3.jpg'
import menu4 from './menu-4.jpg'
import menu5 from './menu-5.jpg'
import menu6 from './menu-6.jpg'

import biryani1 from './biryani-1.jpg'
import biryani2 from './biryani-2.jpg'
import biryani3 from './biryani-3.jpg'

import dessert1 from './dessert1.jpg';
import dessert2 from './dessert2.jpg';
import dessert3 from './dessert3.jpg';

import burger1 from './burger-1.jpg';
import burger2 from './burger-2.jpg';
import burger3 from './burger-3.jpg';

import wrap1 from './wrap-1.jpg';
import wrap2 from './wrap-2.jpg';
import wrap3 from './wrap-3.jpg';

import veg1 from './veg-1.jpg'
import veg2 from './veg-2.jpg'
import veg3 from './veg-3.jpg'

import sandwich1 from './sandwich-1.png'
import sandwich2 from './sandwich-2.png'
import sandwich3 from './sandwich-3.png'

export const assets = {
    logo,
    searchIcon,
    cart,
    BannerBackground,
    BannerImage,
    Cross,
    Bike,
    SignUp,
    Login,
    Plus,
    Remove,
    Bin,
    Selector,
    Order,
    Delete
}

export const menu_list = [
    {
        menu_name: "Biryani",
        menu_image: menu1
    },
    {
        menu_name: "Desserts",
        menu_image: menu2
    },
    {
        menu_name: "Burgers",
        menu_image: menu3
    },
    {
        menu_name: "Sandwich",
        menu_image: menu4
    },
    {
        menu_name: "Wrap",
        menu_image: menu5
    },
    {
        menu_name: "Pure Veg",
        menu_image: menu6
    },
]

export const food_list = [
    {
        food_id: 1,
        food_name: "Mutton Biryani",
        food_image: biryani1,
        food_price: 12,
        food_desc: "Food provides essential nutrients for overall health and well-being",
        food_category: "Biryani"
    },
    {
        food_id: 2,
        food_name: "Chicken Biryani",
        food_image: biryani2,
        food_price: 18,
        food_desc: "Food provides essential nutrients for overall health and well-being",
        food_category: "Biryani"
    }, {
        food_id: 3,
        food_name: "Hyderabad Chicken Biryani",
        food_image: biryani3,
        food_price: 16,
        food_desc: "Food provides essential nutrients for overall health and well-being",
        food_category: "Biryani"
    },{
        food_id: 4,
        food_name: "Berry Bliss Delight",
        food_image: dessert1,
        food_price: 14,
        food_desc: "Food provides essential nutrients for overall health and well-being",
        food_category: "Desserts"
    }, {
        food_id: 5,
        food_name: "Chocolate Bliss Delight",
        food_image: dessert3,
        food_price: 12,
        food_desc: "Food provides essential nutrients for overall health and well-being",
        food_category: "Desserts"
    }, {
        food_id: 6,
        food_name: "Mulberry Casatta",
        food_image: dessert2,
        food_price: 20,
        food_desc: "Food provides essential nutrients for overall health and well-being",
        food_category: "Desserts"
    }, {
        food_id: 7,
        food_name: "Classic Chicken Burger",
        food_image: burger1,
        food_price: 15,
        food_desc: "Food provides essential nutrients for overall health and well-being",
        food_category: "Burgers"
    }, {
        food_id: 8,
        food_name: "Burger Cheese Overload",
        food_image: burger2,
        food_price: 14,
        food_desc: "Food provides essential nutrients for overall health and well-being",
        food_category: "Burgers"
    }, {
        food_id: 9,
        food_name: "Veggie Patty Burger",
        food_image: burger3,
        food_price: 22,
        food_desc: "Food provides essential nutrients for overall health and well-being",
        food_category: "Burgers"
    }, {
        food_id: 10,
        food_name: "Paneer Wrap",
        food_image: wrap1,
        food_price: 10,
        food_desc: "Food provides essential nutrients for overall health and well-being",
        food_category: "Wrap"
    }, {
        food_id: 11,
        food_name: "Chicken Wrap",
        food_image: wrap2,
        food_price: 12,
        food_desc: "Food provides essential nutrients for overall health and well-being",
        food_category: "Wrap"
    },
    {
        food_id: 12,
        food_name: "Veggies Wrap",
        food_image: wrap3,
        food_price: 12,
        food_desc: "Food provides essential nutrients for overall health and well-being",
        food_category: "Wrap"
    },
    {
        food_id: 14,
        food_name: "Vegan Sandwich",
        food_image: sandwich1,
        food_price: 18,
        food_desc: "Food provides essential nutrients for overall health and well-being",
        food_category: "Sandwich"
    }, {
        food_id: 15,
        food_name: "Grilled Sandwich",
        food_image: sandwich2,
        food_price: 16,
        food_desc: "Food provides essential nutrients for overall health and well-being",
        food_category: "Sandwich"
    }, {
        food_id: 16,
        food_name: "Bread Sandwich",
        food_image:sandwich3,
        food_price: 24,
        food_desc: "Food provides essential nutrients for overall health and well-being",
        food_category: "Sandwich"
    },
    {
        food_id: 17,
        food_name: "Veg Pulao",
        food_image: veg1,
        food_price: 24,
        food_desc: "Food provides essential nutrients for overall health and well-being",
        food_category: "Pure Veg"
    },
    {
        food_id: 18,
        food_name: "Kanchipuram Idly",
        food_image: veg2,
        food_price: 24,
        food_desc: "Food provides essential nutrients for overall health and well-being",
        food_category: "Pure Veg"
    },
    {
        food_id: 19,
        food_name: "Curd Rice",
        food_image: veg3,
        food_price: 24,
        food_desc: "Food provides essential nutrients for overall health and well-being",
        food_category: "Pure Veg"
    }
]
