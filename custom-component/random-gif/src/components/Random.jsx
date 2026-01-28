import React from 'react';
import {useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


//const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {
 // const [gif, setGif] = useState('');
 // const[loading, setLoading] = useState(false);


 // async function fetchData() {
  //  setLoading(true);
//const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
 // const output = await axios.get(URL); it gives whole response object
  //const {data} = await axios.get(URL); // destructuring to get only data property from response object
  //const imageSource = data.data.images.downsized_large.url;
  //console.log(imageSource)
  //setGif(imageSource);
  //setLoading(false);
 // }

 // useEffect(() => {
   // fetchData();
 // }, []);

 const {gif, loading, fetchData} = useGif();


function clickHandler() {
  fetchData();
}
 
  return ( 
  <div className='w-1/2 h-[450px] bg-green-500 rounded-lg border border-black flex flex-col  items-center gap-y-5 mt-[15px]'>
          <h1 className='mt-[15px] text-2xl underline uppercase text-bold'>Random GIF</h1>
          {
            loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
          }
          <button onClick={clickHandler}
          className='mb-[20px] w-10/12 bg-yellow-500 text-lg py-2 rounded-lg'
          >Generate</button>

  </div>
  );
}
export default Random