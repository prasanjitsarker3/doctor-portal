import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FcVideoCall } from "react-icons/fc";
const ConsultationOption = ({ consultation,setTreatMent }) => {
    const { name, photo, about, rating, charge, specialist } = consultation;
    return (
        <div className="grid md:grid-cols-2 gap-5 py-8">
            <div className="card">
                <figure className="">
                    <img src={photo} alt="Shoes" className="rounded-xl h-[200px]" />
                </figure>
                {/* <p className="md:px-1 px-5">{about && about.slice(0, 150)}</p> */}
                <div className="flex gap-5 justify-center">
                    <p>Rating: </p>
                    <Rating
                        style={{ maxWidth: 120 }}
                        value={rating}
                        readOnly
                    />
                </div>
            </div>
            <div>

                <div className="text-center">
                    <h2 className="text-2xl">{name}</h2>
                    <p className='text-2xl font-serif py-3'>Specialist:  {specialist}</p>
                    <p className="text-xl">Charge:  ${charge}</p>
                    <p className="text-xl py-2">Time : 8.00 Am - 8.00PM</p>
                    <div className="card-actions md:px-0 px-16 w-full">
                        <label  htmlFor="booking-modal" onClick={() => setTreatMent(consultation)} className="btn  bg-[#19D3AE] hover:bg-[#34bea3] text-white w-full">Consultation <FcVideoCall></FcVideoCall></label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConsultationOption;