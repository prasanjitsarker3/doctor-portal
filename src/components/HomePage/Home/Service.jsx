import service1 from '../../../assets/images/fluoride.png'
import service2 from '../../../assets/images/cavity.png'
import service3 from '../../../assets/images/whitening.png'
const Service = () => {
    return (
        <div>
            <div className="text-center py-5">
                <h1 className="py-3 text-4xl font-serif ">Our Service</h1>
                <h3 className='text-xl '>Services We Provide</h3>
            </div>
            <div className='grid md:grid-cols-3 gap-5 text-center py-5 px-7'>
                <div className=' shadow-md p-2 py-3'>
                    <div className='flex justify-center items-center'>
                        <img src={service1} alt="" className='' />
                    </div>
                    <h2 className='text-lg font-serif font-semibold py-2'>Fluoride Treatment</h2>
                    <p className='p-2 text-base'>A Key Strategy for Optimal Dental Health and Prevention of Tooth Decay</p>
                </div>
                <div className=' shadow-md p-2  py-3'>
                    <div className='flex justify-center items-center'>
                        <img src={service2} alt="" className='' />
                    </div>
                    <h2 className='text-lg font-serif font-semibold py-2'>Cavity Filling</h2>
                    <p className='p-2 text-base'>The Essential Role of Cavity Filling in Preventing Tooth Decay and Preserving Oral Wellness</p>
                </div>
                <div className=' shadow-md p-2 py-3'>
                    <div className='flex justify-center items-center'>
                        <img src={service3} alt="" className='' />
                    </div>
                    <h2 className='text-lg font-serif font-semibold py-2'>Teeth Whitening</h2>
                    <p className='p-2 text-base'>Exploring the Benefits and Methods of Teeth Whitening for a Dazzling, Confident Smile</p>
                </div>
            </div>
        </div>
    );
};

export default Service;