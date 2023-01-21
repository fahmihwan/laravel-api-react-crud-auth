import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Category = () => {
    return (
        <div>
            <div className="bg-purple-900 text-white">
                <NavLink className="ml-3" to="/category/index">
                    List Data
                </NavLink>
                <NavLink className="ml-3" to="/category/create">
                    Create
                </NavLink>
            </div>
            <div className="m-3">
                <Outlet />
            </div>
        </div>
    );
};

export default Category;
