import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
// import avatar from '../../../assets/icons/quote.svg'
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    return (
        <div className='my-16'>
            
            <div className='flex justify-center text-center p-3'>
                <div>
                    <h1 className='textColor text-2xl'>Testimonial</h1>
                    <h2 className='text-3xl '>What Our Patients Says</h2>
                </div>
            </div>
            <div className='grid md:grid-cols-3 gap-5 md:px-1 px-8 py-12'>
                <div data-aos="fade-up-right" className='px-8 shadow-md p-3'>
                    <p className='text-center'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className='flex justify-between p-3'>
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={people1} />
                            </div>
                        </div>
                        <div className='text-xl font-serif text-center'>
                            <h1 className='text-xl'>Winson Herry</h1>
                            <h2>California</h2>
                            <Rating
                                style={{ maxWidth: 120 }}
                                value={4}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in-down" className='px-8 shadow-md p-3'>
                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className='flex justify-between p-3'>
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={people2} />
                            </div>
                        </div>
                        <div className='text-xl font-serif text-center'>
                            <h1 className='text-xl'>Winson Herry</h1>
                            <h2>California</h2>
                            <Rating
                                style={{ maxWidth: 120 }}
                                value={5}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-left" className='px-8 shadow-md p-3'>
                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className='flex justify-between p-3'>
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={people3} />
                            </div>
                        </div>
                        <div className='text-xl font-serif text-center'>
                            <h1 className='text-xl'>Winson Herry</h1>
                            <h2 >California</h2>
                            <Rating
                                style={{ maxWidth: 120 }}
                                value={4.5}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;