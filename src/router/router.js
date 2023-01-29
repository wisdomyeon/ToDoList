import { createBrowserRouter } from "react-router-dom";
import MyPage from "../pages/MyPage";
import NotFound from "../pages/NotFound";
import Root from "../pages/Root";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Welcome from "../page/Welcome";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Welcome></Welcome>,
        children: [
            { path: "/signUp", element: <SignUp></SignUp> },
        ],
    },
]);

export default router;