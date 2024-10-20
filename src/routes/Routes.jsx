import React from "react"

import { Route,Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../component/aboutus"

const Routers = () => {
    return (
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
       </Routes>
    )
}

export default Routers