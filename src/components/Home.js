import React from 'react'
//add props as an arguement to grab properties from App.js
const Home = (props) => {
    return (
        <div>
           <h1>This is the home page</h1> 
           <h2>PS4 Sale: £{props.sale}</h2>
           <button onClick={props.toBasket} className="ps4Button" >Add PS4 To Basket</button>
        </div>
    )
}

export default Home;
