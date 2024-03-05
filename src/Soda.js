import React from 'react';
import { Link } from 'react-router-dom';
import './Soda.css'; 

const Soda = () => {
    return (
        <div className="snack-container soda"> 
           <img src="/soda-image.jpg" alt="A can of soda" /> 
           <div className="snack-info">
                <h1>Soda</h1>
                <p>A refreshing, fizzy choice.</p>
                <Link to="/">Back</Link>
           </div>
        </div>
    );
};

export default Soda;
