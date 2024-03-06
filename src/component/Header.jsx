import { logo_url } from '../util/constant';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SearchIcon from '@mui/icons-material/Search';
import HelpIcon from '@mui/icons-material/Help';
import Person2Icon from '@mui/icons-material/Person2';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MenuIcon from '@mui/icons-material/Menu';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
const [menuicon,setmenuicon]=useState(true);
  const menuref=useRef();
  const viewref=useRef()
 if(viewref){
  console.log("hello")
 }
 const navbarToggle=(e)=>{
  if(menuref){
    menuref.current.classList.toggle("visible");
    // e.target.classList.toggle("show");
  }
  
 }
  return (
    <div className=' z-10 sticky bg-white top-0 flex sm:justify-between justify-start gap-5 sm:px-20 px-10 py-6 sm:py-2 shadow-lg sm:items-center items-start sm:flex-row flex-col '>
      <Link to={"/"}>
        <img src={logo_url} alt="logo" className='w-20 h-16' />
      </Link>
      <div className='flex'>
        <ul className='sm:flex gap-5 flex-col sm:flex-row sm:gap-11 hidden sm:mt-0 mt-4  ' ref={menuref}>
          <Link to={"/search"}  className=' text-gray-600 hover:text-orange-500 cursor-pointer font-normal text-sm sm:text-lg  capitalize'><SearchIcon />{" "}search</Link>
          <li className=' text-gray-600  hover:text-orange-500 cursor-pointer text-sm font-normal sm:text-lg capitalize'><LocalOfferIcon className=' font-normal text-gray-500'/>{" "}offers</li>
          <li className=' text-gray-600  hover:text-orange-500 cursor-pointer font-normal text-sm sm:text-lg  capitalize'><HelpIcon/>{" "}help</li>
          <li className=' text-gray-600  hover:text-orange-500 cursor-pointer font-normal text-sm sm:text-lg  capitalize'><Person2Icon/>{" "}deepak</li>
          <li className=' text-gray-600  hover:text-orange-500 cursor-pointer font-normal text-sm sm:text-lg  capitalize'><LocalMallIcon/>{" "}cart 0</li>
        </ul>
  
     <div ref={viewref} className=' fixed right-2 top-4 block sm:hidden cursor-pointer' onClick={navbarToggle}>
      <MenuIcon />
      </div>
     
      </div>
    </div>
  )
}

export default Header