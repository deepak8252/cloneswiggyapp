import React, { useEffect, useState } from 'react';
import { restauranturl, sliderimgUrl } from '../util/constant';
import { useParams } from 'react-router-dom';
import RestaurantMenuItem from '../component/RestaurantMenuItem';
import StarIcon from '@mui/icons-material/Star';
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
     
     const {info,sla}=restMenuList[0]?.card?.card  || {};
     console.log(restMenuList)
     const cateogery=restMenuList[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=>(item.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));

    return (
       <>
       <h2 className=' my-4 px-20 w-full sm:w-3/4 mx-auto text-sm text-gray-400'>home/{info?.name}</h2>
        <div className='px-20 w-full sm:w-3/4 mx-auto flex justify-between shadow-lg gap-3'>
            <div className='flex flex-col gap-2 pb-3'>
                <p>{info?.category}</p>
                <h2 className=' text-2xl font-semibold'>{info?.name}</h2>
            <img src={sliderimgUrl+info?.cloudinaryImageId} alt={restMenuList.name} className='w-20 h-20 shadow-md rounded-full' />
            <p>{ info?.cuisines}</p>
            <p>{info?.costForTwoMessage}</p>
            </div>
            <div className='flex flex-col items-center gap-3 h-24  px-3 pt-3 border shadow-2xl'>
             <p  >{info?.avgRating}<StarIcon className='mx-3  rounded-full bg-green-500 text-white'/></p>
              <p>total rating:{"  "}(1200+)</p>
            </div>
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
