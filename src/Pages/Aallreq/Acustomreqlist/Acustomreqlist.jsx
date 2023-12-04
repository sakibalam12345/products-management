import { Helmet } from "react-helmet-async";
import useCustomreq from "../../../Hook/useCustomreq";


const Acustomreqlist = () => {
    const   [customreqassetreq] = useCustomreq();
    console.log(customreqassetreq);
    const handleapprove = (id)=>{
      console.log(id)
    }
    return (
        <div className="max-w-7xl mx-auto">
                <Helmet>
        <title>abc || Custom Req List</title>
      
      </Helmet>
           {/* start */}
           <h3 className="text-center font-bold text-4xl mt-6 mb-6 underline">Custom Requests List Page</h3>
           <div className="grid grid-cols-3 gap-5">
            {customreqassetreq.map(item=> <div className="card w-[400px] h-[450px] bg-base-100 shadow-xl" key={item._id}>
  <figure className="px-10 pt-10">
    <img src={item.assetimg} alt="Shoes" className="rounded-xl h-[150px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Asset Name : {item.assetname}</h2>
    <p className="font-semibold text-base">Price : {item.Price}</p>
    <p className="font-semibold text-base">Asset Type : {item.assettype}</p>
    <p className="font-semibold text-base"> Why you need this : {item.whyneedthis}</p>
    <p className="font-semibold text-base">Additional information : {item.additionaleinfo}</p>
    <div className="card-actions">
      <button onClick={()=>handleapprove(item._id)} className="btn btn-outline">Approve Button</button>
      <button className="btn btn-outline">Reject Button</button>
    </div>
  </div>
</div>)}
    
           </div>
           {/*  */}
        </div>
    );
};

export default Acustomreqlist;