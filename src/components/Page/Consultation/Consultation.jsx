import { useState } from "react";
import ConsultationBanner from "./ConsultationBanner";
import AvailableConsultation from "./AvailableConsultation";


const Consultation = () => {
    const [selectedDate, setSelectedData] = useState(new Date());
    return (
        <div>
            <ConsultationBanner selectedDate={selectedDate} setSelectedData={setSelectedData}></ConsultationBanner>
            <AvailableConsultation selectedDate={selectedDate}></AvailableConsultation>
        </div>
    );
};

export default Consultation;