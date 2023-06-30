import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../HomePage/Home/Home";
import Appointment from "../Page/Appointment/Appointment";
import Login from "../Authentication/Login";
import Registration from "../Authentication/Registration";
// import Dashboard from "../Dashboard/Dashboard";
import PrivateRoute from "../Authentication/PrivateRoute";
import DashboardLayout from "../Dashboard/DashboardLayout";
import MyAppointment from "../Dashboard/UserDashBoard/MyAppointment";
import AllUser from "../Dashboard/UserDashBoard/AllUser";
import Dashboard from "../Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "appointment",
                element: <Appointment></Appointment>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Registration></Registration>
            } 
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path:"dashboardInfo",
                element:<Dashboard></Dashboard>
            }
            ,
            {
                path: "myAppointment",
                element: <MyAppointment></MyAppointment>
            },
            {
                path:"allUser",
                element: <AllUser></AllUser> 
            }
        ]
    }
])

export default router;