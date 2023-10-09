
import { Routes, createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";

import ExhibitorList from "../pages/ExhibitorList/ExhibitorList";
import Visitors from "../pages/Visitors/Visitors";
import ServiceDetails from "../Component/Service/ServiceDetails";
import Errorpage from "../Errorpage/Errorpage";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<Errorpage></Errorpage>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('/data.json'),
            },
        
            {
                path: '/servi/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: () => fetch('/data.json'),
            },


            {
                path: '/exhibitorlist',
                element: <PrivateRoute><ExhibitorList></ExhibitorList></PrivateRoute>,
            },

            {
                path: '/visitors',
                element: <PrivateRoute><Visitors></Visitors></PrivateRoute>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/registration',
                element:<Registration></Registration>,
            }

        ]
    },
]);

export default router;