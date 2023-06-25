import { useState } from "react";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointment from "./AvailableAppointment";

const Appointment = () => {
    const [selectedDate, setSelectedData] = useState(new Date());
    return (
        <div>
            <AppointmentBanner selectedDate={selectedDate} setSelectedData={setSelectedData}></AppointmentBanner>
            <AvailableAppointment  selectedDate={selectedDate}></AvailableAppointment>
        </div>
    );
};

export default Appointment;