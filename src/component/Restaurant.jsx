import  { useEffect, useState } from 'react';
import resdata from "../util/cartdata.json"
import ResturantData from './ResturantData';

const Restaurant = () => {
    const [resturant,setRestaurant]=useState([]);
    useEffect(()=>{
      const result=resdata.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
      setRestaurant(result);
    },[])
  return (
    <div>
        <h2 className=' mb-12 my-10 text-xl sm:text-3xl capitalize font-bold'>top restaurant in delhi</h2>
        <ResturantData data={resturant}/>
    </div>
  )
}

export default Restaurant