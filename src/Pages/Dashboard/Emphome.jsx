import { Link } from "react-router-dom";
import useCustomreq from "../../Hook/useCustomreq";
import useReqasset from "../../Hook/useReqasset";



const Emphome = () => {
   const [assetreq] = useReqasset();
   const [customreqassetreq] = useCustomreq();
   console.log(customreqassetreq)
   const sortedRequests = [...assetreq].sort((a, b) => {
    return new Date(b.requesttime) - new Date(a.requesttime);
  });
//   console.log(sortedRequests);

    return (
        <div className="max-w-7xl mx-auto">
            {/* start */}
            {customreqassetreq.length === 0 ? 'hidden' : <>
            <div >   
                
                <h2 className="text-center font-bold text-4xl mt-6 mb-6 underline">My Custom Requests</h2>
                <div className="grid grid-cols-3 gap-6">
                {customreqassetreq.map(cusreq=><div className="card w-[400px] h-[450px] bg-base-100 shadow-xl" key={cusreq._id}>
       <figure className="px-10 pt-10">
         <img src={cusreq?.assetimg} alt="Shoes" className="rounded-xl h-[150px]" />
       </figure>
       <div className="card-body items-center text-center">
         <h2 className="card-title">{cusreq?.assetname}</h2>
         <p className="font-semibold text-lg">Price : {cusreq?.Price}</p>
         <p className="font-semibold text-lg">Type : {cusreq?.assettype}</p>
         <p className="font-semibold text-lg">Status : {cusreq?.status}</p>
         <div className="card-actions">
             <Link to={`/dashboard/updatecustomview/${cusreq?._id}`}>
             <button  className="btn btn-outline">View</button>
             </Link>
           
         </div>
       </div>
     </div>)}
                 </div> 
      
             
                </div>
            </>}
 
           {/* end */}
           {/* start */}
           <div>
            <h2 className="text-center font-bold text-4xl mt-6 mb-6 underline">My pending requests</h2>
            <div>
            <div className="grid grid-cols-3 gap-5">
                {sortedRequests.map(req=>  <div className="card  bg-base-100 w-[400px] h-[450px] shadow-xl" key={req._id}>
  <figure className="px-10 pt-10">
    <img src={req.image} alt="Shoes" className="rounded-xl h-[150px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{req.assetName}</h2>
    <p className="font-semibold text-lg">Type : {req.assetType}</p>
    <p className="font-semibold text-lg">Price : {req.assetPrice}</p>
    <p className="font-semibold text-lg">Request Date : {req.requesttime}</p>
    <p></p>
    <p>Pending</p>
  </div>
</div>)}
            </div>
            </div>
           </div>
           {/* end */}
           {/* start */}
           <div >
            <h2 className="text-center font-bold text-4xl mt-6 mb-6 underline">My monthly requests</h2>
            <div className="grid grid-cols-3 gap-5">
                {sortedRequests.map(req=>  <div className="card  bg-base-100 w-[400px] h-[450px] shadow-xl" key={req._id}>
  <figure className="px-10 pt-10">
    <img src={req.image} alt="Shoes" className="rounded-xl h-[150px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{req.assetName}</h2>
    <p className="font-semibold text-lg">Type : {req.assetType}</p>
    <p className="font-semibold text-lg">Request Date : {req.requesttime}</p>
    
  </div>
</div>)}
            </div>
           </div>
           {/* end */}
           {/* start */}
           <div>
            <h2 className="text-center font-bold text-4xl mt-6 mb-6 underline">Frequently requested items</h2>
           </div>
           {/* end */}
        </div>
    );
};

export default Emphome;