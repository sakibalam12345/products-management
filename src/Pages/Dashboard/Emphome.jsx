import useReqasset from "../../Hook/useReqasset";



const Emphome = () => {
   const [assetreq] = useReqasset();
   console.log(assetreq)
   const sortedRequests = [...assetreq].sort((a, b) => {
    return new Date(b.requesttime) - new Date(a.requesttime);
  });
  console.log(sortedRequests)
    return (
        <div className="max-w-7xl mx-auto">
           <h2 className="text-center font-bold text-4xl mt-6 mb-6 underline">My Custom Requests</h2> 
           <div>
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
           </div>
           {/* start */}
           <div>
            <h2 className="text-center font-bold text-4xl mt-6 mb-6 underline">My pending requests</h2>
           </div>
           {/* end */}
           {/* start */}
           <div >
            <h2 className="text-center font-bold text-4xl mt-6 mb-6 underline">My monthly requests</h2>
            <div className="grid grid-cols-3 gap-5">
                {sortedRequests.map(req=>  <div className="card  bg-base-100 w-[400px] h-[450px] shadow-xl" key={req._id}>
  <figure className="px-10 pt-10">
    <img src={req.image} alt="Shoes" className="rounded-xl h-[150px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{req.assetName}</h2>
    <p className="font-semibold text-lg">Type : {req.assetType}</p>
    <p className="font-semibold text-lg">Request Date : {req.requesttime}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>)}
            </div>
           </div>
           {/* end */}
           {/* start */}
           <div>
            <h2 className="text-center font-bold text-4xl mt-6 mb-6 underline">Frequently requested items</h2>
           </div>
           {/* end */}
        </div>
    );
};

export default Emphome;