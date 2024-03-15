import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { sliderimgUrl } from '../util/constant';
import { useDispatch } from 'react-redux';
import { addtocart } from '../store/cartSlice';

const RestaurantMenuItem = ({ data }) => {
  const dispatch = useDispatch();

  const cartadd = (item) => {
    // Dispatches the addtocart action with the item data
    dispatch(addtocart(item));
  };

  return (
    <div className='px-20 w-full sm:w-3/4 mx-auto'>
      {data && (
        <Accordion className='my-5'>
          {/* Accordion Summary */}
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {/* Category title and item count */}
            <h2 className='font-bold capitalize'>
              {data.title} {data.itemCards.length}
            </h2>
          </AccordionSummary>

          {/* Accordion Details */}
          {data.itemCards.map((item) => (
            <AccordionDetails className='shadow-lg my-2' key={item.card.info.id}>
              {/* Item details */}
              <div className='flex flex-col sm:flex-row gap-5 items-center justify-between relative'>
                {/* Item name, price, and description */}
                <div className='flex flex-col items-start gap-3'>
                  <h2 className='font-semibold text-2xl text-zinc-800 capitalize text-center'>{item.card.info.name}</h2>
                  <p className='font-semibold text-sm text-justify text-gray-900'>
                    RS {item.card.info.price / 100 ? item.card.info.defaultPrice / 100 : item.card.info.price / 100}
                  </p>
                  <p className='text-sm text-gray-400'>{item.card.info.description}</p>
                </div>

                {/* Item image */}
                <img src={sliderimgUrl + item.card.info.imageId} alt="" className='w-40 sm:w-24' />

                {/* Add to Cart button */}
                <button className='absolute right-0 bg-white p-2 capitalize top-2' onClick={() => cartadd(item.card.info)}>
                  add to cart
                </button>
              </div>
            </AccordionDetails>
          ))}
        </Accordion>
      )}
    </div>
  );
};

export default RestaurantMenuItem;
