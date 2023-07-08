import { Link, Outlet } from 'react-router-dom';
import Footer from '../HeadAndFooter/Footer';
import Header from '../HeadAndFooter/Header';
import useAdmin from '../../Customhook/useAdmin';
import { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import { FcHome ,FcAddressBook} from "react-icons/fc";
const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin,isLoading] = useAdmin(user?.email)
    // console.log("cheak Admin",isAdmin);
    if(isLoading){
        return <span className="flex justify-center py-5 mx-auto loading loading-ring loading-lg"></span>
    }
    return (
        <div>
            <Header></Header>
            <div className="drawer lg:drawer-open">
                <input id="dsahboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content pl-7 ">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side z-50">
                    <label htmlFor="dsahboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 h-full bg-[#19D3AE] hover:bg-[#34bea3] font-bold pt-12 text-white z-90">
                        {/* Sidebar content here */}

                        { 
                            isAdmin? <>
                                <li><Link to="/dashboard/dashboardInfo"> Admin Dashboard</Link></li> 
                                <li><Link to="/dashboard/allUser">All User</Link></li> 
                                <li><Link to="/dashboard/addDoctors">Add Doctor</Link></li> 
                                <li><Link to="/dashboard/manageDoctor">Manage Doctor</Link></li>
                                <li><Link to="/dashboard/manageConsultation">Manage Consultation</Link></li>
                            </> : <>
                                <li><Link  to="/dashboard/dashboardInfo"><FcHome></FcHome> User Home</Link></li> 
                                <li><Link to="/dashboard/myAppointment"><FcAddressBook/>Appointment</Link></li>
                                <li><Link to="/dashboard/userConsultation"><FcAddressBook/>Consultation</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;