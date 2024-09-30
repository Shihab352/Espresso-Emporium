import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import background from '../assets/more/11.png'

const CoffeeDetails = () => {
     
    const id = useParams();
    console.log(id.id);
const [coffee , setCoffee] = useState();
console.log(coffee);
useEffect(()=>{
    fetch(`http://localhost:5000/coffees/singleCoffee/${id.id}`)
    .then(res=>res.json())
    .then(data => {
       
        setCoffee(data)
        console.log(data);
       
    })
},[id.id])


    return (
        <div className="my-10">
            <h1 className="text-5xl text-center">Coffee Details  </h1>
<div className=" bg-[#F4F3F0] mx-auto w-2/3 bg-cover  flex items-center p-9 shadow-xl" style={{ backgroundImage: `url(${background})` }}>
  {/* <figure className="px-10 pt-10">
    <img
      src={coffee.photo}
      alt="Coffee"
      className="rounded-xl" />
  </figure> */}
  <div className="space-y-3">
    <h2 className="text-4xl text-[#1B1A1A]"></h2>
    <p className="text-lg font-raleway text-[#5C5B5B]"><span className="text-[#1B1A1A] font-semibold">Chef :</span>  </p>
    <p className="text-lg font-raleway text-[#5C5B5B]"><span className="text-[#1B1A1A] font-semibold">Category :</span>  </p>
    <p className="text-lg font-raleway text-[#5C5B5B]"><span className="text-[#1B1A1A] font-semibold">Taste :</span>  </p>
    <p className="text-lg font-raleway text-[#5C5B5B]"><span className="text-[#1B1A1A] font-semibold">Supplier : </span> </p>
    <p className="text-lg font-raleway text-[#5C5B5B]"><span className="text-[#1B1A1A] font-semibold">Details : </span></p>
 
   
  </div>
</div>

        </div>
    );
}

export default CoffeeDetails;