import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import MyCartDetails from "../Components/MyCartDetails";


const MyCart = () => {
    const {user} = useContext(AuthContext);
    const [item , setItem] = useState([])
console.log(user);
    useEffect(()=>{
        fetch(`http://localhost:5000/coffees/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setItem(data)
        })
    },[user])

    return (
        <div className="">
      <div className="bg-[#F4F3F0] mt-10 p-20 w-1/2 mx-auto">
        <div className="space-y-4">
<h1 className="text-5xl text-center text-[#374151]">---My Cart---</h1>
<p className="text-center text-[#1B1A1AB3] text-lg font-raleway font-semibold">{user.email}</p>
        </div>
      <div className="grid gap-5 grid-flow-row grid-rows-1 ml-14 mt-10">
        {
            item.map(coffee => <MyCartDetails key={coffee._Id} coffee={coffee}></MyCartDetails>)
        }
      </div>
      </div>
        </div>
    );
};

export default MyCart;