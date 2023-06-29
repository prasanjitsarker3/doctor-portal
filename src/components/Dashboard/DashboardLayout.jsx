import { Outlet } from 'react-router-dom';
import Footer from '../HeadAndFooter/Footer';
import Header from '../HeadAndFooter/Header';

const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer lg:drawer-open">
                <input id="dsahboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content pl-7 ">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dsahboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 h-full bg-[#19D3AE] hover:bg-[#34bea3] font-bold pt-12 text-white z-90">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;