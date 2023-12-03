import { useQuery } from "@tanstack/react-query";
import Useaxiouspublic from "../Axious/Useaxiouspublic";


const useCustomreq = () => {
    const axiouspublic = Useaxiouspublic();
    const {data : customreqassetreq=[] } = useQuery({
      queryKey : ['customreqassetreq'],
      queryFn : async ()=>{
        const res = await axiouspublic.get('/customreqassetreq')
        return res.data
      }
    })
    return [customreqassetreq]
 };

export default useCustomreq;