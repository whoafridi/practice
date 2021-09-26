import React, { useEffect, useState } from "react";
import './Researcher.css'
import Profile from "../Profile/Profile";
import Cart from "../Cart/Cart";

const Researcher = () => {
    // declare states
    const [datas, setData] = useState([]);
    const [cart, setCart] = useState([]);

    // load the data
    useEffect(() =>{
        fetch("https://raw.githubusercontent.com/whoafridi/Play-with-JavaScript/master/data.JSON")
        .then(res => res.json())
        .then(data => setData(data))
    },[]);
    
    // declare event handler
    const handleAddToCart = (data) => {
        const newCart = [...cart, data];
        setCart(newCart);
    }

    return (
        <div className="container">
            <Cart cart={cart}></Cart>
        <div className="re-container">
            {
                datas.map(data => <Profile
                key={data.id}
                data={data}
                handleAddToCart={handleAddToCart}
                >

                </Profile>)
            }
        </div>
        </div>
    )
};

export default Researcher;