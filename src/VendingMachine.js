import React from 'react';
import { Link } from 'react-router-dom';

const VendingMachine = () => {
    const snacks = [
        { name: "Chips", path: "/chips" },
        { name: "Candy Bar", path: "/candybar" },
        { name: "Soda", path: "/soda" }
    ];

    return (
        <div className="vending-machine"> 
            <h1>Vending Machine</h1>
            <ul>
                {snacks.map(snack => (
                    <li key={snack.path}>
                        <Link to={snack.path}>{snack.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VendingMachine;

