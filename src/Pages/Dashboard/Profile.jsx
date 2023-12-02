import { useContext } from "react";
import useEmploye from "../../Hook/useEmploye";
import { AuthContext } from "../../Authprovider/Authprovider";
import { Link } from "react-router-dom";


const Profile = () => {

    const [employee] = useEmploye();
    const {user} = useContext(AuthContext);
    const showdata = employee.find(emp=> emp?.email === user?.email)
    console.log(user)
    console.log(showdata?._id)
   
    return (
        <div>
            <h3 className="text-center font-extrabold text-4xl mt-20">Profile Page</h3>
        <div className="flex justify-center items-center mt-36">
            
            <div className="card w-96 bg-base-100 shadow-xl ">
  <div className="card-body ">
    <h2 className="card-title text-center">Profile!</h2>
    <p className="font-semibold text-lg">Full Name : {showdata?.fullname || user?.displayName}</p>
    <p className="font-semibold text-lg">Email : {showdata?.email || user?.email }</p>
    <p className="font-semibold text-lg">Date Of Birth{showdata?.dateofbirth || ''}</p>
    <div className="card-actions justify-end">
        <Link to={`/dashboard/updateprofile/${showdata?._id}`}>
        <button  className="btn btn-primary">Update</button>
        </Link>
      
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Profile;