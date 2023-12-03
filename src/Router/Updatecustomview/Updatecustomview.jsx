import { Link, useLoaderData } from "react-router-dom";


const Updatecustomview = () => {
    const item = useLoaderData();
    const {Price,additionaleinfo,assetimg,assetname,assettype,requesteddate,status,whyneedthis,_id} = item;
    console.log(item)
    return (
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center mt-16">
          <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={assetimg} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{assetname}</h2>
    <p> Price : {Price}</p>
    <p>Type : {assettype}</p>
    <p>Why needed : {whyneedthis}</p>
    <p>Additional information : {additionaleinfo}</p>
    <p>Request Date : {requesteddate}</p>
    <p>Status : {status}</p>
    <div className="card-actions">
        <Link to={`/dashboard/updateview/${_id}`}>
        <button className="btn btn-outline">Update</button>
        </Link>
      
      <button className="btn btn-outline">Close</button>
    </div>
  </div>
</div>
          </div>
        </div>
    );
};

export default Updatecustomview;