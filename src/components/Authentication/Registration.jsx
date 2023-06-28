import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import SocialLogin from "./SociaLogin/SocialLogin"; 

const Registration = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('')
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || "/";
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name)
                    .then(() => {
                        setError('')
                        setSuccess("Successfully Login User !")
                        reset();
                        navigate(from, { replace: true })
                    })


            })
            .catch(error => {
                setSuccess('')
                setError(error.message)
                console.log(error.message);
            })
    };
    return (
        <div className="bg-base-200 p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body md:w-1/3 mx-auto border shadow-lg">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-serif">Name</span>
                    </label>
                    <input type="text" name="name" {...register("name", { required: true })} placeholder="Type Name" className="input input-bordered" />
                    {errors.name && <span className=" text-red-500">Name is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-serif">Email</span>
                    </label>
                    <input type="text" name="email" {...register("email", { required: true })} placeholder="Enter Email" className="input input-bordered" />
                    {errors.email && <span className=" text-red-500">Email is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-serif">Password</span>
                    </label>
                    <input type="password" name="password" {...register("password", {
                        pattern: /(?=.*[0-9].*[0-9])/,
                        required: true, minLength: 6, maxLength: 20
                    })} placeholder="Enter Password" className="input input-bordered" />
                    {errors.password && <span className=" text-red-500">Password Length 6 to 20 & One Uppercase</span>}
                    {errors.password?.type === 'pattern' && <span className=" text-red-500">Ensure string has two digits</span>}
                </div>
                <div className="form-control mt-4">
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </div>
                <p className='text-center'>Already have an account ?<Link to='/login' className=' text-blue-500 underline text-center'>Login ..!</Link></p>
                <p className="text-center text-green-800">{success}</p>
                <p className="text-center text-red-700">{error}</p>
                <div className="py-3 text-center">
                    <SocialLogin></SocialLogin>
                </div>
            </form>
        </div>
    );
};

export default Registration;