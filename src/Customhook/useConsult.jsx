import { useContext } from "react";
import { AuthContext } from "../components/Authentication/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useConsult = () => {
    const { user } = useContext(AuthContext)
    const url = `https://doctor-portal-server-ten-self.vercel.app/consult?email=${user?.email}`
    const { data: consultData = [], isLoading, refetch } = useQuery({
        queryKey: ["consult", user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            return res.json()
        }
    })
    console.log(consultData);
    return [consultData, isLoading, refetch]
};

export default useConsult;