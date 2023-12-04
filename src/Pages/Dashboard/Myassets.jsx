
import useReqasset from "../../Hook/useReqasset";
import {  MdCancel,MdKeyboardReturn, MdLocalPrintshop } from 'react-icons/md';



const Myassets = () => {
  const [assetreq] = useReqasset();
  console.log(assetreq)
    return (
        <div className="max-w-7xl mx-auto">
        <div >
          <div>
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         
        </th>
        <th>Name</th>
        <th>Asset Type</th>
        <th>Request Date</th>
        <th>Approval Date</th>
        <th>Request Status</th>
        <th>Action</th>
        <th>Print</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        assetreq.map(item=> <tr key={item._id}>
          <th>
           
          </th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                
                  {item.assetName}
                
              </div>
            </div>
          </td>
          <td>
           {item.assetType}
          </td>
          <td>{item.requesttime}</td>
          <th>
            
          </th>
          <td>{item.RequestStatus}</td>
          <td>{item.RequestStatus === 'pending' ? <button className="btn"><MdCancel></MdCancel></button> : <button className="btn"><MdKeyboardReturn></MdKeyboardReturn></button> }</td>
          <td>{item.RequestStatus === 'approved' && <button className="btn"><MdLocalPrintshop></MdLocalPrintshop></button>}</td>
        </tr>)
      }

    </tbody>
    {/* foot */}
 
    
  </table>
</div>
          </div>
        </div>
        </div>
    );
};

export default Myassets;