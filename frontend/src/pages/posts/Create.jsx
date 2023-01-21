import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import InputComponent from "../../components/InputComponent";
import { useGetSelectCategoriesQuery } from "../../redux/features/categorySlice";
// import PostService from "../../services/PostService";
import { useAddNewPostsMutation } from "../../redux/features/postSlice";

const Create = () => {
    const { data: categories, isLoading, isSuccess, isError, error, refetch } = useGetSelectCategoriesQuery();

    const [addNewPosts, { loading }] = useAddNewPostsMutation();
    const navigate = useNavigate();

    const [values, setValues] = useState({
        title: "",
        description: "",
    });

    let datas = [];
    categories?.data?.map((d) => {
        datas.push({
            value: d.id,
            label: d.name,
        });
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addNewPosts(values).unwrap();
            navigate("/posts/index");
        } catch (error) {
            console.error("Failed to save the post: ", error);
        }
    };

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    };

    return (
        <div>
            <p className="font-bold">Post Create </p>
            <form onSubmit={handleSubmit} className="w-1/2">
                <InputComponent title="title" name="title" value={values.title} handleChange={handleChange} />
                <InputComponent
                    title="description"
                    name="description"
                    value={values.description}
                    handleChange={handleChange}
                />
                <div className="form-control w-full max-w-xs">
                    <label htmlFor="" className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <Select
                        options={datas}
                        className="mb-3"
                        onChange={(e) => setValues({ ...values, category_id: e.value })}
                    />
                </div>
                <button className="btn btn-primary">submit</button>
            </form>
        </div>
    );
};

export default Create;
