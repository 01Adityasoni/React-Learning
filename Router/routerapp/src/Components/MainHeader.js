import React from "react";
import { Outlet } from "react-router-dom";

const MainHeader = () => {
    return (
        <div>
        {/* useing Outlet to render the child routes */}
            <Outlet/>
        </div>
    );
}   
export default MainHeader;