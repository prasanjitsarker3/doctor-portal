import { useEffect, useState } from "react";

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false); 
    const [isLoading, setLoading]=useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/users/admin/${email}`);
                const data = await response.json();
                setIsAdmin(data.isAdmin);
                setLoading(false);
            } catch (error) {
                console.log("Error fetching admin status:", error);
            }
        };

        if (email) {
            fetchData();
        }
    }, [email]);

    return [isAdmin,isLoading];


};

export default useAdmin;