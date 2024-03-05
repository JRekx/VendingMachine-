import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Chips from './chips';
import CandyBar from './CandyBar';
import Soda from './Soda';
import './style.css'; 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/chips" element={<Chips />} />
        <Route path="/candybar" element={<CandyBar />} />
        <Route path="/soda" element={<Soda />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
