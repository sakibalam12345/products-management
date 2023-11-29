import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Errorpage from "../Shared/Errorpage";
import Joinasemp from "../Pages/Joinasemp/Joinasemp";



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
  ]);

  export default router;