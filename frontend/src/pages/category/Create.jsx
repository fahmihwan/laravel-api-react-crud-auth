import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputComponent from "../../components/InputComponent";
import CategoryService from "../../services/CategoryService";
import { useAddNewCategoryMutation } from "../../redux/features/categorySlice";

const Create = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
    });

    const [addNewCategory, { isLoading }] = useAddNewCategoryMutation();

    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token) {
            navigate("/auth/login");
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addNewCategory(values).unwrap;

            navigate("/category/index");
        } catch (error) {
            console.error("Failed to save the post: ", error);
        }

        // CategoryService.create(values)
        //     .then(function (response) {
        //         navigate("/category/index");
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
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
            <p className="font-bold">Category Create </p>
            <form onSubmit={handleSubmit}>
                <InputComponent title="name" name="name" value={values.name} handleChange={handleChange} />
                <button className="btn btn-primary">submit</button>
            </form>
        </div>
    );
};

export default Create;
