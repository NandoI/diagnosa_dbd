import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import Routers from "../routes/Routes";

const Layout = () => {
    return (
        <>
            <Header/>
                <main>
                  <Routers/>
                </main>
            <Footer/>
        
        </>
    )
}

export default Layout