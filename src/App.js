import logo from './logo.svg';
import React from "react";
import Home from "./components/home"
import About from "./components/about"
import Quote from "./components/quote"
import Nav from "./components/nav"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom"
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <hr />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="quotes" element={<Quote />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;