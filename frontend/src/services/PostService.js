import httpCommon from "../http-common";

const getAll = (url = "http://127.0.0.1:8000/api/posts") => {
    return httpCommon.get(url);
};

const store = (data) => httpCommon.post("http://127.0.0.1:8000/api/posts", data);

const destory = (id) => httpCommon.delete(`http://127.0.0.1:8000/api/posts/${id}`);

const edit = (id, data) => httpCommon.put(`http://127.0.0.1:8000/api/posts/${id}`, data);

const PostService = {
    getAll,
    store,
    edit,
    destory,
};

export default PostService;
