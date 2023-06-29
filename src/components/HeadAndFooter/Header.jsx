import { useContext } from "react";
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
    const options = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Consultation</Link></li>
        <li><Link to='/appointment'>Appiontment </Link></li>
        {
            user ? <> <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><Link onClick={handleLogOut}>Logout</Link></li></>
                : <li><Link to='/login'>Login</Link></li>
        }

    </>
    return (
        <div className="navbar z-30">
            <div className="navbar-start z-50">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" text-black font-bold menu menu-compact dropdown-content  p-2 shadow rounded-box  text-base font-serif">
                        {options}
                    </ul>
                </div>
                <a ></a>
                <Link className="normal-case text-2xl font-serif flex items-center gap-2" to='/'> Doctor
                    {/* <img src="https://img.freepik.com/premium-vector/medical-halth-care-icon_602006-1945.jpg?size=626&ext=jpg&ga=GA1.2.2060036261.1681297115&semt=ais" alt="" className="" height={'10px'} width={'180px'} /> */}
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-base  font-serif">
                    {options}
                </ul>
            </div>
            <label  htmlFor="dsahboard-drawer" tabIndex={1} className="navbar-end lg:hidden cursor-pointer pr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Header;