import doctor from '../../../assets/images/doctor.png'
import appionmentBg from '../../../assets/images/appointment.png'
const MakeAppoinment = () => {
    return (
        <section className='mt-32' style={{
            background:`url(${appionmentBg})`
        }}>
            <div className="hero flex justify-center">
                <div className="hero-content flex-col lg:flex-row p-3">
                    <img src={doctor} className="-mt-32 lg:w-1/3 hidden md:block rounded-lg shadow-2xl" />
                    <div className='md:pl-20 p-3'>
                        <h1 className="text-2xl font-bold textColor">Appointment</h1>
                        <h1 className="text-4xl font-bold text-white ">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page</p>
                        {/* <button className="btn btn-primary">Appointment</button> */}
                        <button className="btn bg-[#19D3AE] hover:bg-[#34bea3] text-white">Appointment</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;