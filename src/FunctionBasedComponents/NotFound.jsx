import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
const NotFound=()=>{
    return(
        <>
        <div className="container mt-5">
           <div className="d-flex justify-content-center">
              <div className="not-found">
                <h1 style={{fontSize:'85px'}}>Oops!!</h1>
                <h3>404 - PAGE NOT FOUND</h3>
                <h5>Sorry, we couldn't find this<br />page</h5>
                <p>But don't worry, you can plenty of other things on out <br />Homepage</p>
                <Link to="/"><Button variant="primary">Go To Home Page</Button></Link>
              </div>
           </div>
        </div>
        </>
    )
}
export default NotFound