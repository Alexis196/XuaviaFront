import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import IndexLayout from "../Layout/IndexLayout/IndexLayout";
import Index from "../components/Index/Index";
import ModalLogin from "./ModalLogin/ModalLogin";
import Register from "./Register/Register";
import Services from "./Services/Services";
import Us from "./Us/Us";
import NotFound from "./NotFound/NotFound";
import AddServices from "./AddServices/AddServices";


export const router = createBrowserRouter([
    {path: "/", 
    element: <IndexLayout/>,
    children: [
        {path: "/", element: <Index/>},
        {path: "/*", element: <NotFound/>},
    ]
},
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {path: '/iniciosesion', element: <ModalLogin />},
            {path: '/registro', element: <Register/>},
            {path: '/servicios', element: <Services />},
            {path: '/nosotros', element: <Us />},
            {path: '/servicios/nuevoservicio/', element: <AddServices />},
            {path: "/*", element: <NotFound/>}
        ]
    }])