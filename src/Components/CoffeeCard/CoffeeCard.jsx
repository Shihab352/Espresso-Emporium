/* eslint-disable react/prop-types */

import{ FaEye,FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({coffee , control , setControl}) => {
    const {_id,name , photo , chef , taste} = coffee;
   

    const handleDelete = id =>{
        console.log(id)
        
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    
    fetch(`http://localhost:5000/coffees/${id}`, {
method: "DELETE",
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.deletedCount > 0){
Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted successfully.",
      icon: "success"
    
    });
    const remaining = control.filter(cof => cof._id !== id)
    setControl(remaining);
        }
       
    })
  }
});
    }

    return (
        <div>
            <div className="md:flex  items-center hover:bg-transparent p-5 justify-evenly card-side  shadow-xl">
  <figure>
    <img
    className="w-[150px] h-[240px] mx-auto "
      src={photo}
      alt="Coffee" />
  </figure>
  <div className=" space-y-3 items-center p-5 justify-between ">
    <div>
    <h2 className="font-raleway text-xl text-[#5C5B5B]"><span className="text-[#1B1A1A] font-semibold">Name :</span> {name}</h2>
    <h2 className="font-raleway text-xl text-[#5C5B5B]"><span className="text-[#1B1A1A] font-semibold">
        Chef :</span> {chef}</h2>
    <h2 className="font-raleway text-xl text-[#5C5B5B]"><span className="text-[#1B1A1A] font-semibold">Taste :</span> {taste}</h2>
    </div>
    
    <div className=" space-x-3">
      <Link to={`/coffeeDetails/singleCoffee/${_id}`}><button className="text-lg bg-[#a49066] p-2 text-white"><FaEye /></button></Link>
      <Link to={`/updateCoffee/${_id}`}><button className="text-lg  bg-[#2e2d2b] p-2 text-white"><FaEdit /></button></Link>
      <button onClick={()=>handleDelete(_id)} className=" text-lg bg-[#7e2715] p-2 text-white"><MdDelete /></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CoffeeCard;