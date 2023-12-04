import useAsset from "../../Hook/useAsset";
import useReqasset from "../../Hook/useReqasset";


const Adminhome = () => {
   const [assetreq] = useReqasset();
   const [asset] = useAsset();
   console.log(asset)
//    top req item
if (!Array.isArray(assetreq)) {
    return null; 
  }
  
  const occurrences = {};
  assetreq.forEach((item) => {
    const { assetName } = item;
    occurrences[assetName] = (occurrences[assetName] || 0) + 1;
  });
  const sortedAssetreq = [...assetreq].sort((a, b) => occurrences[b.assetName] - occurrences[a.assetName]);
  const firstFourItems = sortedAssetreq.slice(0, 4);

// end
// start
if (!Array.isArray(asset)) {
    return null; 
  }

  
  const itemsWithLessThanTenQuantity = asset.filter((item) => item.quantity  < 10);
  console.log(itemsWithLessThanTenQuantity)

// end
    return (
        <div className="max-w-7xl mx-auto">
            {/* start */}
            <div>
            <h2 className="text-center font-bold text-4xl mt-6 mb-6 underline">Pending requests</h2>
            <div className="grid grid-cols-3 gap-5">
                {assetreq.slice(0,5).map(item=> <div className="card w-[400px] h-[450px] bg-base-100 shadow-xl" key={item._id}>
  <figure className="px-10 pt-10">
    <img src={item.image} alt="Shoes" className="rounded-xl h-[150px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Asset Name : {item.assetName}</h2>
    <p className="font-semibold text-base">Price : {item.assetPrice}</p>
    <p className="font-semibold text-base">Asset Type : {item.assetType}</p>
  </div>
</div>)}
            </div>
            </div>
            {/*  */}
            {/* start */}
            <div>
            <h2 className="text-center font-bold text-4xl mt-10 mb-6 underline">Top most requested items</h2>
            <div className="grid grid-cols-3 gap-5">
           {firstFourItems.map(items=> <div className="card w-[400px] h-[450px] bg-base-100 shadow-xl" key={items._id}>
  <figure className="px-10 pt-10">
    <img src={items.image} alt="Shoes" className="rounded-xl h-[150px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Asset Name : {items.assetName}</h2>
    <p className="font-semibold text-base">Price : {items.assetPrice}</p>
    <p className="font-semibold text-base">Asset Type : {items.assetType}</p>
   
  </div>
</div>)}
            </div>
            </div>
            {/*  */}
            {/* start */}
            <div>
            <h2 className="text-center font-bold text-4xl mt-6 mb-6 underline">Limited Stock items</h2>
            <div className="grid grid-cols-3 gap-5">
           {itemsWithLessThanTenQuantity.map(item=> <div className="card w-[400px] h-[450px] bg-base-100 shadow-xl" key={item._id}>
  <figure className="px-10 pt-10">
    <img src={item.image} alt="Shoes" className="rounded-xl h-[150px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{item.assetName}</h2>
    <p className="font-semibold text-base">Price : {item.assetPrice}</p>
    <p className="font-semibold text-base">Price : {item.assetType}</p>
    <p className="font-semibold text-base">Quantity : {item.quantity}</p>
  
  </div>
</div>)}
            </div>
            </div>
            {/*  */}
        </div>
    );
};

export default Adminhome;