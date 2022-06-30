import React from "react";

function Search({handleSubmit, search, setSearch, maxResults, setMaxResults, minResults, setMinResults}){
    return(
        <>
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-8 mx-auto">
                <form onSubmit={handleSubmit} className="myform">
                <input 
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e)=> setSearch(e.target.value)}
                    
                />
            <button className="btn mybtnsearch">
                <i class="fas fa-search"></i>
            </button>
            </form>
                </div>
                
                <div className="col-md-6 mt-5 mx-auto filter">
                    <label htmlFor="maxResults" style={{color: "white", marginRight: "10px"}}>Max</label>
                    <input 
                        type="number"
                        id="maxResults"
                        className="form-control"
                        placeholder="Max"
                        value={maxResults}
                        onChange={(e)=> setMaxResults(e.target.value)}
                    />

                    <label htmlFor="minResults" style={{color: "white", marginRight: "10px", marginLeft: "10px"}}>Min</label>
                    <input 
                        type="number"
                        id="minResults"
                        placeholder="Min"
                        className="form-control"
                        value={minResults}
                        onChange={(e)=> setMinResults(e.target.value)}
                    />
                        </div>
            </div>
        </div>

        </>
    )
}

export default Search