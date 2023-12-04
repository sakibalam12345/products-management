import Swal from "sweetalert2";
import useAsset from "../../Hook/useAsset";
import { useContext } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";
import Useaxiouspublic from "../../Axious/Useaxiouspublic";



const Reqforasset = () => {
    const [asset] = useAsset();
    const {user} = useContext(AuthContext);
    const axiouspublic = Useaxiouspublic();

    const handlemodal = (allasset)=>{
        console.log(allasset)
          Swal.fire({
            title: "Additional Notes",
            input: "text",
            inputPlaceholder: "Enter your email address",
            confirmButtonText : 'Request'
          }).then((result) => {
            if (result.isConfirmed) {
           
            const inputtest = result.value;
            const requestdate = new Date();
            const RequestStatus = 'pending';
            const username = user?.displayName;
            const useremail = user?.email;
            const quantity = allasset.quantity;
            // console.log(inputtest,requestdate,useremail,username,RequestStatus,quantity)
            const reqasset = {
              assetName : allasset.assetName,
              assetType : allasset.assetType,        
                assetPrice : allasset.assetPrice,
                status:allasset.status,
                image: allasset.image,
              Additionalinfo : inputtest,
              requesttime : requestdate,
              Quantity : allasset.quantity,

              username : username ,useremail :useremail,RequestStatus : RequestStatus

            }
            axiouspublic.post('/assetreq',reqasset)
            .then(res=>{
              // console.log(res.data)
              if(res.data.insertedId){
          Swal.fire({
                title: "Requested!",
                text: "Request Successful.",
                icon: "success"
              });
              }
            })

            }
          });

          // console.log(user)
         

    }
    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-3 gap-5">
                {asset.map(singleasset=> <div className="card w-[400px] h-[450px] bg-base-100 shadow-xl" key={singleasset._id}>
  <figure className="px-10 pt-10">
    <img src={singleasset.image} alt="Shoes" className="rounded-xl h-[150px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{singleasset.assetName}</h2>
    <p className="font-semibold text-base pb-2">Asset Type : {singleasset.assetType}</p>
    <p className="font-semibold text-base pb-2">Price : {singleasset.assetPrice}</p>
    <p className="font-semibold text-base pb-2">Availability : {singleasset.status}</p>
    <div className="card-actions">
      {singleasset.status === 'Available' ?  <button onClick={()=>handlemodal(singleasset)} className="btn btn-outline">Request</button> : <button disabled className="btn btn-primary ">Request</button> }
    </div>
  </div>
</div>)
                
                }
            </div>
        </div>
    );
};

export default Reqforasset;