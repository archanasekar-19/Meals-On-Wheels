import React, { useContext } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../context/StoreContext'

const FoodDisplay = ({category}) => {

  const {foodList} = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      <h1>What About These Tasty Treats?</h1>
      <div className='food-display-list'>
        {foodList.map((item)=>{
          if (category==="All" || category===item.food_category) {
            return <FoodItem key={item.food_id} image={item.food_image} name={item.food_name} desc={item.food_desc} price={item.food_price} id={item.food_id} />
          }
        })}
        
      </div>
    </div>
  )
}

export default FoodDisplay

