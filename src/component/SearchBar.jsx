import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import restaurant from "../util/cartdata.json";

const SearchBar = () => {
  const [searchtext, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
   
   navigate(`/searchproduct/${searchtext}`)

  };

  return (
    <div className='w-full bg-black h-screen'>
      <form onSubmit={handleForm} className='w-9/12 mx-auto sm:w-1/2 py-10 rounded-md'>
        <input
          type="text"
          className='border w-9/12 py-3 rounded-md outline-none px-4 text-gray-400'
          value={searchtext}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder='Search your favorite restaurant'
        />
        <button className='w-3/12 py-3 bg-white rounded-md text-black'>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
