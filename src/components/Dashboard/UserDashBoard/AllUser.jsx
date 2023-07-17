import { FaTrash } from "react-icons/fa";
import useAllUser from "../../../Customhook/useAllUser";
import Swal from "sweetalert2";

const AllUser = () => {
    const [allUsers, isLoading, refetch] = useAllUser();
    const handleMakeAdmin = (id) => {
        fetch(`https://doctor-portal-server-ten-self.vercel.app/users/admin/${id}`, {
            method: "PUT"
        })
            .then(res => res.json())
            .then(data => { 
                refetch()
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Update User To Admin !',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                console.log(data); 
            })
    }
    const handleDeleteUser = (id) => { 
        fetch(`https://doctor-portal-server-ten-self.vercel.app/users/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                if (data.deletedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Confirm Delete User !',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })
    }
    return (
        <div>
            <h1>Total User: {allUsers.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className="text-lg font-sans">
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allUsers.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td className="text-lg">{user.name}</td>
                                    <td className="text-lg ">{user.email}</td>
                                    <td>
                                        {user.role !== "admin" && <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-primary">Admin</button>}
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(user._id)} className="btn btn-circle btn-outline">
                                            <FaTrash></FaTrash>
                                        </button>
                                    </td>

                                    {/* <td><button className="btn btn-active btn-primary">Continue</button></td> */}

                                </tr>  
                            )
                        }

                        {/* row 2 */}

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AllUser;