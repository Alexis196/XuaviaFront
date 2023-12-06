import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import IndexLayout from "../Layout/IndexLayout/IndexLayout";
import Index from "../components/Index/Index";
import ModalLogin from "./ModalLogin/ModalLogin";

export const router = createBrowserRouter([
    {path: "/", 
    element: <IndexLayout/>,
    children: [
        {path: "/", element: <Index/>},
        // {path: "/*", element: <NotFound/>},
    ]
},
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {path: '/login', element: <ModalLogin />},
            // {path: "/*", element: <NotFound/>}
        ]
    }])