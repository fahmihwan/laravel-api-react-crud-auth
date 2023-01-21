import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InputComponent from "../../components/InputComponent";
import CategoryService from "../../services/CategoryService";

const Edit = () => {
    let { state } = useLocation();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: state.name,
    });

    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token) {
            navigate("/auth/login");
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        CategoryService.update(state.id, values)
            .then(function (response) {
                navigate("/category/index");
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;

        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    };

    return (
        <div>
            <p className="font-bold">Edit CATEGORY</p>
            <form onSubmit={handleSubmit}>
                <InputComponent
                    id="name"
                    title="name"
                    name="name"
                    value={values.name}
                    handleChange={handleChange}
                />
                <button className="btn btn-primary">submit</button>
            </form>
        </div>
    );
};

export default Edit;
