import React from "react";
import { sliderimgUrl } from "../util/constant";
import StarIcon from '@mui/icons-material/Star';
import { Link } from "react-router-dom";
const ResturantData = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-12  justify-center mt-5">
      {data.map((item) => (
        <>
          <Link to={`/restaurant/${item.info.id}`} className="flex gap-4 cursor-pointer shadow p-2 text-center rounded-md flex-col items-center justify-center w-11/12 sm:w-52  ">
            <img src={sliderimgUrl + item.info.cloudinaryImageId} alt="" className="h-52 w-full rounded-lg"/>
            <h2 className="text-xl font-medium sm:font-semibold">{item.info.name}</h2>
            <div className="flex items-center gap-4">
                <p><StarIcon className="text-white p-1 bg-green-600 rounded-full mx-2"/> <span className="text-xl font-medium sm:font-semibold">{item.info.avgRating}</span></p>
                <p className="text-xl font-medium sm:font-semibold">
                    {
                        item.info.sla.slaString
                    }
                </p>
            </div>
            <p className="text-xl font-normal capitalize">{item.info.costForTwo}</p>
          </Link>
        </>
      ))}
    </div>
  );
};

export default ResturantData;
