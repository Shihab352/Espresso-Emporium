import { Link,  useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook ,FaGithub} from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import PasswordResetModal from "../../Components/Modal/PasswordResetModal";

const Login = () => {
  const {signInUser, googleLogin, gitHubLogin, facebookLogin} = useContext(AuthContext);

  // Navigation
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    const { email,password} = data;
    signInUser(email,password)
    .then(res => {
      if(res.user){
        navigate(location?.state || '/');
      }
    })
    .catch(error => {
        console.log(error)
    })
  }

  const handleSocialLogin = socialProvider => {
    socialProvider()
    .then(res => {
      if(res.user){
        navigate(location?.state || '/');
      }
    })
  }
    return (
        <div>
            <div className="hero bg-[#F4F3F0] text-[#1B1A1ACC]  md:w-2/3 mx-auto md:my-10 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl text-[#1B1A1ACC]">Email</span>
          </label>
          <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered bg-white"  />
          {errors.email && <span className="text-red-700">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl text-[#1B1A1ACC]">Password</span>
          </label>
          <input type="password" {...register("password", { required: true })} placeholder="password" className="input input-bordered bg-white"  />
          {errors.password && <span className="text-red-700">This field is required</span>}
          {/* <label className="label">
            <a href="#" className="label-text-alt  link link-hover text-xl text-[#1B1A1ACC]">Forgot password?</a>
          </label> */}
          <PasswordResetModal></PasswordResetModal>
        </div>
        <div className="form-control mt-6">
          <button className="btn hover:bg-transparent border-2 border-[#331A15] text-2xl text-[#331A15] my-3 bg-[#D2B48C]">Login</button>
        </div>
      </form>
      <div>
        <div className="flex justify-between p-4">
          <h3 className="text-3xl">New Here ?</h3>
          <Link to={'/register'}><p className="text-xl font-semibold">Create an Account</p></Link>
        </div>
        <div className="pb-6">
        <h2 className="text-3xl text-center py-3 border-b-2 border-[#331A15]">Continue With</h2>
        <button onClick={()=>handleSocialLogin (facebookLogin)} className="text-2xl flex items-center rounded-3xl gap-3 bg-[#D2B48C] font-semibold p-3 border-[#331A15] mx-auto border-2 my-3"><FaFacebook />Facebook</button>

        <button onClick={()=>handleSocialLogin (googleLogin)} className="text-2xl flex items-center rounded-3xl gap-3 p-3 bg-[#D2B48C] font-semibold border-[#331A15] border-2 mx-auto "><FaGoogle />Google</button>

        <button onClick={()=>handleSocialLogin (gitHubLogin)} className="text-2xl mt-3 flex items-center rounded-3xl gap-3 p-3 bg-[#D2B48C] font-semibold border-[#331A15] border-2 mx-auto "><FaGithub />GitHub</button>

        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;