import useAsset from "../../Hook/useAsset";



const Myassets = () => {
  const [asset] = useAsset()
    return (
        <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-5">
        {asset.map(item=> <div className="card w-[400px] h-[450px] bg-base-100 shadow-xl" key={item._id}>
  <figure className="px-10 pt-10">
    <img src={item.image} alt="Shoes" className="rounded-xl h-[150px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{item.assetName}</h2>
    <p>{item.assetType}</p>
    <p>{item.status}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>)}
        </div>
        </div>
    );
};

export default Myassets;