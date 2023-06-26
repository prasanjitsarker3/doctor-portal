import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
    const { googleSignUp } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || "/";
    const handleGoogleSignUp = () => [
        googleSignUp()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
            })
    ]
    return (
        <div className="flex justify-center border py-2">
            <FaGoogle onClick={handleGoogleSignUp} className="w-[50px] h-[30px] cursor-pointer"></FaGoogle>
        </div>
    );
};

export default SocialLogin;