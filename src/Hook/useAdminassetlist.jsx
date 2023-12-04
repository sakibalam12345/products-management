import { useQuery } from "@tanstack/react-query";
import Useaxiouspublic from "../Axious/Useaxiouspublic";


const useAdminassetlist = () => {
    const axiouspublic = Useaxiouspublic();
   const {data : adminreq=[]} = useQuery({
 queryKey : ['adminreq'],
 queryFn : async ()=>{
    const res = await axiouspublic.get('/adminreq')
    return res.data

 }
   })
   return [adminreq]
};

export default useAdminassetlist;