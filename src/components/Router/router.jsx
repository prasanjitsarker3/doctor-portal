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
import AddDoctor from "../Dashboard/AdminDashboard/AddDoctor";
import ManageDoctor from "../Dashboard/AdminDashboard/ManageDoctor";
import Payment from "../Dashboard/UserDashBoard/Payment";
import ErrorPage from "../HeadAndFooter/ErrorPage";
import Consultation from "../Page/Consultation/Consultation";
import UserConsultation from "../Dashboard/UserDashBoard/UserConsultation";
import ManagedConsultation from "../Dashboard/AdminDashboard/ManagedConsultation";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "appointment",
                element: <PrivateRoute><Appointment></Appointment></PrivateRoute>
            },
            {
                path: "consultation",
                element: <PrivateRoute><Consultation></Consultation></PrivateRoute>
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
                path: "dashboardInfo",
                element: <Dashboard></Dashboard>
            },
            {
                path: "addDoctors",
                element: <AddDoctor></AddDoctor>
            }
            ,
            {
                path: "manageDoctor",
                element: <ManageDoctor></ManageDoctor>
            }
            ,
            {
                path: "manageConsultation",
                element: <ManagedConsultation></ManagedConsultation>
            }
            ,
            {
                path: "myAppointment",
                element: <MyAppointment></MyAppointment>
            },
            {
                path: "allUser",
                element: <AllUser></AllUser>
            }
            ,
            {
                path: "userConsultation",
                element: <UserConsultation></UserConsultation>
            }
            ,
            {
                path: "/dashboard/payment/:id",
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://doctor-portal-server-ten-self.vercel.app/booking/${params.id}`)
            }
        ]
    }
])

export default router;