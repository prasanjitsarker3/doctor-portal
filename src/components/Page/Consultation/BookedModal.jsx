import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../Authentication/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const BookedModal = ({ treatMent, selectedDate, setTreatMent, refetch }) => {
    const { user } = useContext(AuthContext);
    const { name } = treatMent;
    const date = format(selectedDate, 'PP')
    const { data: specialties = [] } = useQuery({
        queryKey: ["specialty"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/consultationSpecialty")
            const data = await res.json()
            console.log("Slots data ndede",data[0]);
            return data[0].slots;
        }

    })
    const handleBooking = () => {

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">X</label>
                    <h3 className="py-3 text-center font-serif text-2xl">{name}</h3>
                    <form onSubmit={handleBooking} method="get">
                        <input name="date" type="text" disabled value={date} className="input input-bordered input-info w-full " />
                        <select name="slot" className="select select-info w-full my-3">
                            {
                               specialties.map((slot, i) => <option value={slot} key={i}>{slot}</option>)
                            }
                        </select>
                       
                        <input name="name" required defaultValue={user?.displayName} type="text" placeholder="Your Name" className="input input-bordered input-info w-full " />
                        <input name="email" required defaultValue={user?.email} disabled type="email" placeholder="Your Email" className="input input-bordered input-info w-full my-3" />
                        <input name="phone" required type="text" placeholder="Phone Number" className="input input-bordered input-info w-full " />
                        <button className="btn bg-[#19D3AE] hover:bg-[#34bea3] text-white w-full mx-auto my-3">Appointment</button>

                    </form>
                </div>
            </div>
        </>
    );
};

export default BookedModal;