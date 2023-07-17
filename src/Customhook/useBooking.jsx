import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../components/Authentication/AuthProvider";

const useBooking = () => {
    const { user } = useContext(AuthContext)
    const url = `https://doctor-portal-server-ten-self.vercel.app/booking?email=${user?.email}`
    const { data: bookingData = [], isLoading, refetch } = useQuery({
        queryKey: ["booking", user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            return res.json()
        }
    })
    return [bookingData, isLoading, refetch]
};

export default useBooking;