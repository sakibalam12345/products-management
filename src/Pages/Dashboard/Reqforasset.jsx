import Swal from "sweetalert2";
import useAsset from "../../Hook/useAsset";
import { useContext } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";



const Reqforasset = () => {
    const [asset] = useAsset();
    const {user} = useContext(AuthContext);

    const handlemodal = (id)=>{
        console.log(id)
          Swal.fire({
            title: "Additional Notes",
            input: "text",
            inputPlaceholder: "Enter your email address",
            confirmButtonText : 'Request'
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
            const inputtest = result.value;
            const requestdate = new Date();
            console.log(inputtest)
            }
          });

          console.log(user)
         

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
    <p className="font-semibold text-base pb-2">Availability : {singleasset.status}</p>
    <div className="card-actions">
      {singleasset.status === 'Available' ?  <button onClick={()=>handlemodal(singleasset._id)} className="btn btn-outline">Request</button> : <button disabled className="btn btn-primary ">Request</button> }
    </div>
  </div>
</div>)
                
                }
            </div>
        </div>
    );
};

export default Reqforasset;