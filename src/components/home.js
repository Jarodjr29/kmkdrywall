import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Quote  from "./quote";

class Home extends Component{
    render(){
        return (
            <div className="home">
                <div className="homeHeader">
                    <h1>KMK Drywall</h1>
                    <p>A family business specializing in drywall and steel framing</p>
                    <NavLink to="/quotes"> Request a quote today!</NavLink>
                </div>
            </div>
        )
    }
}
export default Home