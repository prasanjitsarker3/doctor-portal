import Banner from "./Banner";
import Contact from "./Contact";
import DentalCare from "./DentalCare";
import MakeAppoinment from "./MakeAppoinment";
import PopularDoctors from "./PopularDoctors";
import Service from "./Service";
import Testimonial from "./Testimonial";
import TimeLocation from "./TimeLocation";
import TotalLayout from "./TotalLayout";

const Home = () => {
    return (
        <div>
            <Banner></Banner> 
            <TimeLocation ></TimeLocation>
            <PopularDoctors></PopularDoctors>
            <Service></Service>
            <DentalCare></DentalCare>
            <MakeAppoinment></MakeAppoinment>
            <TotalLayout></TotalLayout>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;