
import { Helmet } from "react-helmet-async";
import useReqasset from "../../Hook/useReqasset";
import {  MdCancel,MdKeyboardReturn, MdLocalPrintshop } from 'react-icons/md';
import Swal from "sweetalert2";
import Useaxiouspublic from "../../Axious/Useaxiouspublic";



const Myassets = () => {
  const [assetreq,refetch] = useReqasset();
  const axiouspublic = Useaxiouspublic();
  console.log(assetreq);
  const handledelete = (id)=>{
    console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
   axiouspublic.delete(`/assetreq/${id}`)
   .then(res=>{
    console.log(res.data)
    if(res.data.deletedCount > 0){
      refetch();
      Swal.fire({
        title: "Deleted!",
        text: "Your Asset has been deleted.",
        icon: "success"
      });
    }
   })
      
      }
    });

  }
    return (
        <div className="max-w-7xl mx-auto">
               <Helmet>
        <title>abc || My Asset</title>
        
      </Helmet>
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
          <td>{item.RequestStatus === 'pending' ? <button onClick={()=>handledelete(item._id)} className="btn"><MdCancel></MdCancel></button> : <button className="btn"><MdKeyboardReturn></MdKeyboardReturn></button> }</td>
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