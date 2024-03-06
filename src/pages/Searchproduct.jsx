import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productdata from "../util/cartdata.json";
import ResturantData from '../component/ResturantData';

const Searchproduct = () => {
  const [product, setProduct] = useState(null);
  const { term } = useParams();

  useEffect(() => {
    const filteredData = productdata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.filter((item) =>
      item?.info?.name?.toLowerCase().includes(term.toLowerCase())
    );
 
      setProduct(filteredData);
  }, [term]);
  return (
    <div> 
      
                <ResturantData data={product} />
            
      </div>
  );
};

export default Searchproduct;
