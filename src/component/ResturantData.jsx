import React from "react";
import { sliderimgUrl } from "../util/constant";
import StarIcon from '@mui/icons-material/Star';
import { Link } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
const ResturantData = ({ data }) => {
  console.log(data)
  return (
    <div className="flex  gap-12 flex-wrap  justify-center mt-5">
      { data && data.map((item,index) => (
        <>
          <Link to={`/restaurant/${item.info.id}`} key={index} className="flex gap-4 cursor-pointer shadow p-2 text-center rounded-md flex-col sm:flex-col items-center sm:items-center justify-between sm:justify-center w-72 sm:w-52 relative text-gray-500 ">
           
            <img src={sliderimgUrl + item.info.cloudinaryImageId} alt="" className="sm:h-52 sm:w-full w-32 h-32 rounded-lg "/>
           <div className=" absolute top-20  bg-gray-100 rounded-2xl  p-1  flex  font-extrabold flex-col  text-red-700  ">
           <h2 className="">{item?.info?.aggregatedDiscountInfoV3?.
header}</h2>
<p>{item?.info?.aggregatedDiscountInfoV3?.
subHeader}</p>
           </div>
          <div className="w-full ">
          <h2 className="text-xl text-ellipsis whitespace-nowrap  w-10/12  overflow-hidden font-medium sm:font-semibold">{item.info.name}</h2>
            <div className="flex items-center sm:flex-row flex-col gap-4">
                <p><StarIcon className="text-white p-1 bg-green-600 rounded-full mx-2"/> <span className="text-xl font-medium sm:font-semibold">{item.info.avgRating}</span></p>
                <p className="text-xl font-medium sm:font-semibold">
                    {
                        item.info.sla.slaString
                    }
                </p>
            </div>
            <p className="text-xl font-normal capitalize">{item.info.costForTwo}</p>
            <p className="text-sm text-gray-500 font-normal capitalize"><LocationOnIcon/> {item.info.areaName}</p>
          </div>
          </Link>
        </>
      ))}
    </div>
  );
};

export default ResturantData;
