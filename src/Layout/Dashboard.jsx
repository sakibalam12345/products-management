import { useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authprovider/Authprovider";
import useEmploye from "../Hook/useEmploye";




const Dashboard = () => {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    const [employee] = useEmploye();
    const mactheemployee = employee.find(emp=> emp.email === user?.email && emp.role === 'employee')
    // console.log(user)
    
    const navlinks = <>
    {
      mactheemployee ? <> <li><NavLink to='/dashboard/emphome'>Home</NavLink></li>
      <li><NavLink to='/dashboard/myassets'>My Assets</NavLink></li>
      <li><NavLink to='/dashboard/myteam'>My Team</NavLink></li>
      <li><NavLink to='/dashboard/reqforasset'>Request for an Asset</NavLink></li>
      <li><NavLink to='/dashboard/customasset'>Make a Custom Request</NavLink></li>
      <li><NavLink to='/dashboard/profile'>Profile</NavLink></li> </> :
       <> 
       <li><NavLink to='/dashboard/adminhome'>Home</NavLink></li>
      <li><NavLink to='/dashboard/adminassetlist'> Asset List</NavLink></li>
      <li><NavLink to='/dashboard/adminaddanasset'>Add an Asset</NavLink></li>
      <li><NavLink to='/dashboard/adminallreq'>All Requests</NavLink></li>
      <li><NavLink to='/dashboard/admincustomreqlist'>Custom Requests List</NavLink></li>
      <li><NavLink to='/dashboard/adminemployelist'>My Employee List</NavLink></li>
      <li><NavLink to='/dashboard/adminaddemploye'>Add an Employee</NavLink></li>
      <li><NavLink to='/dashboard/profile'>Profile</NavLink></li>
       </>
    }
    
   </>
   const {logout} = useContext(AuthContext);
   const handlelogout = ()=>{
       logout()
       .then(res=>{
        // console.log(res?.user)
        navigate('/')
       })
   }
    return (
        <div>
            <div>
            <div>
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul className="menu menu-sm dropdown-content mt-3 z-[1] gap-2 p-2 shadow bg-base-100 rounded-box w-52">
       {navlinks}
      </ul>
    </div>
    <img className="h-[75px]" src="https://i.ibb.co/WGKzRGt/American-Broadcasting-Company-Logo-svg.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-2 px-1">
     {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
    
   {user?.email ? <>
    <div className="avatar">
    <div className="w-12 h-12 rounded-full">
      <img src={user?.photoURL} />
    </div>
  </div>
   <h2 className="mr-4 ml-2">{user?.displayName}</h2>
   <button onClick={handlelogout}>LogOut</button></>  : <button >LogIn</button>  }
  </div>
</div> 
        </div>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Dashboard;