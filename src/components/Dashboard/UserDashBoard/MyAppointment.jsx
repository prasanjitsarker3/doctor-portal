import { FaCcVisa, FaTrash } from "react-icons/fa";
import useBooking from "../../../Customhook/useBooking";
import { Link } from "react-router-dom";
// import MyAppointmentCart from "./MyAppointmentCart";

const MyAppointment = () => {
    const [bookingData, isLoading, refetch] = useBooking();
    // console.log(object);
    if (isLoading) {
        return <span className="flex justify-center loading loading-dots loading-lg"></span>
    }
    return (
        <div>
            <div className="text-center textColor text-2xl py-3">
                <h1>My Appointment... !</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className="text-lg font-sans">
                            <th>#</th>
                            <th>Patient Name</th>
                            <th>Treatment</th>
                            <th>Slot</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookingData.map((book, index) =>
                                <tr key={book._id}>
                                    <th>{index + 1}</th>
                                    <td className="text-lg">{book.patient}</td>
                                    <td className="text-lg ">{book.treatment}</td>
                                    <td className="text-lg">{book.slot}</td>
                                    <td className="text-lg">{book.price}</td>
                                    <td>
                                        <button className="btn btn-circle btn-outline">
                                            <FaTrash></FaTrash>
                                        </button>
                                    </td>
                                    <td>
                                        {
                                            book.price && !book.paid && <Link to={`/dashboard/payment/${book._id}`}>
                                                <button className="btn btn-circle btn-outline">
                                                    <FaCcVisa></FaCcVisa>
                                                </button>
                                            </Link>
                                        }
                                        {
                                            book.price && book.paid && <Link>
                                                <button className="btn btn-circle btn-outline">
                                                    Paid
                                                </button>
                                            </Link>
                                        }
                                    </td>
                                    {/* <td><button className="btn btn-active btn-primary">Continue</button></td> */}

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

export default MyAppointment;