import open from '../../../assets/icons/clock.svg'
import location from '../../../assets/icons/marker.svg';
import call from '../../../assets/icons/phone.svg';
const TimeLocation = () => {
    return (
        <div className="grid md:grid-cols-3 gap-5 py-7 px-5">
            <div data-aos="fade-right" className='bg flex justify-between items-center p-5 rounded'>
                <img src={open} alt="" />
                <div className='px-4 text-white'>
                    <h1 className='text-3xl '>Opening Hours</h1>
                    <p className='text-base '>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                </div>
            </div>
            <div  data-aos="zoom-in" className=' bg-black flex justify-between items-center p-5 rounded'>
                <img src={location} alt="" />
                <div className='px-4 text-white'>
                    <h1 className='text-3xl '>Visit our location</h1>
                    <p className='text-base '>Brooklyn, NY 10036, United States</p>
                </div>
            </div>
            <div data-aos="fade-left" className=' bg-blue flex justify-between items-center p-5 rounded'>
                <img src={call} alt="" />
                <div className='px-4 text-white'>
                    <h1 className='text-3xl '>Contact us now</h1>
                    <p className='text-base '>+8801787783454</p>
                </div>
            </div>
        </div>
    );
};

export default TimeLocation;