import React from "react"

import { Route,Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../component/aboutus"
import Register from "../pages/Register"

const Routers = () => {
    return (
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Register" element={<Register/>}/>
       </Routes>
    )
}

export default Routers