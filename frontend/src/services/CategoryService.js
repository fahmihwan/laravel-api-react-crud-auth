import httpCommon from "../http-common";

const getAll = (url = "http://127.0.0.1:8000/api/categories") =>
    httpCommon.get(url);

const remove = (id) =>
    httpCommon.delete(`http://127.0.0.1:8000/api/categories/${id}`);

const create = (data) =>
    httpCommon.post(`http://127.0.0.1:8000/api/categories`, data);

const findByid = (id) =>
    httpCommon.get(`http://127.0.0.1:8000/api/categories/${id}}`);

const update = (id, data) =>
    httpCommon.put(`http://127.0.0.1:8000/api/categories/${id}}`, data);

const listSelect = () =>
    httpCommon.get("http://127.0.0.1:8000/api/category/list/select");

const CategoryService = {
    getAll,
    remove,
    create,
    findByid,
    update,
    listSelect,
};

export default CategoryService;
