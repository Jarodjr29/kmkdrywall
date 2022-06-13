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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
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