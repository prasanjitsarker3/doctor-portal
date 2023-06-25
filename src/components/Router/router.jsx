import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../HomePage/Home/Home";
import Appointment from "../Page/Appointment/Appointment";

const router = createBrowserRouter([
    {
        path:"",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"appointment",
                element:<Appointment></Appointment>
            }
        ]
    }
])

export default router;