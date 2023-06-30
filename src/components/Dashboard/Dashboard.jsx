import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="text-center py-5 font-mono text-2xl ">
                <h1>Name: {user?.displayName}</h1>
                <h1>Email: {user?.email}</h1>
            </div>

        </div>
    );
};

export default Dashboard;