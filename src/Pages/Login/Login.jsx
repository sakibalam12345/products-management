import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Authprovider/Authprovider";
import useEmploye from "../../Hook/useEmploye";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const {login,updateuserprofile} = useContext(AuthContext);
  const navigate = useNavigate();
  const [employee] = useEmploye();
    const handlelogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value;
        console.log(email,password)
          login(email,password)
          .then(result=>{
            console.log(result.user)
            updateuserprofile()
            .then(res=>{
              console.log(res?.user)
            })
            .catch()
            const mactheemployee = employee.find(emp=> emp.email === email && emp.role === 'employee')
            if(mactheemployee){
             navigate('/dashboard/emphome')
            }else{
              navigate('/dashboard/adminhome')
            }
            
          })
          .catch()
    }

    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col lg:flex-row-reverse">
<div className="text-center lg:text-left">
  <h1 className="text-5xl font-bold">LogIn!</h1> 
</div>
<div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <form onSubmit={handlelogin}  className="card-body">
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
    <div className="form-control mt-6">
      <button className="btn btn-primary">LogIn</button>
    </div>
    <p className="p-5 text-center">Login with Google <button><FaGoogle></FaGoogle></button></p>
  </form>
</div>
</div>
</div>
    </div>
    );
};

export default Login;