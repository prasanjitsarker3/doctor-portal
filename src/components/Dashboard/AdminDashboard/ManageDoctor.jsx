import { useQuery } from "@tanstack/react-query";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageDoctor = () => {
    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ["doctors"],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/doctors');
            const data = await res.json();
            return data;
        }
    });
    if (isLoading) {
        <span className="flex justify-center py-4 loading loading-ring loading-lg"></span>
    }
    const handleDeleteDoctor = (id) => {
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
                fetch(`http://localhost:5000/doctors/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Doctor has been deleted.',
                            'success'
                        )
                    })


            }
        })


    }
    return (
        <div>
            <h1 className="text-center text-2xl font-sans textColor">Manage Doctor Information </h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className="text-lg font-sans">
                            <th>#</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            doctors.map((doctor, index) =>
                                <tr key={doctor._id}>
                                    <th>{index + 1}</th>
                                    <td><img src={doctor.image} alt="" className="w-[55px] rounded-full" /></td>
                                    <td className="text-lg">{doctor.name}</td>
                                    <td className="text-lg ">{doctor.specialty}</td>

                                    <td>
                                        <button onClick={() => handleDeleteDoctor(doctor._id)} className="btn btn-circle btn-outline">
                                            <FaTrash></FaTrash>
                                        </button>
                                    </td>

                                </tr>
                            )
                        }

                        {/* row 2 */}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctor;