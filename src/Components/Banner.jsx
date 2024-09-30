import background from "../assets/more/3.png"

const Banner = () => {
    return (
        <div className="md:h-[800px] w-full bg-cover bg-center font-rancho" style={{ backgroundImage: `url(${background})` }}>
            <div className="md:py-[300px] md:pl-[600px] p-10 space-y-4 ">
                <h1 className="text-5xl text-white">Would you like a Cup of Delicious Coffee ?</h1>
                <p className="text-white text-lg">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br />
                 every moment!!! Enjoy the beautiful moments and make them memorable</p>
                 <button className="py-1 px-2 text-black text-2xl hover:text-white hover:bg-transparent hover:border-2 hover:border-white bg-[#E3B577] ">Learn More</button>
            </div>
        </div>
    );
};

export default Banner;