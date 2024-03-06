import React, { useEffect, useState } from 'react'
import resdata from "../util/cartdata.json";
import ResturantData from './ResturantData';
const DelhiRestaurant = () => {
    const [resturant,setRestaurant]=useState([]);
    const [filterresturant,setFilterRestaurant]=useState([]);
    useEffect(()=>{
      const result=resdata.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
      setRestaurant(result);
      setFilterRestaurant(result);
    },[]);

 const handletoprated=()=>{
//   console.log(data);
  const toprating=resturant.filter(item=>item.info.avgRating>4.2);
  setFilterRestaurant(toprating);
 }
 const deliveryfilter=()=>{
  //   console.log(data);
    const deliveryFilterfast=resturant.filter(item=>item?.info?.sla?.deliveryTime<25);
    // setRestaurant(toprating);
    setFilterRestaurant(deliveryFilterfast)
   
   }
   const allRestaurant=()=>{
  setFilterRestaurant(resturant)
   }
  return (
    <div> 
        
       <div className='flex gap-4 flex-wrap mt-10 my-5 items-center justify-center'>
       <button className='bg-green-500 shadow-xl text-white font-normal capitalize px-5 py-3 rounded-lg' onClick={handletoprated}>rating 4</button>
       <button className='bg-green-500 shadow-xl text-white font-normal capitalize px-5 py-3 rounded-lg' onClick={allRestaurant}>All restaurant</button>
       <button className='bg-green-500 shadow-xl text-white font-normal capitalize px-5 py-3 rounded-lg' onClick={deliveryfilter}>fast delivery</button>
       </div>
        <h2 className=' mb-12 my-10 text-xl sm:text-3xl capitalize font-bold'>Restaurants with online food delivery in Delhi
</h2>
        <ResturantData data={filterresturant} />
    </div>
  )
}

export default DelhiRestaurant