import { format } from "date-fns";
import { useEffect, useState } from "react";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "./BookingModal";

const AvailableAppointment = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatMent, setTreatMent] = useState(null);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])
    return (
        <div>
            <p className='py-12 textColor text-xl font-serif text-center'>You have selected date: {format(selectedDate, 'PP')}</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 py-12">
                {
                    appointmentOptions.map(option => <AppointmentOption setTreatMent={setTreatMent} key={option._id} option={option}></AppointmentOption>)
                }
            </div>
            {
                treatMent && <BookingModal treatMent={treatMent} selectedDate={selectedDate}></BookingModal>
            }
        </div>
    ); 
};

export default AvailableAppointment;