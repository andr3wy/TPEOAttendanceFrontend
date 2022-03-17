import React from 'react'
// import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";


import Home from './components/pages/Home.js';
import Success from './components/pages/LandingPage.js';


export default function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/success"} element={<Success />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

const Footer = () => {
    return (
        <p className="text-center" style={ FooterStyle }>Designed & coded by Andrew Yao</p>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}