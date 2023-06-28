import footer from '../../assets/images/footer.png'
const Footer = () => {
    return (
        <div style={{ background: `url(${footer})`, backgroundSize: 'cover' }}>
            <footer className="footer p-10 text-xl pt-10 items-center">
                <div >
                    <span className="footer-title text-center">Services</span>
                    <div className='md:flex-col flex gap-3 flex-wrap'>
                        <a className="link link-hover">Free Events</a>
                        <a className="link link-hover">Online Consultation</a>
                        <a className="link link-hover">Appointment</a>
                        <a className="link link-hover">Emergency Care</a>
                    </div>
                </div>
                <div>
                    <span className="footer-title text-center">Hospital</span>
                    <div className='md:flex-col flex gap-3 flex-wrap'>
                        <a className="link link-hover">Environment</a>
                        <a className="link link-hover">Contacts Information</a>
                        <a className="link link-hover">Terms Of Us</a>
                        <a className="link link-hover">Privacy Policy</a>
                    </div>
                </div>
                <div>
                    <span className="footer-title text-center">Contact Hospital</span>
                    <div className='md:flex-col flex gap-3 flex-wrap'>
                        <a className="link link-hover">Email: Care123@gmail.com</a>
                        <a className="link link-hover">Phone:+5675457863</a>
                        <a className="link link-hover">New Calofonia || 234 B</a>
                        <a className="link link-hover">Facebook & Instagram</a>
                    </div>
                </div>
            </footer>
            <div className="footer footer-center p-4">
                <div>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;