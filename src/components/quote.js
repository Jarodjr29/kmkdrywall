import React, { Component } from "react";
import Form from "./form";

class Quote extends Component{
    render(){
        return (
            <div className="quote">
                <h1>Request A Quote!</h1>
                <Form/>
            </div>
        )
    }
}
export default Quote