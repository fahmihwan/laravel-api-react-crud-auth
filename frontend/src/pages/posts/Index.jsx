import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDeletePostsMutation, useGetPostsQuery } from "../../redux/features/postSlice";
import { Pagination } from "../../components/Pagination";

const Index = () => {
    const { data: posts, isLoading, isSuccess, isError, error, refetch } = useGetPostsQuery();
    const [deletePosts] = useDeletePostsMutation();

    const postsData = posts?.data;

    const navigate = useNavigate("/");
    const token = localStorage.getItem("token");

    const handleDelete = async (id) => {
        deletePosts(id);
        refetch();
    };

    useEffect(() => {
        if (!token) {
            navigate("/auth/login");
        }
        refetch();
    }, []);

    return (
        <div>
            <p className="font-bold">List Post </p>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>title</th>
                                <th>description</th>
                                <th>category </th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            {postsData?.data?.length !== 0 &&
                                postsData?.data?.map((d, i) => (
                                    <tr key={i}>
                                        <th>{i + postsData.from}</th>
                                        <td>{d.title}</td>
                                        <td>{d.description}</td>
                                        <td>{d.category?.name}</td>
                                        <td>
                                            <button
                                                onClick={() => handleDelete(d.id)}
                                                className="btn btn-sm mr-3 btn-error"
                                            >
                                                delete
                                            </button>
                                            {/* <button
                                                onClick={() => editData(d.id, d)}
                                                className="btn btn-sm btn-warning"
                                            >
                                                edit
                                            </button> */}
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                    <Pagination data={postsData} />
                </div>
            </div>
        </div>
    );
};

export default Index;

// const editData = (id, data) => {
//     return navigate(`/posts/${id}/edit`, {
//         replace: true,
//         state: data,
//     });
// };
