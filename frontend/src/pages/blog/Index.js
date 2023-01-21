import React, { useEffect, useState } from "react";
import axios from "axios";

const Index = () => {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/posts")
            .then(function (response) {
                // handle success
                if (response.status === 200) {
                    setBlog(response.data);
                } else {
                    alert("Error");
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, []);

    return (
        <div className="grid grid-cols-3 gap-4 p-5">
            {blog.data?.map((d, i) => (
                <div key={i} className="border">
                    <p className="font-bold">{d.title}</p>
                    <p className="">{d.description}</p>
                    <p className="">{d.created_at}</p>
                    <p className="">{d.updated_at}</p>
                </div>
            ))}
        </div>
    );
};

export default Index;
