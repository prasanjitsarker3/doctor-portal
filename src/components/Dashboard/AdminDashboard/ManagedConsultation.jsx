import useAllConsult from "../../../Customhook/useAllConsult";



const ManagedConsultation = () => {
    const [consultBookingData, isLoading, refetch] = useAllConsult()
    if (isLoading) {
        return <div className="flex justify-center items-center py-3">
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }

    const handleApproved = (id) => {
        fetch(`http://localhost:5000/consultAllBooking/pending/${id}`, {
            method: "PATCH"
        })
        .then(res => res.json())
        .then(data=>{
            refetch()
            console.log(data);
        })
    }
    return (
        <div>
            <h1 className="text-center text-2xl textColor">Managed Consultation Information !</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-lg">
                            <th>Index</th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Slot&Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            consultBookingData.map((consult, index) => <tr key={consult._id} className="text-lg">
                                <th>{index + 1}</th>
                                <td>{consult.patient}</td>
                                <td>{consult.treatment}</td>
                                <td >
                                    <p>{consult.slot} </p>
                                    <p> {consult.appointmentDate}</p>
                                </td>
                                <td>
                                    {
                                        consult.status === "pending" ? <button onClick={() => handleApproved(consult._id)} className="btn btn-primary btn-sm">Pending !</button> : <button className="btn btn-primary btn-sm">Approved</button>
                                    }
                                </td>
                                <td>
                                    {/* <button onClick={() => handleDeleteUser(consult._id)} className="btn btn-circle btn-outline">
                                        <FaTrash></FaTrash>
                                    </button> */}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManagedConsultation;