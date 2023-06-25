import bg from '../../../assets/images/appointment.png';
const Contact = () => {
    return (
        <div style={{ background: `url(${bg})` }} className='py-8'>
            <div className='text-center'>
                <h1 className='textColor text-lg py-5'>Contact Us</h1>
                <h2 className='text-2xl text-white'>Stay connected with us</h2>
            </div>
            <div className='flex justify-center items-center'>
                <div className='flex-col justify-center items-center'>
                    <input type="email" placeholder="Email..." className="input input-bordered input-md w-full max-w-xs mt-3" />
                    <br />
                    <input type="text" placeholder="Subject" className="input input-bordered input-md w-full max-w-xs my-5" />
                    <br />

                    <textarea placeholder="Message" className="textarea textarea-bordered textarea-md w-full max-w-xs" ></textarea>
                </div>
            </div>
        </div>
    );
};

export default Contact;