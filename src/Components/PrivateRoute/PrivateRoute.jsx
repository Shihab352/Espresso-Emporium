import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const location = useLocation();


   
  

    if(loading){
        return   <div className="text-center">
               <span className="loading loading-bars loading-xs"></span>
   <span className="loading loading-bars loading-sm"></span>
   <span className="loading loading-bars loading-md"></span>
   <span className="loading loading-bars loading-lg"></span>
           </div>
       }


       if(!user) {
        return <Navigate to={'/login'} state={location?.pathname || '/'}></Navigate>
        

    }

    
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;