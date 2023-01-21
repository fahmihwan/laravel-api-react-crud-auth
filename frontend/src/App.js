import { Route, Routes } from "react-router-dom";
import "./App.css";

import Topbar from "./components/Topbar";
// post
import Posts from "./pages/posts/Posts";
import PostIndex from "./pages/posts/Index";
import PostCreate from "./pages/posts/Create";
import PostEdit from "./pages/posts/Edit";

// category
import Category from "./pages/category/Category";
import CategoryIndex from "./pages/category/Index";
import CategoryCreate from "./pages/category/Create";
import CategoryEdit from "./pages/category/Edit";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function App() {
    return (
        <div className="App">
            <Topbar />

            <Routes>
                <Route path="auth/login" element={<Login />} />
                <Route path="auth/register" element={<Register />} />
                <Route path="posts" element={<Posts />}>
                    <Route index path="index" element={<PostIndex />} />
                    <Route path="create" element={<PostCreate />} />
                    <Route path=":id/edit" element={<PostEdit />} />
                </Route>

                <Route path="category" element={<Category />}>
                    <Route index path="index" element={<CategoryIndex />} />
                    <Route path="create" element={<CategoryCreate />} />
                    <Route path=":id/edit" element={<CategoryEdit />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
