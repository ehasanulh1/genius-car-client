import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Checkout from "../../pages/Checkout/Checkout";
import About from "../../pages/Home/About/About";
import Home from "../../pages/Home/Home/Home";
import Services from "../../pages/Home/Services/Services";
import Login from "../../pages/Login/Login";
import Orders2 from "../../pages/Orders/Orders2";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <PrivateRoute><Orders2></Orders2></PrivateRoute>
            }
        ]
    }
])