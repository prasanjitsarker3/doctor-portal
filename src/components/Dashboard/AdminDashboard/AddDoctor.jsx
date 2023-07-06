import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddDoctor = () => {
    const imgHosting = import.meta.env.VITE_ImageHosting;
    const navigate =useNavigate()
    const { data: specialties = [] } = useQuery({
        queryKey: ["specialty"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/appointmentSpecialty")
            const data = await res.json()

            return data;
        }

    })
    console.log("specialtie", specialties);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHosting}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    // console.log(imgData.data.url);
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }
                    fetch('http://localhost:5000/doctors', {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(data => {
                            reset()
                            // console.log("Doctor Add Information", data);
                            // if(data.)
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: `${data.name} Doctor Add Successfully`,
                                showConfirmButton: false,
                                timer: 1500
                            })
                            navigate('/dashboard/manageDoctor')
                        })
                }
            })
    }
    return (
        <div>
            <div className="bg-base-200 p-12">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body md:w-1/2 mx-auto ">
                    <h1 className="text-center text-2xl textColor font-sans">Add Doctor In Website</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-serif">Name</span>
                        </label>
                        <input type="text" name="name" {...register("name", { required: true })} placeholder="Type Name" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-serif">Email</span>
                        </label>
                        <input type="text" name="email" {...register("email", { required: true })} placeholder="Enter Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-serif">Specialty</span>
                        </label>
                        <select {...register("specialty")} className="input input-bordered">
                            {
                                specialties.map(specialty => <option key={specialty._id} value={specialty.name}>
                                    {specialty.name}
                                </option>)
                            }
                        </select>
                        <div className="form-control py-2">
                            <label className="label">
                                <span className="label-text text-lg font-serif">Upload Photo</span>
                            </label>
                            <input type="file" name="email" {...register("image", { required: true })} className="file-input file-input-bordered file-input-accent" />
                        </div>
                        {/* <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" /> */}
                    </div>
                    <div className="form-control mt-4">
                        <button type="submit" className="btn bg-teal-600 hover:bg-teal-500 text-white">Add Doctor</button>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default AddDoctor;