import React from "react";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import Filter from "./Components/Filter";
import {apiUrl,filterData} from "./data";
import {toast} from "react-toastify";
import {useState,useEffect} from "react";

const App = () => {
const [courses,setCourses] = useState(null); 

useEffect(() => {
    const fetchData = async() => {
        try {
            const res = await fetch(apiUrl);
            const output = await res.json();
            console.log(output);
            setCourses(output.data);
        } catch (error) {
            toast.error("Something went wrong");
        }
    };
    fetchData();
}, []);



  return (
    <div>
      <Navbar /> 

      <Filter filterData={filterData}  />

      <Cards courses={courses} />
    </div>
  );
};

export default App;



