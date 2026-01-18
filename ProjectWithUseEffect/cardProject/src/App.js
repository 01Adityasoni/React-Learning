import React from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import {apiUrl , filterData} from "./data";
import { useEffect , useState } from "react";
import { toast } from "react-toastify";
import Spinner from "./Components/Spinner";




const App = () => {
const [courses , setcourses] = useState(null);
const [loading , setloading] = useState(true);

  async function fetchData() {
    setloading(true);
  try {
    let response = await fetch(apiUrl);  
    let output = await response.json();
    setcourses(output.data);
    console.log("data", output);
  } catch (error) {
    toast.error("Something went wrong");
    console.log("error", error);
  } 

  setloading(false);
}

useEffect(() => {
  fetchData();
}, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Navbar/>
      </div>
      <div>
        <Filter filterData={filterData}/>
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner/>) : (<Cards courses={courses}/>)
        }
      </div>
    </div>
  )
};

export default App;
