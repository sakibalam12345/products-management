import useEmploye from "../../Hook/useEmploye";


const Myteam = () => {
    const [employee] = useEmploye();
    console.log(employee)
    const currentMonth = new Date().getMonth() + 1;

    const employeesWithBirthdays = employee
      .filter(emp => new Date(emp.dateofbirth).getMonth() + 1 === currentMonth)
      .map(emp => {
        const birthDay = new Date(emp.dateofbirth).getDate();
        const remainingDays = Math.round(
          (new Date(new Date().getFullYear(), currentMonth - 1, birthDay).getTime() - new Date().getTime()) / (24 * 60 * 60 * 1000)
        );
        return { ...emp, remainingDays };
      });

  console.log(employeesWithBirthdays);
    return (
        <div>
            {/* start */}
            <div className="mb-30">
            <h3 className="text-center font-bold text-4xl mt-6  underline ">Upcoming events Section</h3> 
            <div>
            <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        </th>
        <th>Image</th>
        <th>Name</th>
        
        <th>Date of Birth</th>
        <th>Remaining days</th>
      
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      {employeesWithBirthdays.map(empt=> <tr key={empt._id}>
        <th>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={empt?.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          {empt?.fullname}
        </td>
        
        <td>{empt?.dateofbirth}</td>
        <td>{empt?.remainingDays}</td>
        
        <td>{empt?.role}</td>
       
      </tr> )}
 
    </tbody>

  </table>
             </div> 
            </div>
            {/* end */}
          {/* start */}
          <div>
          <h3 className="text-center font-bold text-4xl mt-6 mb-6 underline">Team Member List Section</h3>
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      {employee.map(emp=> <tr key={emp._id}>
        <th>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={emp?.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
           
          </div>
        </td>
        <td>
          {emp?.fullname}
        </td>
        <td>{emp?.role}</td>
       
      </tr> )}
 
    </tbody>

  </table>
</div>
          </div>
          {/* end */}
        </div>
    );
};

export default Myteam;