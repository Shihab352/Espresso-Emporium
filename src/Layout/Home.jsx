import Banner from "../Components/Banner";
import FollowUs from "../Components/FollowUs";
import Info from "../Components/Info";

import AllCoffees from "./AllCoffees";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
           <AllCoffees></AllCoffees>
            <FollowUs></FollowUs>
        </div>
    );
};

export default Home;