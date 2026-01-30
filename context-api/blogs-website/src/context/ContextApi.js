import { createContext } from "react"
import { useState } from "react";
import {baseUrl} from "../baseUrl";

//step 1: create context
export const ContextApi = createContext();

function ContextApiProvider({children}) {
const [loading , setLoading] = useState(false);
const [posts , setPosts] = useState([]);
const [page , setPage] = useState(1);
const [totalPages , setTotalPages] = useState(0);

// data filling from api 

async function fetchBlogsData(page = 1){
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    try{
        let result = await fetch(url);
        let data = await result.json();
        console.log(data);
        setPage(data.page);
        setPosts(data.posts);
        setTotalPages(data.totalPages);
        setLoading(false);
    }
    catch(error){
        alert("Error in fetching data from api");
        
    }
    setLoading(false);
}

function handlePageChange(page){
    fetchBlogsData(page);
}

const value = {
    loading , setLoading,
    posts , setPosts,
    page , setPage,
    totalPages , setTotalPages,
    fetchBlogsData,
    handlePageChange
};

     //step 2: provide context to children components
       return  <ContextApi.Provider value={value}>
            {children}
        </ContextApi.Provider>
    

}

export default ContextApiProvider;
