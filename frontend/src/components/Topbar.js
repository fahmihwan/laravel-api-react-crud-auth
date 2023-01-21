import axios from "axios";
import React, { useEffect } from "react";

import { NavLink, useNavigate } from "react-router-dom";

const Topbar = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        axios.defaults.headers.common["Authorization"] = `Barear ${token}`;
        axios.post("http://127.0.0.1:8000/api/logout");
        navigate("/auth/login");
    };

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <div className="text-sky-600 font-bold">WPU Blog</div>
            </div>

            <div className="flex-none">
                <div className="flex-1 mr-3">
                    {token && (
                        <>
                            <NavLink className="ml-3" to="/blog">
                                Blog
                            </NavLink>
                            <NavLink className="ml-3" to="/posts/index">
                                Post
                            </NavLink>
                            <NavLink className="ml-3" to="/category/index">
                                Category
                            </NavLink>
                        </>
                    )}

                    {!token && (
                        <>
                            <NavLink className="ml-3" to="/auth/register">
                                Register
                            </NavLink>
                            <NavLink className="ml-3" to="/auth/login">
                                Login
                            </NavLink>
                        </>
                    )}
                </div>
                {token && (
                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                {token && (
                                    <button
                                        onClick={handleLogout}
                                        className="ml-3"
                                    >
                                        logout
                                    </button>
                                )}
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Topbar;
