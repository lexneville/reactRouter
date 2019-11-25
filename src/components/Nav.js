import React from 'react'
import {Link} from 'react-router-dom'

const Nav = (props) => {
    return (
        <nav>
            <h2>Black Friday Bundaroo</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li>Basket: {props.myBasket}</li>
            </ul>
        </nav>
    )
}

export default Nav
