import Banner from "./Banner";
import Contact from "./Contact";
import DentalCare from "./DentalCare";
import MakeAppoinment from "./MakeAppoinment";
import Service from "./Service";
import Testimonial from "./Testimonial";
import TimeLocation from "./TimeLocation";

const Home = () => {
    return (
        <div>
            <Banner></Banner> 
            <TimeLocation ></TimeLocation>
            <Service></Service>
            <DentalCare></DentalCare>
            <MakeAppoinment></MakeAppoinment>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;