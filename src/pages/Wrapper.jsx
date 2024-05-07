import React, { useState } from 'react'
import ExploreMenu from '../components/ExploreMenu/ExploreMenu'
import Home from '../components/Home/Home'
import './Wrapper.css'
import FoodDisplay from '../components/FoodDisplay/FoodDisplay'

const Wrapper = () => {
  const [category,setCategory] = useState("All");
 
  return (
    <>
      <Home/>
      <ExploreMenu setCategory={setCategory} category={category}/>
      <FoodDisplay category={category} />
    </>
  )
}

export default Wrapper
