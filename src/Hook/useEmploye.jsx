import { useQuery } from "@tanstack/react-query";
import Useaxiouspublic from "../Axious/Useaxiouspublic";


const useEmploye = () => {
    const axiouspublic = Useaxiouspublic();
   const {data : employee=[],refetch } = useQuery({
     queryKey : ['employee'],
     queryFn : async ()=>{
       const res = await axiouspublic.get('/employee')
       return res.data
     }
   })
   return [employee,refetch]
};

export default useEmploye;