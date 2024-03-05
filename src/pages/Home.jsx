import React from 'react'
import CartSlider from '../component/CartSlider'
import Restaurant from '../component/Restaurant'
import DelhiRestaurant from '../component/DelhiRestaurant'
import SearchBar from '../component/SearchBar'

const Home = () => {
  return (
    <div className='py-10 px-20'>
      <CartSlider/>
      <Restaurant/>
      <DelhiRestaurant/>
      <SearchBar/>
    </div>
  )
}

export default Home