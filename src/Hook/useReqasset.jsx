import { useQuery } from "@tanstack/react-query";
import Useaxiouspublic from "../Axious/Useaxiouspublic";


const useReqasset = () => {
    const axiouspublic = Useaxiouspublic();
    const {data : assetreq=[],refetch} = useQuery({
  queryKey : ['assetreq'],
  queryFn : async ()=>{
     const res = await axiouspublic.get('/assetreq')
     return res.data
 
  }
    })
    return [assetreq,refetch]
};

export default useReqasset;