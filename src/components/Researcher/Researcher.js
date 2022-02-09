import React, { useEffect, useState } from "react";
import './Researcher.css'
import Profile from "../Profile/Profile";

const Researcher = ({handleAddToCart}) => {
    // declare states
    const [datas, setData] = useState([]);
    // load the data
    useEffect(() =>{
        fetch("https://raw.githubusercontent.com/whoafridi/Play-with-JavaScript/master/data.JSON")
        .then(res => res.json())
        .then(data => setData(data))
    },[]);

    return (
        <div className="container">
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