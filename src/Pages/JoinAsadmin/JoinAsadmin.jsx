import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import Useaxiouspublic from "../../Axious/Useaxiouspublic";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";
import Sociallogin from "../Sociallogin/Sociallogin";
import { Helmet } from "react-helmet-async";


const JoinAsadmin = () => {

    const {createnewuser,updateuserprofile} = useContext(AuthContext);
    const axiouspublic = Useaxiouspublic();
    const navigate = useNavigate();
  
      const handleadminlogin = async(e) =>{
          e.preventDefault()
          const form = e.target;
          const fullname = form.name.value;
          const companyname = form.companyname.value;
          const companylogo = form.companylogo.value;
          const selectpakage = form.selectpakage.value;
          const email = form.email.value;
          const Password = form.password.value;
          const dateofbirth = form.date.value;
          const image = form.image.value;
         
        //   console.log(fullname,email,Password,dateofbirth,companyname,companylogo,selectpakage);
  
     const res = await createnewuser(email,Password)
     console.log(res.user)
     updateuserprofile(fullname,image)
     .then(()=>{
     })
     .catch(error=>{
      console.log(error)
     })
          
            const admininfo = {
              fullname,email,image,dateofbirth, role : 'admin',companyname,companylogo,selectpakage
            }
  
            const result = await axiouspublic.post('/employee',admininfo)
            console.log(result.data)
            if(result.data.insertedId){
              Swal.fire({
                title: "Good job!",
                text: "You Logged in As Admin!",
                icon: "success"
              });
              navigate('/dashboard/emphome')
            }
            form.reset()
       
      }
    return (
        <div>
               <Helmet>
        <title>abc || Join As Admin</title>
        
      </Helmet>
        <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col lg:flex-row-reverse">
<div className="text-center lg:text-left">
  <h1 className="text-5xl font-bold">Register now as Admin!</h1> 
</div>
<div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <form onSubmit={handleadminlogin}  className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Full Name</span>
      </label>
      <input type="text" name="name" placeholder="Type Full Name" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Company Name</span>
      </label>
      <input type="text" name="companyname" placeholder="Type Company Name" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Company Logo</span>
      </label>
      <input type="text" name="companylogo" placeholder=" Company Logo" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Image</span>
      </label>
      <input type="text" name="image" placeholder="image" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name="email" placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="Password" name="password" placeholder="Password" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Date Of Birth</span>
      </label>
      <input type="date" name="date" className="input input-bordered" required />
    </div>
    <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Select a package</span>
  </div>
  <select name="selectpakage" className="select select-bordered">
    <option disabled selected>Select a package</option>
    <option>5 Members for $5</option>
    <option>10 Members for $8</option>
    <option>20 Members for $15</option>
  </select>
</label>
    <div className="form-control mt-6">
      <button className="btn btn-primary">Join as Admin</button>
    </div>
   <Sociallogin></Sociallogin>
  </form>
</div>
</div>
</div>
    </div>
    );
};

export default JoinAsadmin;