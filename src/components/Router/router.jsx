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
                path: "/dashboard",
                element: <MyAppointment></MyAppointment>
            }
        ]
    }
])

export default router;