import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

function Header(){
    return(
        <>
<div className="container-fluid myheader">
    <div className="row">
        <div className="col-md-12">
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link" to="/">Online Book Store</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
            </li>

          

        </ul>        

        </div>
    </div>
</div>

        </>
    )
}

export default Header