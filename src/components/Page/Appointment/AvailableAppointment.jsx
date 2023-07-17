import { format } from "date-fns";
import { useEffect, useState } from "react";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "./BookingModal";
import { useQuery } from "@tanstack/react-query";

const AvailableAppointment = ({ selectedDate }) => {
    const date = format(selectedDate, 'PP')
    const [treatMent, setTreatMent] = useState(null);
    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ["appointments", date],
        queryFn: () => fetch(`https://doctor-portal-server-ten-self.vercel.app/appointment?date=${date}`)
            .then(res => res.json())
    })
    if (isLoading) {
        return <div className="flex justify-center items-center py-3">
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }
    return (
        <div>
            <p className='py-12 textColor text-xl font-serif text-center'>You have selected date: {format(selectedDate, 'PP')}</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 py-12">
                {
                    appointmentOptions.map(option => <AppointmentOption setTreatMent={setTreatMent} key={option._id} option={option}></AppointmentOption>)
                }
            </div>
            {
                treatMent && <BookingModal refetch={refetch} setTreatMent={setTreatMent} treatMent={treatMent} selectedDate={selectedDate}></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;