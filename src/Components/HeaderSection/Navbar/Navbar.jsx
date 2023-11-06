import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const Navbar = () => {
     const { user, userSignOut } = useContext(AuthContext);

     const navigate = useNavigate();
     const handleSignOut = () => {
          // userSignOut()
          //      .then(() => {
          //           Swal.fire(
          //                "Good job!",
          //                "User Sign out successfully",
          //                "success"
          //           );
          //           navigate("/");
          //      })
          Swal.fire({
               title: "Are you sure want to sign out?",
               // text: "You won't be able to revert this!",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes",
          })
               .then((result) => {
                    if (result.isConfirmed) {
                         userSignOut().then(() => {
                              Swal.fire(
                                   "Good job!",
                                   "User Sign out successfully",
                                   "success"
                              );
                              navigate("/");
                         });
                    }
               })
               .catch();
     };
     const navLists = (
          <>
               <li>
                    <NavLink
                         to="/"
                         className={({ isActive, isPending }) =>
                              isPending
                                   ? "pending"
                                   : isActive
                                   ? "text-[#ff6900] underline"
                                   : ""
                         }
                    >
                         Home
                    </NavLink>
               </li>
               <li>
                    <NavLink
                         to="/allFoodItems"
                         className={({ isActive, isPending }) =>
                              isPending
                                   ? "pending"
                                   : isActive
                                   ? "text-[#ff6900] underline"
                                   : ""
                         }
                    >
                         allFoodItems
                    </NavLink>
               </li>
               <li>
                    <NavLink
                         to="/addProduct"
                         className={({ isActive, isPending }) =>
                              isPending
                                   ? "pending"
                                   : isActive
                                   ? "text-[#ff6900] underline"
                                   : ""
                         }
                    >
                         addProduct
                    </NavLink>
               </li>
               {!user && (
                    <li>
                         <NavLink
                              to="/login"
                              className={({ isActive, isPending }) =>
                                   isPending
                                        ? "pending"
                                        : isActive
                                        ? "text-[#ff6900] underline"
                                        : ""
                              }
                         >
                              Login
                         </NavLink>
                    </li>
               )}
               {!user && (
                    <li>
                         <NavLink
                              to="/registration"
                              className={({ isActive, isPending }) =>
                                   isPending
                                        ? "pending"
                                        : isActive
                                        ? "text-[#ff6900] underline"
                                        : ""
                              }
                         >
                              Registration
                         </NavLink>
                    </li>
               )}
               {user && (
                    <li>
                         <NavLink
                              to="/blog"
                              className={({ isActive, isPending }) =>
                                   isPending
                                        ? "pending"
                                        : isActive
                                        ? "text-[#ff6900] underline"
                                        : ""
                              }
                         >
                              Blog
                         </NavLink>
                    </li>
               )}
               {user && (
                    <li>
                         <NavLink
                              to="/order"
                              className={({ isActive, isPending }) =>
                                   isPending
                                        ? "pending"
                                        : isActive
                                        ? "text-[#ff6900] underline"
                                        : ""
                              }
                         >
                              order
                         </NavLink>
                    </li>
               )}
          </>
     );
     return (
          <div>
               <div className="bg-black">
                    <div className=" navbar bg-black container mx-auto">
                         {/* bg-gradient-to-r from-blue-900 to-blue-900 */}
                         <div className="navbar-start">
                              <div className="dropdown">
                                   <label
                                        tabIndex={0}
                                        className="btn btn-ghost lg:hidden"
                                   >
                                        <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             className="h-5 w-5"
                                             fill="none"
                                             viewBox="0 0 24 24"
                                             stroke="currentColor"
                                        >
                                             <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M4 6h16M4 12h8m-8 6h16"
                                             />
                                        </svg>
                                   </label>
                                   <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
                                   >
                                        {navLists}
                                   </ul>
                              </div>
                              <img
                                   className="rounded-full h-[50px] w-[50px]"
                                   src="https://i.ibb.co/0ZS9j4k/pngtree-chef-restaurant-logo-png-image-6136204.png"
                                   alt=""
                              />

                              <p className="btn btn-ghost text-xl md:text-2xl text-white font-extrabold italic">
                                   RJ's Kitchen
                              </p>
                         </div>
                         <div className="navbar-center hidden lg:flex">
                              <ul className="menu menu-horizontal px-1 text-white">
                                   {navLists}
                              </ul>
                         </div>

                         <div className="navbar-end ">
                              <div className="dropdown dropdown-end">
                                   <label
                                        tabIndex={0}
                                        className="btn btn-ghost btn-circle avatar"
                                   >
                                        {user ? (
                                             <div className="w-10 rounded-full">
                                                  <img src={user.photoURL} />
                                             </div>
                                        ) : (
                                             <Link to="/login">
                                                  <button className="text-white">
                                                       Sign Up
                                                  </button>
                                             </Link>
                                        )}
                                   </label>

                                   {user && (
                                        <div>
                                             <ul
                                                  tabIndex={0}
                                                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                                             >
                                                  <div>
                                                       <li>
                                                            <a className="font-medium">
                                                                 User:
                                                                 {
                                                                      user.displayName
                                                                 }
                                                            </a>
                                                       </li>
                                                       <li>
                                                            {user ? (
                                                                 <button
                                                                      className="font-medium"
                                                                      onClick={
                                                                           handleSignOut
                                                                      }
                                                                 >
                                                                      Sign Out
                                                                 </button>
                                                            ) : (
                                                                 <Link to="/login">
                                                                      <button className="">
                                                                           Sign
                                                                           Up
                                                                      </button>
                                                                 </Link>
                                                            )}
                                                       </li>
                                                  </div>
                                             </ul>
                                        </div>
                                   )}
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;
