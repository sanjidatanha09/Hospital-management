
import { Routes, createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ExhibitorList from "../pages/ExhibitorList/ExhibitorList";
import Visitors from "../pages/Visitors/Visitors";
import Service from "../Component/Service/Service";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
            },
            

            {
                path: '/service',
                element: <Service></Service>,
                loader: () => fetch('/data.json'),
            },
            {
                path: '/serviceDetails',
                element: <Visitors></Visitors>,
                loader: () => fetch('/data.json'),
            },


            {
                path: '/exhibitorlist',
                element: <ExhibitorList></ExhibitorList>,
            },

            {
                path: '/visitors',
                element: <Visitors></Visitors>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            }

        ]
    },
]);

export default router;