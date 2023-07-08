// import BannerPortal from '../../../assets/images/chair.png';
import { useEffect } from 'react';
import BannerBg from '../../../assets/images/bg.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
    useEffect(() => {
        AOS.init({});
    }, [])
    return (
        <div className='' style={{ backgroundImage: `url(${BannerBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="hero py-20">
                <div className="hero-content flex-col lg:flex-row-reverse px-7">
                    {/* <img src={BannerPortal} className="md:w-1/2 rounded-lg shadow-2xl" /> */}
                    <img className="md:w-1/3 w-1/2 rounded-lg " src="https://img.freepik.com/free-vector/dentist-man-examining-patient-teeth_1308-98143.jpg?size=626&ext=jpg&ga=GA1.2.2060036261.1681297115&semt=ais" alt="" />
                    <div data-aos="fade-right">
                        <h1 className="text-4xl font-bold textColor">Your New Smile Starts Here</h1>
                        <p className="py-6 text-lg md:pr-24">Welcome to our Doctor Portal! Manage your patients, appointments, and medical records all in one place.
                            Everyone is a highly skilled and compassionate dentist dedicated to providing exceptional oral care to patients of all ages.
                        </p>
                        {/* <button className="btn btn-primary">Appointment</button> */}
                        <button className="btn bg-[#19D3AE] hover:bg-[#34bea3] text-white">Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;