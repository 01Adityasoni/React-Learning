import React from 'react';
import {useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


//const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {
    const [tag , setTag] = useState('car');
 
    const {gif, loading, fetchData} = useGif(tag);


function clickHandler() {
  fetchData();
}

function changeHandler(e){
setTag(e.target.value);
}
 
  return ( 
  <div className='w-1/2 h-[450px] bg-blue-500 rounded-lg border border-black flex flex-col  items-center gap-y-5 mt-[15px]'>
          <h1 className='mt-[15px] text-2xl underline uppercase text-bold'>Random {tag} GIF</h1>
          {
            loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
          }

          <input 
          className='w-10/12 text-lg py-2 rounded-lg mb-[6px] text-center'
          onChange={changeHandler}
          value={tag}
          />



          <button onClick={clickHandler}
          className='mb-[20px] w-10/12 bg-yellow-500 text-lg py-2 rounded-lg'
          >Generate</button>

  </div>
  );
}
export default Tag