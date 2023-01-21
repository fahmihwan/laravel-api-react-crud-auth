import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InputComponent from "../../components/InputComponent";
import Select from "react-select";
import PostService from "../../services/PostService";
import CategoryService from "../../services/CategoryService";

const Edit = () => {
    let { state } = useLocation();

    let defaultData = [
        {
            value: state.category.id,
            label: state.category.name,
        },
    ];

    const [values, setValues] = useState({
        title: state.title,
        description: state.description,
        category_id: state.category_id,
    });

    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);
    const getCategory = async () => {
        CategoryService.listSelect()
            .then((res) => {
                // console.log(res);
                setCategories(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getCategory();
    }, []);

    let datas = categories?.map((d) => ({
        value: d.id,
        label: d.name,
    }));

    const handleSubmit = (e) => {
        e.preventDefault();
        PostService.edit(state.id, values)
            .then((e) => navigate("/posts/index"))
            .catch((err) => {
                console.log(err);
            });
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
                <InputComponent
                    title="title"
                    name="title"
                    value={values.title}
                    handleChange={handleChange}
                />
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
                        defaultValue={defaultData}
                        // isLoading={true}
                        options={datas}
                        className="mb-3"
                        onChange={(e) =>
                            setValues({ ...values, category_id: e.value })
                        }
                    />
                </div>
                <button className="btn btn-primary">submit</button>
            </form>
        </div>
    );
};

export default Edit;
