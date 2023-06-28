import { useEffect, useState } from "react";
import PopularDoctorCart from "./PopularDoctorCart";

const PopularDoctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch("doctors.json")
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <div className="text-center py-10">
                <h1 className="text-3xl font-serif textColor">Our Specialist Doctors</h1>
                <p className="text-xl pt-3 font-serif">You Can Take Service Online Video Call Anytime</p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    doctors.map(doctor => <PopularDoctorCart 
                        key={doctor.id} doctor={doctor}
                    ></PopularDoctorCart>)
                }
            </div>
        </div>
    );
};

export default PopularDoctors;