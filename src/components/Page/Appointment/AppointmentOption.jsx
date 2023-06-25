
const AppointmentOption = ({ option, setTreatMent }) => {
    const { name, slots } = option;
    return (
        <div>
            <div className="card py-5 shadow-xl">
                <div className="card-body text-center">
                    <h2 className="textColor text-2xl font-semibold text-center">{name}</h2>
                    <p className="text-center">{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                    <p className="uppercase">{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                    <div className="card-actions justify-center">
                        <label disabled={slots.length === 0}
                            htmlFor="booking-modal" onClick={() => setTreatMent(option)} className="btn bg-[#19D3AE] hover:bg-[#34bea3] text-white">Book Appointment</label>
                        {/* <button className="bg-green-500 text-white py-2 px-4 rounded">Click me</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;