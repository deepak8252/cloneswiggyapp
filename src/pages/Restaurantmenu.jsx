import React, { useEffect, useState } from 'react';
import menulist from "../util/RestaurantMenuList.json";
import { restauranturl, sliderimgUrl } from '../util/constant';
import { useParams } from 'react-router-dom';
import RestaurantMenuItem from '../component/RestaurantMenuItem';

const Restaurantmenu = () => {
    const [restMenuList, setMenuList] = useState([]);
   const {resid}=useParams();
    useEffect(() => {
        fetchdata();
    }, []);
    const fetchdata=async()=>{
   const data=await fetch(`${restauranturl}${resid}`);
   const result=await data.json();
   setMenuList(result.data.cards);
   console.log(result.data.cards)

    }
     
     const {info}=restMenuList[0]?.card?.card  || {};
     const cateogery=restMenuList[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=>(item.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));

    return (
       <>
        <div className='py-10 px-20'>
            <h2>Hello</h2>
            <h2 className=' text-2xl font-semibold'>{info?.name}</h2>
            <img src={sliderimgUrl+info?.cloudinaryImageId} alt={restMenuList.name} className='w-16' />
            <p>{ info?.cuisines}</p>
            <p>{info?.costForTwoMessage}</p>
        </div>
        {
          cateogery && cateogery.map((item)=>{
                return <RestaurantMenuItem key={item.id} data={item.card.card}/>
               
            })
        }
           {/* <RestaurantMenuItem  /> */}
       </>
    );
};

export default Restaurantmenu;
