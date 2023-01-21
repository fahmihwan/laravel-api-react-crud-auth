import axios from "axios";

const AuthLogin = (data) => {
    return axios.post("http://127.0.0.1:8000/api/login", data);
};

const AuthService = {
    AuthLogin,
};

export default AuthService;
