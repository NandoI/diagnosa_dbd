import React from "react"

import { Route,Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../component/aboutus"
import Register from "../pages/Register"
import Login from "../pages/Login"

const Routers = () => {
    return (
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
       </Routes>
    )
}

export default Routers