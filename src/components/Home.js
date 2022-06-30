import axios from "axios";
import React from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import BookDb from "./BookDb";
import Search from "./Search";

function Home(){

    const [search, setSearch] = useState('');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [maxResults, setMaxResults] = useState(10)
    const [minResults, setMinResults] = useState(1)


    const handleSubmit = async(e) =>{
        e.preventDefault();
        setLoading(true)
        if(maxResults > 40 || maxResults < 1){
            toast.error("Max result must be between 1 to 40")
        }else{

        const response = await axios.get(
`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=${maxResults}&minResults=${minResults}`)
.then(response=>{

    if(minResults >= response.data.totalItems || minResults < 1){
        toast.error(`min result must be 1 and ${response.data.totalItems}`)
    }else{
       
        if(response.data.items.length > 0){
            setBooks(response.data.items)

            setLoading(false)
        }  
    }
     //console.log(response.data)
}).catch(err=>{
    console.log(err)
    setLoading(true)
    toast.error(`${err.response.data.error.message}`)
})
        

    }
    
    }
    return(
        <>
            
            <Search 
                search={search}
                setSearch={setSearch}
                handleSubmit={handleSubmit}
                maxResults={maxResults}
                setMaxResults={setMaxResults}
                minResults={minResults}
                setMinResults={setMinResults}

            />

            <ToastContainer />

            

            <BookDb books={books}/>
        </>
    )
}

export default Home