import { DayPicker } from "react-day-picker";


const ConsultationBanner = ({ selectedDate, setSelectedData }) => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between px-12">
                    <img src='https://img.freepik.com/free-photo/doctor-teleconsulting-patient-laptop_23-2149277537.jpg?size=626&ext=jpg&ga=GA1.1.2060036261.1681297115&semt=ais' className="md:w-1/2 rounded-lg shadow-2xl" />
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

export default ConsultationBanner;