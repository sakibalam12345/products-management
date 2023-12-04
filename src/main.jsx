import React from 'react';
import ReactDOM from 'react-dom/client';
import {  HelmetProvider } from 'react-helmet-async';

import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import router from './Router/Router.jsx';
import Authprovider from './Authprovider/Authprovider.jsx';
import {
  QueryClient,
  QueryClientProvider,
 
} from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<HelmetProvider>
<QueryClientProvider client={queryClient}>
<Authprovider>
    <RouterProvider router={router} />
    </Authprovider>
    </QueryClientProvider>

</HelmetProvider>

  
     
  </React.StrictMode>,
)
