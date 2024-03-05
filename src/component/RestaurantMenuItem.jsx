import React from 'react'
import Items from './Items'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { sliderimgUrl } from '../util/constant';
const RestaurantMenuItem = ({data}) => {
  return (
    <div className='px-20 w-full sm:w-3/4 mx-auto  '>
     {
              <Accordion className='my-5'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                       <h2 className='font-bold capitalize '>
                       {data.title}{" "}{(data.itemCards.length)}
                       </h2>
              </AccordionSummary>
              {
                 data.itemCards.map((item)=>(
                    <>
                    {
                        console.log(item)
                    }
                     <AccordionDetails>
                   <div className='flex flex-col sm:flex-row gap-5 items-center justify-between  '>
                   <div className='flex flex-col items-center'>
                   <h2 className='font-semibold text-3xl mb-4 capitalize text-center'>{item.card.info.name}</h2>
                    <p className='p-4'>{item.card.info.description}</p>
                    <p className='font-semibold text-2xl'> RS {item.card.info.price/100}</p>
                   </div>
                    <img src={sliderimgUrl+item.card.info.imageId} alt="" className='w-40 sm:w-24' />
                   </div>
              </AccordionDetails>
                    </>
                 ))
              }
             
            </Accordion>
     }
    </div>
  )
}

export default RestaurantMenuItem