import React, { useState } from 'react'
import ResturantData from './ResturantData';

const TopRated = ({data}) => {
    const [topratedpro,setTopRatedpro]=useState();

 const handletoprated=()=>{
//   console.log(data);
  const toprating=data.filter(item=>item.info.avgRating>4.2);
  setTopRatedpro(toprating);
 }

  return (
    <div>
  <button className='bg-green-500 text-white px-5 py-3' onClick={handletoprated}>top rated</button>
  {
    <ResturantData data={topratedpro}/>
  }
    </div>
  )
}

export default TopRated