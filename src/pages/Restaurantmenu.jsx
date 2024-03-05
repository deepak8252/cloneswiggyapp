import React, { useEffect, useState } from 'react';
import menulist from "../util/RestaurantMenuList.json";
import { restauranturl, sliderimgUrl } from '../util/constant';
import { useParams } from 'react-router-dom';

const Restaurantmenu = () => {
    const [restMenuList, setMenuList] = useState([]);
   const {resid}=useParams();
    useEffect(() => {
        fetchdata();
    }, []);
    const fetchdata=async()=>{
   const data=await fetch(`${restauranturl}${resid}`);
   const result=await data.json();
   setMenuList(result.data.cards[0].card.card.info);
   console.log(result.data.cards)
    }
    
          // Log restMenuList to inspect its structure

    return (
       <>
        <div className='py-10 px-20'>
            <h2>Hello</h2>
            <h2 className=' text-2xl font-semibold'>{restMenuList.name}</h2>
            <img src={sliderimgUrl+restMenuList.cloudinaryImageId} alt={restMenuList.name} className='w-16' />
            <p>{ restMenuList.cuisines}</p>
            <p>{restMenuList.costForTwoMessage}</p>
        </div>
           
       </>
    );
};

export default Restaurantmenu;
