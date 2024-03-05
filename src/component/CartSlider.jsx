import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settings, sliderimgUrl } from "../util/constant";
import { useEffect, useState } from "react";
import cartjsondata from "../util/cartdata.json"
const CartSlider = () => {
  const [sliderdata,setsliderdata]=useState([]);
  useEffect(()=>{
  const result=cartjsondata.data.cards[0].card.card.imageGridCards.info;
  setsliderdata(result);
  },[])
  
  return (
    <>
    <div className=" z-0">
      <h2 className='text-xl sm:text-3xl capitalize font-semibold mb-4'>deepak, whats on your mind ?</h2>

      <div className="slider-container">
      <Slider {...settings}>
       {
        sliderdata.map((item)=>(
          <>
            <img src={sliderimgUrl+item.imageId} alt="img-url" key={item.id} className=" cursor-pointer" />
          </>
        ))
       }
      </Slider>
    </div>
    </div>
    </>
  )
}

export default CartSlider