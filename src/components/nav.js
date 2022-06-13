import React, { Component } from "react";
import { NavLink } from "react-router-dom"

class Nav extends Component {
    render(){
        return (
            <ul className='nav'>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/quotes">Request A Quote</NavLink>
            </li>
          </ul>  
        )
    }
}
export default Nav