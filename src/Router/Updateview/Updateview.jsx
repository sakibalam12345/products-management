import { useLoaderData } from "react-router-dom";
import Useaxiouspublic from "../../Axious/Useaxiouspublic";
import Swal from "sweetalert2";


const Updateview = () => {
    const item = useLoaderData();
    const axiouspublic = Useaxiouspublic();
    console.log(item)
    const {Price,additionaleinfo,assetimg,assetname,assettype,requesteddate,status,whyneedthis,_id} = item;
    const handleupdateview = e=>{
        e.preventDefault();
        const form = e.target;
        
        const name = form.assetname.value;
        const price = form.price.value;
        const type = form.type.value;
        const image = form.assetimg.value;
        const whyneed = form.whyneed.value;
        const additioninfo = form.additioninfo.value;
        const reqdate = form.reqdate.value;
        const assetstatus = form.assetstatus.value;
        console.log(image,price,type,name,whyneed,additioninfo,reqdate,assetstatus)
        const updatecustomeview = {
            name : name,
            price : price,
            type : type,
            image : image,
            whyneed : whyneed,
            additioninfo : additioninfo,
            reqdate : reqdate,
            assetstatus : assetstatus
        }

        axiouspublic.patch(`/customreqassetreq/${_id}`,updatecustomeview)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    title: "Good job!",
                    text: "Successfully Updated!",
                    icon: "success"
                  });
            }
        })

    }
    return (
        <div className="max-w-7xl mx-auto">
            <form onSubmit={handleupdateview}>
           <div className="flex justify-around items-center">
           <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Asset name</span>
  </div>
  <input type="text" name="assetname"  defaultValue={assetname} className="input input-bordered w-full max-w-xs" />
</label>
           <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Price</span>
  </div>
  <input type="text" name="price" defaultValue={Price} className="input input-bordered w-full max-w-xs" />
</label>
           </div>
           <div className="flex justify-around items-center">
           <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Type</span>
  </div>
  <input type="text" name="type" defaultValue={assettype} className="input input-bordered w-full max-w-xs" />
</label>
           <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Image</span>
  </div>
  <input type="text" name="assetimg" defaultValue={assetimg} className="input input-bordered w-full max-w-xs" />
</label>
           </div>
           <div className="flex justify-around items-center">
           <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Why needed</span>
  </div>
  <input type="text" name="whyneed" defaultValue={whyneedthis} className="input input-bordered w-full max-w-xs" />
</label>
           <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Additional information</span>
  </div>
  <input type="text" name="additioninfo" defaultValue={additionaleinfo} className="input input-bordered w-full max-w-xs" />
</label>
           </div>
           <div className="flex justify-around items-center">
           <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Request date</span>
  </div>
  <input type="text" name="reqdate" defaultValue={requesteddate} className="input input-bordered w-full max-w-xs" />
</label>
           <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Status</span>
  </div>
  <input type="text" name="assetstatus" defaultValue={status} className="input input-bordered w-full max-w-xs" />
</label>
           </div>
           <div className="flex justify-center items-center gap-5"> 
           <button className="btn btn-wide mt-6">Save</button>
           <button className="btn btn-wide mt-6">Cancel</button>
           </div>
           </form>
        </div>
    );
};

export default Updateview;