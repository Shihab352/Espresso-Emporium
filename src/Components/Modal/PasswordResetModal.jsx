import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const PasswordResetModal = () => {

    const {resetPass} = useContext(AuthContext);

    const [email , setEmail] = useState('');
    const handleSubmit = () => {
       resetPass(email)
       .then(()=>{
        console.log("Cridential Wrong");
       })

        
    }

    return (
        <div className="bg-[#F4F3F0] text-white">
            {/* Open the modal using document.getElementById('ID').showModal() method */}

<label className="label">
            <a onClick={()=>document.getElementById('my_modal_2').showModal()} className="label-text-alt  link link-hover text-xl text-[#1B1A1ACC]">Forgot password?</a>
          </label>
<dialog id="my_modal_2" className="modal ">
  <div  className="modal-box">
  <label className="label">
            <span className="label-text text-xl text-white">Email</span>
          </label>
    <input className="input input-bordered bg-white text-[#331A15] text-lg" type="text" name="email" id="" placeholder="Reset Email" onChange={(e)=>setEmail(e.target.value)} />
    <br />
    <input onClick={handleSubmit} className="btn hover:bg-transparent border-2 border-[#331A15] text-2xl text-[#331A15] my-3 hover:text-white bg-[#D2B48C]" type="submit" value="Submit" />
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
        </div>
    );
};

export default PasswordResetModal;