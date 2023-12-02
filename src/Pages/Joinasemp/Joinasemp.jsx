
import { FaGoogle } from 'react-icons/fa';
import  { AuthContext } from '../../Authprovider/Authprovider';
import { useContext } from 'react';
import Useaxiouspublic from '../../Axious/Useaxiouspublic';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Container } from 'postcss';

const Joinasemp = () => {

  const {createnewuser,updateuserprofile} = useContext(AuthContext);
  const axiouspublic = Useaxiouspublic();
  const navigate = useNavigate();

    const handleemplogin = async(e) =>{
        e.preventDefault()
        const form = e.target;
        const fullname = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const dateofbirth = form.date.value;
        const image = form.image.value;
        console.log(fullname,email,password,dateofbirth,image);

   const res = await createnewuser(email,password)
   console.log(res.user)
   updateuserprofile(fullname,image)
   .then(()=>{

   })
   .catch(error=>{
    console.log(error)
   })
        
          const emplyinfo = {
            fullname,email,image,dateofbirth, role : 'employee'
          }

          const result = await axiouspublic.post('/employee',emplyinfo)
          console.log(result.data)
          if(result.data.insertedId){
            Swal.fire({
              title: "Good job!",
              text: "You Logged in As Employee!",
              icon: "success"
            });
            navigate('/dashboard/emphome')
          }
          form.reset()
     
    }
   
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now as Employee!</h1> 
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleemplogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input type="text" name="name" placeholder="Type Full Name" className="input input-bordered" required />
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image Url</span>
          </label>
          <input type="text" name='image' placeholder="Image Url" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Join as Employee</button>
        </div>
        <p className="p-5 text-center">Login with Google <button><FaGoogle></FaGoogle></button></p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Joinasemp;