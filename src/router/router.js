import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Welcome from "../page/Welcome";
import MainToDo from "../page/MainToDo";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Welcome></Welcome>,
        children: [
            { path: "/signup", element: <SignUp></SignUp> },
            { path: "/todo", element: <MainToDo></MainToDo> },
        ],
    },
]);

export default router;