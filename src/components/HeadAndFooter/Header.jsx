import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";


const Header = () => {
    const { user, userLogOut } = useContext(AuthContext)
    const handleLogOut = () => {
        userLogOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error);
            })
    }
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const allTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', allTheme);
    }, [theme])
    const themehandle = n => {
        if (n.target.checked) {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    }
    const options = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/appointment'>Appiontment </Link></li>
        <li><Link to='/consultation'>Consultation</Link></li>
        {
            user ? <> <li><Link to='/dashboard/dashboardInfo'>Dashboard</Link></li>
                <li className="lg:tooltip lg:tooltip-bottom" data-tip={user?.displayName}><Link onClick={handleLogOut}>Logout</Link></li></>
                : <li><Link to='/login'>Login</Link></li>
        }
        <li>
            <label className="swap swap-rotate">
                <input style={{ display: 'none' }} onClick={themehandle} type="checkbox" className="toggle toggle-md text-white !" checked={theme === 'light' ? false : true} />
                <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
            </label>
        </li>

    </>
    return (
        <div className="navbar bg-base-100 z-50 sticky top-0">
            <div className="navbar-start z-50">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="bg-base-200  font-bold menu menu-compact dropdown-content  shadow rounded-box  text-base font-serif">
                        {options}
                    </ul>
                </div>
                <a ></a>
                <Link className="normal-case text-2xl font-serif flex items-center gap-2" to='/'> Doctor
                    {/* <img src="https://img.freepik.com/premium-vector/medical-halth-care-icon_602006-1945.jpg?size=626&ext=jpg&ga=GA1.2.2060036261.1681297115&semt=ais" alt="" className="" height={'10px'} width={'180px'} /> */}
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal  text-base  font-serif">
                    {options}
                </ul>
            </div>
            <label htmlFor="dsahboard-drawer" tabIndex={1} className="navbar-end lg:hidden cursor-pointer pr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Header;