import { useQuery } from "@tanstack/react-query";

const useAllUser = () => {
    const url = 'https://doctor-portal-server-ten-self.vercel.app/users'
    const { data: allUsers = [], isLoading, refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch(url)
            return res.json()
        }
    })
    return [allUsers, isLoading, refetch]
};

export default useAllUser;