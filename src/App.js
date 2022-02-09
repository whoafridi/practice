import './App.css';
import Header from './components/Header/Header';
import Researcher from './components/Researcher/Researcher';
import React from "react";
import NavBar from './components/NavBar/NavBar';
import {useState} from 'react';

function App() {
  const [cart, setCart] = useState([]);

  // add a handlecart method
  const handleAddToCart = (data) => {
    const newCart = [...cart, data];
    setCart(newCart);
}
  return (
    <div>
      <NavBar cart={cart}></NavBar>
      <Header></Header>
      <Researcher handleAddToCart={handleAddToCart}></Researcher>
    </div>
  );
}

export default App;
