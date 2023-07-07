import { useQuery } from "@tanstack/react-query";


const useConsultation = () => {
    const { data: consultations = [], isLoading, refetch } = useQuery({
        queryKey: ["consultation"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/consultation");
            return res.json()
        }
    })
    return [consultations, isLoading, refetch]
};

export default useConsultation;