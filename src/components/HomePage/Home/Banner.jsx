import BannerPortal from '../../../assets/images/chair.png';
import BannerBg from '../../../assets/images/bg.png'
const Banner = () => {
    return (
        <div  className='' style={{ backgroundImage: `url(${BannerBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="hero py-20">
                <div className="hero-content flex-col lg:flex-row-reverse px-7">
                    <img src={BannerPortal} className="md:w-1/2 rounded-lg shadow-2xl" />
                    <div data-aos="fade-right">
                        <h1 className="text-4xl font-bold textColor">Your New Smile Starts Here</h1>
                        <p className="py-6 pr-24">Welcome to our Doctor Portal! Manage your patients, appointments, and medical records all in one place.</p>
                        {/* <button className="btn btn-primary">Appointment</button> */}
                        <button className="btn bg-[#19D3AE] hover:bg-[#34bea3] text-white">Appointment</button>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default Banner;