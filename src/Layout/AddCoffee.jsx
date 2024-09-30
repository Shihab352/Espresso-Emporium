
import { useContext } from "react";
import background from "../assets/more/11.png";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const AddCoffee = () => {
const {user} = useContext(AuthContext);
    
const handleAddCoffee = event => {
    event.preventDefault()
    const form = event.target ;
    const email = user.email;
    const name = form.name.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const chef = form.chef.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {name ,email, supplier, category, chef, taste , details, photo};
    console.log(newCoffee);
   fetch("http://localhost:5000/coffees", {
method: "POST",
headers : {
    "content-type" : "application/json"
},
body : JSON.stringify(newCoffee)


   })
   .then(res => res.json())
   .then(data => {
  if(data.insertedId){
    Swal.fire({
        title: 'Success!',
        text: 'This Coffee Added Successfully',
        icon: 'success',
        confirmButtonText: 'Close'
      })
  }
   })

}

    return (
        <div className="bg-cover md:p-20 bg-center" style={{background : `url(${background})`}}>
            <div className=" bg-[#F4F3F0] md:w-3/4 mx-auto p-10">
                <div className="space-y-5 my-5">
                    <h1 className="text-5xl text-center text-[#374151]">Add New Coffee</h1>
                    <p className="text-center text-[#1B1A1AB3] text-lg">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br />
                        its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br />
                        to using Content here.</p>
                </div>
                <form onSubmit={handleAddCoffee}>
                   <div className="grid md:grid-cols-2 gap-5">
                   <div>
                        <label className="form-control w-full font-raleway text-[#1B1A1ACC] ">
                            <span className="label text-lg font-semibold text-[#1B1A1ACC]">Name</span>
                            <input type="text" name="name" placeholder="Enter Coffee Name" className="input input-bordered  bg-white w-full " />
                        </label>

                        <label className="form-control font-raleway  w-full text-[#1B1A1ACC] ">
                            <span className="label text-lg font-semibold text-[#1B1A1ACC]">Supplier</span>
                            <input type="text" name="supplier" placeholder="Enter Coffee Supplier" className="input input-bordered  bg-white w-full " />
                        </label>

                        <label className="form-control font-raleway w-full text-[#1B1A1ACC]">
                            <span className="label text-lg font-semibold text-[#1B1A1ACC]">Category</span>
                            <input type="text" name="category" placeholder="Enter Coffee Category" className="input input-bordered  bg-white w-full " />
                        </label>
                    </div>
                    <div>
                    <label className="form-control font-raleway w-full text-[#1B1A1ACC] ">
                            <span className="label text-lg font-semibold text-[#1B1A1ACC]">Chef</span>
                            <input type="text" name="chef" placeholder="Enter Coffee Chef" className="input input-bordered  bg-white w-full " />
                        </label>

                        <label className="form-control font-raleway w-full text-[#1B1A1ACC] ">
                            <span className="label text-lg font-semibold text-[#1B1A1ACC]">Taste</span>
                            <input type="text" name="taste" placeholder="Enter Coffee Taste" className="input input-bordered  bg-white w-full " />
                        </label>

                        <label className="form-control font-raleway w-full text-[#1B1A1ACC] ">
                            <span className="label text-lg font-semibold text-[#1B1A1ACC]">Details</span>
                            <input type="text" name="details" placeholder="Enter Coffee details" className="input input-bordered  bg-white w-full " />
                        </label>
                    </div>
                   </div>
                   <label className="form-control font-raleway w-full text-[#1B1A1ACC] ">
                            <span className="label text-lg font-semibold text-[#1B1A1ACC]">Photo URL</span>
                            <input type="text" name="photo" placeholder="Enter Photo URL" className="input input-bordered  bg-white w-full " />
                        </label>
                        
                        <input className="input border-2 border-[#331A15] text-2xl text-[#331A15] my-3 bg-[#D2B48C] w-full" type="submit" value="Add Coffee" />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;