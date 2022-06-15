import React, { useState } from "react";

const Form = () => {
    const [input, setInput] = useState({
        name: '',
        email: '',
        phone: '',
        sector: '',
        type: '',
        prints: ''
    })

    const inputHandler = (e) =>{
        setInput( {[e.target.name]: e.target.value})
    }

    const submit = () =>{
        alert(input.sector)
    }

    return (
        <div className="quoteForm">
            <input 
            type="text"
            name="name"
            onChange={inputHandler}
            placeholder="Name"
            value={input.name}/>
            <br/>
            <input 
            type="text"
            name="email"
            onChange={inputHandler}
            placeholder="Email"
            value={input.email}/>
            <br/>
            <input 
            type="text"
            name="phone"
            onChange={inputHandler}
            placeholder="Phone"
            value={input.phone}/>
            <br/>
            <input 
            type="text"
            name="sector"
            onChange={inputHandler}
            placeholder="Residential or Commercial?"
            value={input.sector}/>
            <br/>
            <input 
            type="text"
            name="prints"
            onChange={inputHandler}
            placeholder="Prints"
            value={input.prints}/>
            <br/>
            <button onClick={submit}>Submit Now</button>
        </div>
    )
}

export default Form