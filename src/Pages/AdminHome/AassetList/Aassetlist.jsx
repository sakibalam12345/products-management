import { Helmet } from "react-helmet-async";
import useAdminassetlist from "../../../Hook/useAdminassetlist";


const Aassetlist = () => {
    const [adminreq] = useAdminassetlist();
    console.log(adminreq)
    return (
        <div>
                  <Helmet>
        <title>abc || Asset List</title>
      
      </Helmet>
            <h4 className="font-bold text-center text-4xl mt-8 mb-9">Asset List</h4>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         
        </th>
        <th>Product Name</th>
        <th>Product Type</th>
        <th>Date Added</th>
        <th>Action</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     
      { adminreq.map(item=>   <tr key={item._id}>
        <th>
         
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
            {item.name}

            </div>
            <div>
              {/* {item.} */}
            </div>
          </div>
        </td>
        <td>
         {item.select}
        </td>
        <td>{item.reqdate}</td>
        <th>
          <button className="btn btn-ghost btn-xs">Update</button>
          
        </th>
        <td><button className="btn btn-ghost btn-xs">Delete</button></td>
      </tr>)}
  
 
    </tbody>
 
    
  </table>
</div>
            </div>
        </div>
    );
};

export default Aassetlist;