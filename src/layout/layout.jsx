import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../component/header";
import Footer from "../component/footer";
import Routers from "../routes/Routes";

const Layout = () => {
    const location = useLocation();
    const isRegisterPage = location.pathname === "/Register";

    return (
        <>
            {!isRegisterPage && <Header />}
            <main>
                <Routers />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
