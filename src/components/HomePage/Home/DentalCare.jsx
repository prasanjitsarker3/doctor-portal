import treatMentImage from '../../../assets/images/treatment.png'
const DentalCare = () => {
    return (
        <div>
            <div className="hero py-10">
                <div className="grid md:grid-cols-2 gap-5">
                    <div className='flex justify-center items-center w-1/2 mx-auto'>
                        <img src={treatMentImage} className="rounded-lg shadow-2xl"/>
                    </div>
                    <div className='flex justify-center items-center mx-auto'>
                        <div className='px-5'>
                            <h1 className="text-3xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using Content here, content here , making it look like readable English. Many desktop publishing packages and web page</p>
                            {/* <button className="btn btn-primary">Get Started</button> */}
                            <button className="btn bg-[#19D3AE] hover:bg-[#34bea3] text-white">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;