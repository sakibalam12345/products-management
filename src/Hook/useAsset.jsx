import { useQuery } from "@tanstack/react-query";
import Useaxiouspublic from "../Axious/Useaxiouspublic";


const useAsset = () => {
    const axiouspublic = Useaxiouspublic();
   const {data : asset=[]} = useQuery({
 queryKey : ['asset'],
 queryFn : async ()=>{
    const res = await axiouspublic.get('/asset')
    return res.data

 }
   })
   return [asset]
};

export default useAsset;