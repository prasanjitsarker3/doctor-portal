import { useEffect, useState } from "react";
import PopularDoctorCart from "./PopularDoctorCart";
import useConsultation from "../../../Customhook/useConsultation";

const PopularDoctors = () => {
    // const [doctors, setDoctors] = useState([])
    const [consultations, isLoading, refetch] = useConsultation();
    if (isLoading) {
        return <div className="flex justify-center py-3">
            <span className="loading loading-ring loading-lg"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }
    return (
        <div>
            <div className="text-center py-10">
                <h1 className="text-3xl font-serif textColor">Our Specialist Doctors</h1>
                <p className="text-xl pt-3 font-serif">You Can Take Service Online Video Call Anytime</p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    consultations.map(doctor => <PopularDoctorCart
                        key={doctor.id} doctor={doctor}
                    ></PopularDoctorCart>)
                }
            </div>
        </div>
    );
};

export default PopularDoctors;