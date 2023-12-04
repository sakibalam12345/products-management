import Swal from "sweetalert2";
import useEmploye from "../../../../Hook/useEmploye";
import Useaxiouspublic from "../../../../Axious/Useaxiouspublic";
import { Helmet } from "react-helmet-async";


const Aemployelist = () => {
    const [employee,refetch] = useEmploye();
    const axiouspublic = Useaxiouspublic();
    console.log(employee);
    const handledelete =(id)=>{
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Remove!"
          }).then((result) => {
            if (result.isConfirmed) {
           axiouspublic.delete(`/employee/${id}`)
           .then(res=>{
            console.log(res.data.deletedCount > 0)
            refetch();
            Swal.fire({
                title: "Deleted!",
                text: "successfully removed.",
                icon: "success"
              });
           })
            
            }
          });
    }
    return (
        <div>
                <Helmet>
        <title>abc || My Employe</title>
      
      </Helmet>
        {/* start */}
        <div>

        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
        
        <tr>
        <th>
          <label>
           #
          </label>
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Member Type</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {employee.map((person,index)=> <tr key={person._id}>
        <th>
          <label>
            {index + 1}
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={person.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
          </div>
        </td>
        <td>
      {person.fullname}
        </td>
        <td>{person.role}</td>
        <th>
          <button onClick={()=>handledelete(person._id)} className="btn btn-ghost btn-xs">Remove</button>
        </th>
      </tr>)}
 
    </tbody>
   
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
   
    
  </table>
</div>
        </div>
        {/* end */}
        </div>
    );
};

export default Aemployelist;