import Cup1 from "../assets/cups/Rectangle 9.png";
import Cup2 from "../assets/cups/Rectangle 10.png";
import Cup3 from "../assets/cups/Rectangle 11.png";
import Cup4 from "../assets/cups/Rectangle 12.png";
import Cup5 from "../assets/cups/Rectangle 13.png";
import Cup6 from "../assets/cups/Rectangle 14.png";
import Cup7 from "../assets/cups/Rectangle 15.png";
import Cup8 from "../assets/cups/Rectangle 16.png";

const FollowUs = () => {
    return (
        <div className="">
           <div className="text-center py-20">
           <p className="text-[#1B1A1A] text-xl">Follow Us Now</p>
           <h1 className="text-[#331A15] text-5xl">Follow on Instagram</h1> 
           </div>

           <div className="grid md:grid-cols-4 grid-cols-1 gap-5 md:px-20 py-5">
<img className='mx-auto' src={Cup1} alt="" />
<img className='mx-auto' src={Cup2} alt="" />
<img className='mx-auto' src={Cup3} alt="" />
<img className='mx-auto' src={Cup4} alt="" />
<img className='mx-auto' src={Cup5} alt="" />
<img className='mx-auto' src={Cup6} alt="" />
<img className='mx-auto' src={Cup7} alt="" />
<img className='mx-auto' src={Cup8} alt="" />
           </div>
        </div>
    );
};

export default FollowUs;