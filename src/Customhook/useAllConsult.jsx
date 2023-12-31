import { useQuery } from "@tanstack/react-query";


const useAllConsult = () => {
    const url = 'https://doctor-portal-server-ten-self.vercel.app/consultAllBooking'
    const { data: consultBookingData = [], isLoading, refetch } = useQuery({
        queryKey: ["consultAllBooking"],
        queryFn: async () => {
            const res = await fetch(url)
            return res.json()
        }
    })
    return [consultBookingData, isLoading, refetch]
};

export default useAllConsult;