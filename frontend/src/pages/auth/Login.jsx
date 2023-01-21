import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthService";

const Login = () => {
    const [values, setValues] = useState({
        username: "",
        password: "",
    });

    const navigate = useNavigate();

    // useEffect(() => {
    // //     if (localStorage.getItem("token")) {
    // //         navigate("/posts/index");
    // //     }
    // // }, [localStorage.getItem("token")]);

    const handleChange = (e) => {
        let key = e.target.id;
        let value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://127.0.0.1:8000/api/login", values)
            .then((response) => {
                localStorage.setItem("token", response.data.access_token);
                navigate("/posts/index");
            })
            .catch((err) => alert(err));
    };

    return (
        <div className="flex  justify-center items-center h-screen">
            <div className="border p-5 rounded-md">
                <p className="font-bold text-center">Login</p>
                <form action="" onSubmit={handleSubmit}>
                    <div className="form-control mb-4">
                        <label htmlFor="username" className="label">
                            <span className="label-text">Username</span>
                        </label>
                        <label className="input-group">
                            <span>username</span>
                            <input
                                id="username"
                                onChange={handleChange}
                                value={values.username}
                                type="text"
                                className="input input-bordered"
                            />
                        </label>
                    </div>
                    <div className="form-control mb-4">
                        <label htmlFor="password" className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <label className="input-group">
                            <span>password</span>
                            <input
                                id="password"
                                onChange={handleChange}
                                value={values.password}
                                type="password"
                                className="input input-bordered"
                            />
                        </label>
                    </div>
                    <button className="btn btn-primary w-full">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
