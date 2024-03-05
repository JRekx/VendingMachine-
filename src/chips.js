import React from 'react';
import { Link } from 'react-router-dom';
import './Chips.css'; 

const Chips = () => {
    return (
        <div className="snack-container chips"> 
           <img src="/chips-image.jpg" alt="A bag of chips" /> 
           <div className="snack-info">
                <h1>Chips</h1>
                <p>Crunchy, salty goodness!</p>
                <Link to="/">Back</Link>
           </div>
        </div>
    );
};

export default Chips;
