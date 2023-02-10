import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import MyProfile from "../../Pages/MyProfile/MyProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: 
        [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/checkout/:id",
                element: <CheckOut></CheckOut>,
                loader: ({params}) =>fetch(`http://localhost:5000/events/${params.id}`)
            },
            {
                path: "/profile",
                element:<MyProfile></MyProfile>
            }
            
        ]
    }
])

export default router;