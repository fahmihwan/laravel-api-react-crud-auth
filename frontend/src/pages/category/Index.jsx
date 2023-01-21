import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryService from "../../services/CategoryService";
import { useGetCategoriesQuery, useDeleteCategoryMutation } from "../../redux/features/categorySlice";
import { Pagination } from "../../components/Pagination";

const Index = () => {
    const { data: categories, isLoading, isSuccess, isError, error, refetch } = useGetCategoriesQuery();
    const [deleteCategory] = useDeleteCategoryMutation();

    const categoriesData = categories?.data;

    const navigate = useNavigate(null);

    const token = localStorage.getItem("token");

    useEffect(() => {
        refetch();
        if (!token) {
            navigate("/auth/login");
        }
        refetch();
    }, []);

    const handleDelete = async (id) => {
        await deleteCategory(id);
        refetch();
    };

    const editData = (id, data) => {
        return navigate(`/category/${id}/edit`, {
            replace: true,
            state: data,
        });
    };
    return (
        <div className="overflow-x-auto">
            <div className="text-sky-600 font-bold">List Category</div>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name </th>
                        <th>Created At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {categoriesData?.data?.map((d, i) => (
                        <tr key={i}>
                            <th>{categories.data.from + i}</th>
                            <td>{d.name}</td>
                            <td>{d.created_at}</td>
                            <td>
                                <button
                                    onClick={() => editData(d.id, d)}
                                    className="btn btn-sm mr-2 btn-warning"
                                >
                                    edit
                                </button>
                                <button
                                    onClick={() => handleDelete(d.id)}
                                    className="btn btn-sm mr-2 btn-error"
                                >
                                    delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination data={categoriesData} />
        </div>
    );
};

export default Index;
