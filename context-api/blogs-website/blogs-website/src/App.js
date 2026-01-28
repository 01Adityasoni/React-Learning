import React, { useContext, useEffect } from "react";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";



export default function App() {

  const {fetchblogPosts} = useContext(AppContext);

  useEffect(() => {
    fetchblogPosts();
  }, []);

  return (
    <div>
      
      <Header/>
      <Blogs/>
      <Pagination/>



    </div>
  );
}
