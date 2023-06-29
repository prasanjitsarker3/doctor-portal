// import doctor from '../../../assets/images/chair.png'
import BannerBg from '../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
// import { useState } from 'react';
// import { format } from 'date-fns';
const AppointmentBanner = ({selectedDate, setSelectedData}) => {
   
    return (
        <div style={{ backgroundImage: `url(${BannerBg})`, backgroundSize: 'cover', backgroundPosition: 'center', width:'100%' }}>
            <div className="hero py-16">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between px-12">
                    <img src='https://img.freepik.com/premium-photo/modern-dental-cabinet_109643-128.jpg?size=626&ext=jpg&ga=GA1.1.2060036261.1681297115&semt=ais' className="md:w-1/2 rounded-lg shadow-2xl" />
                    <div className=''>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedData}
                          
                        />
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;