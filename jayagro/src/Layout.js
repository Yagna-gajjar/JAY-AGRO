import Navbar from "./Navbar.js";
import Footer from "./Footer.js"
import { Outlet } from "react-router-dom";

export default function Layout() {
    return(
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
}