import background from "../assets/more/13.jpg";
import background2 from "../assets/more/24.jpg";
import logo from "../assets/more/logo1.png"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <div >
            <div className="mt-20 p-20 " style={{ backgroundImage: `url(${background})` }}>
            <div className="md:flex gap-28  items-center md:px-60">
                <div className="space-y-3">
                    <img className="w-[50px] h-[60px]" src={logo} alt="" />
                    <a className=" text-5xl  text-[#331A15] font-rancho rounded-2xl">Espresso Emporium</a>
                    <p>Always ready to be your friend. Come & Contact with us to share your <br /> memorable moments, to share with your best companion.</p>
                    <div className="flex gap-3 text-[#331A15] text-3xl">
                        <FaFacebook />
                        <FaTwitter />
                        <FaInstagram />
                        <FaLinkedin />
                    </div>
                    <h1 className="text-5xl text-[#331A15]">Getin Touch</h1>
                    <div className="space-y-2">
                        <div className="flex gap-3">
                            <FaPhone className="text-lg text-[#331A15]" />
                            <p className="text-[#1B1A1A]">+88 01533 333 333</p>
                        </div>
                        <div className="flex gap-3">
                            <MdEmail className="text-lg text-[#331A15]" />
                            <p className="text-[#1B1A1A]">info@gmail.com</p>
                        </div>
                        <div className="flex gap-3">
                            <FaLocationDot className="text-lg text-[#331A15]" />
                            <p className="text-[#1B1A1A]">72, Wall street, King Road, Dhaka</p>
                        </div>
                    </div>
                </div>
                <div>
                    <a className=" text-5xl  text-[#331A15] font-rancho rounded-2xl my-3">Connect With Us</a>
                    <div className="space-y-3 mt-5">
                        <label className="input bg-gray-300 input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Name" />
                        </label>

                        <label className="input input-bordered bg-gray-300 flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow " placeholder="Email" />
                        </label>
                        <textarea
                            placeholder="Message"
                            className="textarea bg-gray-300 textarea-bordered textarea-lg w-full max-w-xs"></textarea>
                    </div>
                </div>
            </div>
            </div>
            <div>
            <footer className="footer footer-center text-base-content p-4" style={{ backgroundImage: `url(${background2})` }}>
  <aside>
    <p className="text-white text-lg">Copyright © {new Date().getFullYear()} - All right reserved by Espresso Emporium</p>
  </aside>
</footer>
            </div>
        </div>
        
    );
};

export default Footer;