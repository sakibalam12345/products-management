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
      }
     ]
    }
  ]);

  export default router;