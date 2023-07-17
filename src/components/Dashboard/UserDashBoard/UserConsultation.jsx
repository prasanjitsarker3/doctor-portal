import { FaTrash } from "react-icons/fa";
import useConsult from "../../../Customhook/useConsult";
import Swal from "sweetalert2";

const UserConsultation = () => {
    const [consultData, isLoading, refetch] = useConsult();
    if (isLoading) {
        return <div className="flex justify-center items-center py-3">
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }
    const handleDeleteUser = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://doctor-portal-server-ten-self.vercel.app/consult/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    })
            }
        })

    }
    return (
        <div>
            <h1 className="text-center text-2xl textColor">User Consultation Information !</h1>
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
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            consultData.map((consult, index) => <tr key={consult._id} className="text-lg">
                                <th>{index + 1}</th>
                                <td>{consult.patient}</td>
                                <td>{consult.treatment}</td>
                                <td >
                                    <p>{consult.slot} </p>
                                    <p> {consult.appointmentDate}</p>
                                </td>
                                <td>
                                    {
                                        consult.status === "pending" ? <button className="btn btn-primary btn-sm">Pending !</button> : <button className="btn btn-primary btn-sm">Meet Link</button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteUser(consult._id)} className="btn btn-circle btn-outline">
                                        <FaTrash></FaTrash>
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserConsultation;