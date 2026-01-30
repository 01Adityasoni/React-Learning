import React, { use } from 'react';
import './App.css';
import Header from './components/Header'; 
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import { ContextApi } from './context/ContextApi';
import { useEffect } from 'react';
import { useContext } from 'react';



function App() {

  const {fetchBlogsData} = useContext(ContextApi);

useEffect(() => {
  // fetch initial blogs data on component mount
  fetchBlogsData();

}, []);


  return (
    <div>
    <Header/>
    <Blogs/>
    <Pagination/>
    </div>
  );
}

export default App;
