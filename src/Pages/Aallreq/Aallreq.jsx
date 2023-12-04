import { Helmet } from "react-helmet-async";
import useReqasset from "../../Hook/useReqasset";
import Useaxiouspublic from "../../Axious/Useaxiouspublic";
import Swal from "sweetalert2";


const Aallreq = () => {
    const [assetreq] = useReqasset();
    const axiouspublic = Useaxiouspublic();
    console.log(assetreq);
    const handleapprove = items =>{
        const appdate = new Date();
        const reqStatus = 'approved';

        console.log(appdate,reqStatus)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it!"
          }).then((result) => {
            if (result.isConfirmed) {
               
                
                const updatereqdata = {
                    reqStatus : reqStatus,
                    appdate : appdate
                }
                axiouspublic.patch(`/assetreq/${items._id}`,updatereqdata)
                .then(res=>{
                    console.log(res.data)
                })
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
            }
          });
    }
    return (
        <div className="max-w-7xl mx-auto">
            {/* start */}
            <Helmet>
        <title>abc || All Request</title>
        
      </Helmet>
            <div>
                <h3 className="font-bold text-4xl text-center mt-5 mb-5">All Requests Page</h3>
                <div className="grid grid-cols-3 gap-5">
                    {assetreq.map(item=> <div className="card w-96 bg-base-100 shadow-xl" key={item._id}>
  <figure className="px-10 pt-10">
    <img src={item.image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Asset Name : {item.assetName}</h2>
    <p className="font-semibold text-base">Asset Type : {item.assetType}</p>
    <p className="font-semibold text-base">Email of requester : {item.useremail}</p>
    <p className="font-semibold text-base">Name of requester : {item.username}</p>
    <p className="font-semibold text-base">Request Date : {item.requesttime}</p>
    <p className="font-semibold text-base">Additional note : {item.Additionalinfo}</p>
    <p className="font-semibold text-base">Status : {item.status}</p>
   
    <div className="card-actions">
      <button onClick={()=>handleapprove(item)} className="btn btn-outline">Approve</button>
      <button className="btn btn-outline">Reject</button>
    </div>
  </div>
</div>)}
                </div>
            </div>
            {/* end */}
        </div>
    );
};

export default Aallreq;