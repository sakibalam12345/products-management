import Useaxiouspublic from "../../Axious/Useaxiouspublic";


const Aaddanasset = () => {
  const axiouspublic = Useaxiouspublic();
  const handleadd = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.productname.value;
    const select = form.selecttype.value;
     const quantity = form.productquantity.value;
     const reqdate = new Date();
     console.log(form,name,select,quantity,reqdate)
     const adminreqinfo = {
      name : name,
      select : select,
      quantity : quantity,
      reqdate : reqdate
     }
     axiouspublic.post('/adminreq',adminreqinfo)
     .then(res=>{
      console.log(res.data)
     })
  }
    return (
        <div className=" ">
            {/* start */}
            <form onSubmit={handleadd}>
            <div className="flex justify-center items-center gap-5">
              
            <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Product Name</span>
  </div>
  <input type="text" name="productname" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
 
</label>
<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Product Type</span>
  </div>
  <select name="selecttype" className="select select-bordered">
    <option disabled selected>Pick one</option>
    <option>Returnable</option>
    <option>Non Returnable</option>

  </select>

</label>
</div>
<div className="flex justify-center items-center">

<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Product Quantity</span>
  </div>
  <input type="number" name="productquantity" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
 
</label>

</div>
<div className="flex justify-center items-center">
<button className="btn btn-wide mt-5">Add</button>
</div>

</form>

         
            {/* end */}
        </div>
    );
};

export default Aaddanasset;