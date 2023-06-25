import { Outlet } from "react-router-dom";
import Header from "../HeadAndFooter/Header";
import Footer from "../HeadAndFooter/Footer";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;