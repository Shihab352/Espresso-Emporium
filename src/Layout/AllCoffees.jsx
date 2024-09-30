import { Link } from "react-router-dom";
import { BsFillCupHotFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import CoffeeCard from "../Components/CoffeeCard/CoffeeCard";
import background from "../assets/more/1.png"

const AllCoffees = () => {
    const [coffees , setCoffees] = useState([]);
useEffect(()=>{
    fetch("http://localhost:5000/coffees")
    .then(res => res.json())
    .then(data => {
       setCoffees(data);
    })
},[])

    return (
        <div className="my-10 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(${background})` }}>
        <div className="space-y-4">
            <p className ="font-raleway text-xl text-center text-[#1B1A1A]">---Sip & Savor---</p>
            <h1 className="text-6xl text-[#331A15] text-center"> Our Popular Products </h1>
           <Link to={'/addCoffees'}>
           <button className="py-1 px-2 mt-4 mx-auto flex gap-2 text-black text-2xl hover:text-[#331A15] hover:bg-transparent hover:border-2 hover:border-[#331A15] bg-[#E3B577]">Add Coffee <BsFillCupHotFill /></button>
           </Link>
           <div className="w-10/12 mx-auto grid md:grid-cols-2 gap-5">
{
    coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
}
           </div>
        </div>
        <div>

        </div>
    </div>
    );
};

export default AllCoffees;