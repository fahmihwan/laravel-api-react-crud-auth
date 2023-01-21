import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Posts() {
    return (
        <div>
            <div className="bg-purple-900 text-white">
                <NavLink className="ml-3" to="/posts/index">
                    List Data
                </NavLink>
                <NavLink className="ml-3" to="/posts/create">
                    Create
                </NavLink>
            </div>
            <div className="m-3">
                <Outlet />
            </div>
        </div>
    );
}

export default Posts;
