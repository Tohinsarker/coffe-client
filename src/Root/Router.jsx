import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home";

import UpdateCoffe from "../components/UpdateCoffe";
import AddCofee from "../components/AddCofee";


export const routes = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        errorElement: <div>404 Page not found</div>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addcofee',
                element: <AddCofee></AddCofee>
            },
            {
                path: '/updatecoffe',
                element: <UpdateCoffe></UpdateCoffe>
            }
        ]
    }
])