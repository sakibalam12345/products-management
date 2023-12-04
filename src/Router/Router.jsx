import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Errorpage from "../Shared/Errorpage";
import Joinasemp from "../Pages/Joinasemp/Joinasemp";
import Dashboard from "../Layout/Dashboard";
import Emphome from "../Pages/Dashboard/Emphome";
import Myassets from "../Pages/Dashboard/Myassets";
import Reqforasset from "../Pages/Dashboard/Reqforasset";
import Customasset from "../Pages/Dashboard/Customasset";
import Profile from "../Pages/Dashboard/Profile";
import Myteam from "../Pages/Dashboard/Myteam";
import Login from "../Pages/Login/Login";
import Updateprofile from "../Pages/Updateprofile/Updateprofile";
import Updatecustomview from "./Updatecustomview/Updatecustomview";
import Updateview from "./Updateview/Updateview";
import JoinAsadmin from "../Pages/JoinAsadmin/JoinAsadmin";
import Adminhome from "../Pages/AdminHome/Adminhome";
import Aassetlist from "../Pages/AdminHome/AassetList/Aassetlist";
import Aaddanasset from "../Pages/Aaddanasset/Aaddanasset";
import Aallreq from "../Pages/Aallreq/Aallreq";
import Acustomreqlist from "../Pages/Aallreq/Acustomreqlist/Acustomreqlist";
import Aemployelist from "../Pages/Aallreq/Acustomreqlist/Aemployelist/Aemployelist";
import Aaddanemploye from "../Pages/Aallreq/Acustomreqlist/Aemployelist/Aaddanemploye/Aaddanemploye";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement : <Errorpage></Errorpage>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
            path : '/jasemp',
            element : <Joinasemp></Joinasemp>
        },
        {
          path  : '/JoinAsadmin',
          element : <JoinAsadmin></JoinAsadmin>
        },
        {
          path : '/login',
          element : <Login></Login>
        }
      ]
    },
    {
     path : 'dashboard',
     element : <Dashboard></Dashboard>,
     children : [
      // employee
      {
        path : 'emphome',
        element : <Emphome></Emphome>
      },
      {
        path : 'myassets',
        element : <Myassets></Myassets>
      },
      {
        path : 'myteam',
        element : <Myteam></Myteam>
      },
      {
        path : 'reqforasset',
        element : <Reqforasset></Reqforasset>
      },
      {
        path : 'customasset',
        element : <Customasset></Customasset>
      },
      {
        path : 'profile',
        element : <Profile></Profile>
      },
      {
        path : 'updateprofile/:id',
        element : <Updateprofile></Updateprofile>,
        loader : ({params})=> fetch(`https://assignment12-psi.vercel.app/employee/${params.id}`)
      },
      {
        path : 'updatecustomview/:id',
        element : <Updatecustomview></Updatecustomview>,
        loader :({params})=> fetch(`https://assignment12-psi.vercel.app/customreqassetreq/${params.id}`)
      },
      {
        path : 'updateview/:id',
        element : <Updateview></Updateview>,
        loader :({params})=> fetch(`https://assignment12-psi.vercel.app/customreqassetreq/${params.id}`)
      },
      // admin
      {
        path : 'adminhome',
        element : <Adminhome></Adminhome>
      },
      {
        path : 'adminassetlist',
        element : <Aassetlist></Aassetlist>
      },
      {
        path : 'adminaddanasset',
        element : <Aaddanasset></Aaddanasset>
      },
      {
        path : 'adminallreq',
        element : <Aallreq></Aallreq>
      },
     
      {
        path : 'admincustomreqlist',
        element : <Acustomreqlist></Acustomreqlist>
      },
     
      {
        path : 'adminemployelist',
        element : <Aemployelist></Aemployelist>
      },
      {
        path : 'adminaddemploye',
        element : <Aaddanemploye></Aaddanemploye>
      },
     
     ]
    }
    // 
  ]);

  export default router;