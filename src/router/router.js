import { createBrowserRouter } from "react-router-dom";
import MyPage from "../pages/MyPage";
import NotFound from "../pages/NotFound";
import Root from "../pages/Root";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Welcome from "../page/Welcome";
import MainToDo from "../page/MainToDo";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Welcome></Welcome>,
        children: [
            { path: "/signUp", element: <SignUp></SignUp> },
            { path: "/todo", element: <MainToDo></MainToDo> },
        ],
    },
]);

export default router;