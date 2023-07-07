import { format } from "date-fns";
import useConsultation from "../../../Customhook/useConsultation";
import ConsultationOption from "./ConsultationOption";
import { FcVideoCall } from "react-icons/fc";
import BookedModal from "./BookedModal";
import { useState } from "react";

const AvailableConsultation = ({ selectedDate }) => {
    const [treatMent, setTreatMent] = useState(null);
    const date = format(selectedDate, 'PP')
    const [consultations, isLoading, refetch] = useConsultation();
    if (isLoading) {
        return <div className="flex justify-center items-center py-3">
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }
    return (
        <div>
            <p className='py-2 textColor text-2xl font-serif text-center'>You have selected date: {format(selectedDate, 'PP')}</p>
            <div className="flex justify-center items-center gap-5">
                <p className="text-2xl font-sans text-green-500">You Can Take Anytime Service  </p>
                <FcVideoCall className="w-[30px] h-[50px]"></FcVideoCall>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                {
                    consultations.map(consultation => <ConsultationOption
                    consultation={consultation} key={consultation._id} setTreatMent={setTreatMent}
                    ></ConsultationOption>)
                }
            </div>
            {
                treatMent && <BookedModal refetch={refetch} setTreatMent={setTreatMent} treatMent={treatMent} selectedDate={selectedDate}></BookedModal>
            }
        </div>
    );
};

export default AvailableConsultation;