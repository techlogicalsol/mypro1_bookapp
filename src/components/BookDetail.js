import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";


function BookDetail(){

    const {id} = useParams()

    let history = useHistory();

    const handleClick = ()=>{
        history.push("/")
        history.replace();
    }

    const [bookCard, setBookCard] = useState([])

    const handleSubmit = async ()=>{
        const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${id}`
        )
        console.log(response)
        setBookCard(response.data.items)
    }


    //Filter

    const detailInfo = bookCard.filter((product, index)=>{
        return product.id == id;
    })



    useEffect(()=>{
        handleSubmit()
    },[])

    return(
        <>
        <div className="container mt-4">
            <div className="row">              
                <div className="col-md-12 bg-light" style={{marginBottom: "80px"}}>
              
                {detailInfo && detailInfo.map((item)=>(
                    <div className="row">
                    
                        <div className="col-md-3 p-4" key={item.id}>
                            <img src={item.volumeInfo.imageLinks.thumbnail} className="bookInfo"/>
                        </div>

                        <div className="col-md-3 p-4">
                            <h4 style={{borderBottom: "6px solid #ddd", width: "20%"}}><strong>Title</strong></h4>
                            {item.volumeInfo.title ? 
                            `${item.volumeInfo.title}` : "Not Given"}

                            <h4 className="mt-2" style={{borderBottom: "6px solid #ddd", width: "20%"}}><strong>Subtitle</strong></h4>
                            {item.volumeInfo.subtitle ? 
                            `${item.volumeInfo.subtitle}` : "Not Given"}

                            <h4 className="mt-2" style={{borderBottom: "6px solid #ddd", width: "20%"}}><strong>Authors</strong></h4>
                            <pre>{item.volumeInfo.authors}</pre>

                            <h4 className="mt-2" style={{borderBottom: "6px solid #ddd", width: "20%"}}><strong>Publisher</strong></h4>
                           <pre>{item.volumeInfo.publisher}</pre>

                            <h4 className="mt-2" style={{borderBottom: "6px solid #ddd", width: "20%"}}><strong>Rating</strong></h4>
                            <pre>{item.volumeInfo.ratingsCount}</pre>

                            <h4 className="mt-2" style={{borderBottom: "6px solid #ddd", width: "20%"}}><strong>Categoty</strong></h4>
                            <pre>{item.volumeInfo.categories}</pre>

                        </div>

                        <div className="col-md-6 p-4">
                            <h4 className="mb-2" style={{borderBottom: "10px solid #ddd"}}><strong>Description</strong></h4>
                            <p className="desc">
                            {item.volumeInfo.description}
                            </p>

                            <div className="d-flex mylinks">
                            <button onClick={handleClick} 
                    className="btn btn-outline-primary">
                        Go Home
                    </button>
                                <a 
                                    href={item.volumeInfo.previewLink}
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    color="default"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Preview Link
                                </a>

                                <a 
                                    href={item.volumeInfo.infoLink}
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    color="default"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Info Link
                                </a>
                            </div>
                        </div>


                                
                        
                   
                </div>  
                 ))}                 
            </div>
        </div>
     
        </div>
        
        </>
    )
}

export default BookDetail