import Swal from "sweetalert2";
import Useaxiouspublic from "../../Axious/Useaxiouspublic";
import { Helmet } from "react-helmet-async";


const Customasset = () => {
    const axiouspublic = Useaxiouspublic();
    const handlecustomreq = e=>{
        e.preventDefault();
        const form = e.target;
        const assetname = form.assetname.value;
        const Price =parseFloat(form.price.value) ;
        const assettype = form.assettype.value;
        const assetimg = form.assetimg.value;
        const whyneedthis = form.whyneedthis.value;
        const additionaleinfo = form.additionaleinfo.value;
        const status = form.status.value;
        const requesteddate = new Date()
        console.log(assetname,Price,assettype,whyneedthis,assetimg,additionaleinfo,status,requesteddate);
        const customreqasset = {
            assetname : assetname,
            Price : Price,
            assettype : assettype,
            assetimg : assetimg,
            whyneedthis : whyneedthis,
            additionaleinfo : additionaleinfo,
            status : status,
            requesteddate : requesteddate
        }
        axiouspublic.post('/customreqassetreq',customreqasset)
        .then(res=>{
            console.log(res.data)
            if(res.data.insertedId){
                form.reset()
                Swal.fire({
                    title: "Good job!",
                    text: "Custom request succesfull!",
                    icon: "success"
                  });
            }
        })
    }

    return (
        <div>
          <Helmet>
        <title>abc || Custom Req</title>
      
      </Helmet>
            <h3 className="text-center font-bold text-4xl mt-6 mb-28  underline ">Custom Request Page</h3>
            <form onSubmit={handlecustomreq}>
            <div className="mb-10 flex justify-evenly">
            <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Asset Name</span>
  </div>
  <input type="text" name="assetname" placeholder="Type here" className="input input-bordered w-[400px] " />
</label>
            <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Price</span>
  </div>
  <input type="text" name="price" placeholder="Type here" className="input input-bordered w-[400px] " />
</label>
            </div>
            <div className="mb-10 flex justify-evenly items-center">
            <select name="assettype" className="select select-bordered w-[400px] mt-6 max-w-xs">
  <option disabled selected>Asset Type</option>
  <option>Returnable</option>
  <option>Non Returnable</option>
</select>
            <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Asset Image</span>
  </div>
  <input type="text" name="assetimg" placeholder="Type here" className="input p-2 input-bordered w-[400px] " />
</label>
            </div>
            <div className="mb-10 mt-3 flex justify-evenly items-center">
            <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Why you need this</span>
  </div>
  <input type="text" name="whyneedthis" placeholder="Type here" className="input input-bordered w-[400px] " />
</label>
            <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Additional information</span>
  </div>
  <input type="text" name="additionaleinfo" placeholder="Type here" className="input input-bordered w-[400px] " />
</label>
<select name="status" className="select select-bordered mt-8 w-full max-w-xs">
  <option disabled selected>Status</option>
  <option>Available</option>
  <option>Out of stock</option>
</select>
            </div>
            <div className="flex justify-center items-center mt-5"><button className="btn btn-wide">Request</button></div>
            
            </form>
        </div>
    );
};

export default Customasset;