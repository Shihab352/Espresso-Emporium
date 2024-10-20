import { Link, NavLink } from "react-router-dom";
import background from "../../assets/more/15.jpg";
import logo from "../../assets/more/logo1.png";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {

  const {logout , user} = useContext(AuthContext);



    const navLink = <>
    
    <li className="text-lg text-white "> <NavLink className="bg-black" to={'/'}>Homepage</NavLink> </li>
    <li className="text-lg text-white "> <NavLink className="bg-black" to={'/addCoffees'}>AddCoffee</NavLink> </li>
    <li className="text-lg text-white "> <NavLink className="bg-black" to={'/myCart'}>My Cart</NavLink> </li>
    <li className="text-lg text-white "> <NavLink className="bg-black" to={'/login'}>Login</NavLink> </li>
    <li className="text-lg text-white "> <NavLink className="bg-black" to={'/users'}>Users</NavLink> </li>

    
        
    </>

    return (
        <div>
           <div className="md:navbar bg-cover" style={{ backgroundImage: `url(${background})` }} >
  <div className="md:navbar-start">
    <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      {navLink}
      </ul>
    </div>
  </div>
  <div className="md:navbar-center flex items-center gap-3">
  <img className="w-[50px] h-[60px]" src={logo} alt="" />
    <Link to={'/'}>
    <a className=" btn-ghost md:text-6xl text-4xl text-white font-rancho rounded-2xl">Espresso Emporium</a></Link>
  </div>
  <div className="md:navbar-end my-4">
    {
      user? <>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="User Photo"
                    src={user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
                    
                </div>
                
              </div>
              <button onClick={logout} className="px-5 rounded-lg btn-ghost text-2xl text-white">
                  logOut
                </button>
                
                </>
 :
<Link to={'/login'}>
 <button  className="px-5 rounded-lg btn-ghost text-2xl text-white">
    login
  </button>
 </Link> 
    }
  </div>
</div> 
        </div>
    );
};

export default Navbar;