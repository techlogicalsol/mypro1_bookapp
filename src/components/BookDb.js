import React from "react";
import { Link } from "react-router-dom";

function BookDb({books}){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12" style={{marginBottom: "80px"}}>
               
                    <div className="row">
                        {books && books.map((item)=>(
                            <div className="col-md-3 mb-5" key={item.id}>
                        <div class="card myCard">                
                        <img src={item.volumeInfo.imageLinks.thumbnail ? 
                        `${item.volumeInfo.imageLinks.thumbnail}` : "No record found"}
                        className="bookImg"/>

                        <div className="card-body myCard-body">
                        <h5 className="card-title mytitle">{item.volumeInfo.title}</h5>
                        <p className="card-text mytext">
                            Authors: {item.volumeInfo.authors ? item.volumeInfo.authors : "NOT AVAILABLE"}
                        </p>
                        <pre style={{color: "#ccc"}}>Published date: 
                            {item.volumeInfo.publishedDate ? 
                            item.volumeInfo.publishedDate : "NO DATE"}
                        </pre>
          
                        <Link to={`bookDetail/${item.id}`}>
                        <button type="button" 
                        class="btn btn-outline-secondary">
                            More Info
                        </button>
                        </Link>
   
                        </div>
                                                
                                
                        </div>
                    </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

       
    )
}

export default BookDb