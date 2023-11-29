import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";


const Main = () => {
    const location = useLocation();
    const noheader = location.pathname.includes('jasemp')
    return (
        <div>
           {noheader || <Navbar></Navbar>}
            <Outlet></Outlet>
        </div>
    );
};

export default Main;