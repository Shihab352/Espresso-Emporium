/* eslint-disable react/prop-types */


const MyCartDetails = ({coffee}) => {
    const {name , taste, category,photo,details} = coffee;
    return (
        <div>
            <div className="card  image-full w-96 shadow-lg">
  <figure>
    <img
      src={photo}
      alt="Coffee" />
  </figure>
  <div className="card-body">
    <h2 className="text-4xl text-white text-center ">---{name}---</h2>
    <p className="text-white text-lg font-raleway font-semibold">{details}</p>
    <p className="text-lg font-raleway text-white"><span className="font-bold">Taste :</span> {taste}</p>
    <p className="text-lg font-raleway text-white"><span className="font-bold">Cetegory : </span>{category}</p>
    <div className="card-actions justify-end">
    
      <button className="py-1 px-2 text-black text-2xl hover:text-white hover:bg-transparent hover:border-2 hover:border-white bg-[#E3B577] ">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default MyCartDetails;