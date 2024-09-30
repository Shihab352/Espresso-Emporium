import Icon1 from '../assets/icons/1.png'
import Icon2 from '../assets/icons/2.png'
import Icon3 from '../assets/icons/3.png'
import Icon4 from '../assets/icons/4.png'

const Info = () => {
    return (
        <div className='md:px-20 px-5 py-10 bg-[#ECEAE3] font-rancho'>
           <div className='md:flex justify-between space-y-5 text-center mx-auto'>
           <div className='space-y-2'>
                <img className='mx-auto' src={Icon1} alt="" />
                <h1 className='text-3xl text-[#331A15]'>Awesome Aroma</h1>
                <p className='text-[#1B1A1A]'>You will definitely be a fan of the design
                    <br /> & aroma of your coffee</p>
            </div>

            <div className='space-y-2'>
                <img className='mx-auto' src={Icon2} alt="" />
                <h1 className='text-3xl text-[#331A15]'>High Quality</h1>
                <p className='text-[#1B1A1A]'>We served the coffee to you maintaining 
                   <br /> the best quality</p>
            </div>

            <div className='space-y-2'>
                <img className='mx-auto' src={Icon3} alt="" />
                <h1 className='text-3xl text-[#331A15]'>Pure Grades</h1>
                <p className='text-[#1B1A1A]'>The coffee is made of the green coffee 
                   <br /> beans which you will love</p>
            </div>

            <div className='space-y-2'>
                <img className='mx-auto' src={Icon4} alt="" />
                <h1 className='text-3xl text-[#331A15]'>Proper Roasting</h1>
                <p className='text-[#1B1A1A]'>Your coffee is brewed by first roasting 
                    <br />the green coffee beans</p>
            </div>
           </div>
        </div>
    );
};

export default Info;