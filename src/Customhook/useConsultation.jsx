import { useQuery } from "@tanstack/react-query";


const useConsultation = () => {
    const { data: consultations = [], isLoading, refetch } = useQuery({
        queryKey: ["consultation"],
        queryFn: async () => {
            const res = await fetch("https://doctor-portal-server-ten-self.vercel.app/consultation");
            return res.json()
        }
    })
    return [consultations, isLoading, refetch]
};

export default useConsultation;