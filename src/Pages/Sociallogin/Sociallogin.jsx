import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Authprovider/Authprovider";
import { useNavigate } from "react-router-dom";


const Sociallogin = () => {
    const navigate = useNavigate();

    const {googlelogin} = useContext(AuthContext);
    const handlesociallogin = ()=>{
        googlelogin()
        .then(res=>{
            console.log(res.user)
            navigate('/')

        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div>
              <div className="divider"></div> 
             <p className="p-5 text-center ">Login with Google <button onClick={handlesociallogin} className="btn"><FaGoogle></FaGoogle></button></p>
        </div>
    );
};

export default Sociallogin;