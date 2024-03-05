import React from 'react';
import { Link } from 'react-router-dom';
import './CandyBar.css'; 

const CandyBar = () => {
    return (
        <div className="snack-container candybar"> 
           <img src="/candybar-image.jpg" alt="A candy bar" /> 
           <div className="snack-info">
                <h1>Candy Bar</h1>
                <p>The sweetest treat in the vending machine!</p>
                <Link to="/">Back</Link>
           </div>
        </div>
    );
};

export default CandyBar;
