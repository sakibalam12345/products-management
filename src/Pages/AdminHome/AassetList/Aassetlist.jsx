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
      {/* row 1 */}
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
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
 
    </tbody>
 
    
  </table>
</div>
            </div>
        </div>
    );
};

export default Aassetlist;