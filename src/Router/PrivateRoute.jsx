import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
     const { user, loader } = useContext(AuthContext);
     const location = useLocation();
     // console.log(location);
     if (loader) {
          return (
               <div className="text-5xl ml-[50%] mt-[15%]">
                    <span className="loading loading-bars loading-sm text-warning "></span>
                    <span className="loading loading-bars loading-md text-warning "></span>
                    <span className="loading  loading-bars text-warning "></span>
               </div>
          );
     }
     if (user.email) {
          return children;
     }
     return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
