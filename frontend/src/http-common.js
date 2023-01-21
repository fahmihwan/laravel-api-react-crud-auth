// import axios from "axios";

// const token = localStorage.getItem("token");

// export default axios.create({
//     baseURL: "http://127.0.0.1:8000/api",
//     headers: {
//         "Content-type": "application/json",
//         Authorization: "Bearer " + token,
//     },
// });

const baseURL = "http://127.0.0.1:8000/api";
const setHeader = async (headers, { getState }) => {
    const access_token = localStorage.getItem("token");
    if (access_token) {
        headers.set("Authorization", `Bearer ${access_token}`);
        headers.set("Content-Type", "application/json");
    }
    return headers;
};

const httpCommon = {
    baseURL,
    setHeader,
};
export default httpCommon;
