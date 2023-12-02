import { useLoaderData } from "react-router-dom";
import Useaxiouspublic from "../../Axious/Useaxiouspublic";


const Updateprofile = () => {
    const item = useLoaderData();
    const axiouspublic = Useaxiouspublic();
  
    const handleupdate =(e)=>{
        e.preventDefault();

        const form = e.target;
        const fullname = form.fullname.value;
        const dateofbirth = form.dateofbirth.value;
        const updateprofile = {
            fullname,dateofbirth
        }
      axiouspublic.patch(`/employee/${item?._id}`,updateprofile)
      .then(res=>{
        console.log(res.data)
      })
      .catch()
        console.log(fullname) 

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Update now!</h1>
     
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleupdate} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input type="text" placeholder="" name="fullname" defaultValue={item?.fullname} className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" defaultValue={item?.email} placeholder="email" className="input input-bordered" readOnly />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date of Birth</span>
          </label>
          <input type="date" placeholder="" name="dateofbirth" defaultValue={item?.dateofbirth} className="input input-bordered"  />
         
        </div>
        <div className="form-control mt-6">
          <button  className="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Updateprofile;