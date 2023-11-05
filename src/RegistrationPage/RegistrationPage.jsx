import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const RegistrationPage = () => {
     const [showPassword, setShowPassword] = useState(false);
     const [errorMessage, setErrorMessage] = useState(false);
     const { user, createUser, updateUserProfile } = useContext(AuthContext);
     const location = useLocation();
     console.log(location);
     const navigate = useNavigate();
     console.log(navigate);

     const handleRegister = (e) => {
          e.preventDefault();
          const form = e.target;
          const name = form.name.value;
          const photo = form.photo.value;
          const email = form.email.value;
          const password = form.password.value;
          console.log(name, photo, email, password);
          // validation
          setErrorMessage("");

          if (password.length < 6) {
               setErrorMessage("Please enter at least 6 character password");
               return;
          } else if (!/(?=.*[A-Z])/.test(password)) {
               setErrorMessage(
                    "Password must contain at least one uppercase letter."
               );
               return;
          } else if (!/(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-])/.test(password)) {
               setErrorMessage(
                    "Password must contain at least one special character."
               );
               return;
          }
          // create a new user
          if (user) {
               return Swal.fire({
                    title: "Error!",
                    text: "user already logged in",
                    icon: "error",
               });
          }
          createUser(email, password)
               .then((result) => {
                    console.log(result.user);
                    updateUserProfile(name, photo)
                         .then(() => {})
                         .catch((error) => {
                              console.log(error);
                         });
                    Swal.fire(
                         "Good job!",
                         "User created successfully",
                         "success"
                    );
                    navigate(location?.state ? location.state : "/");
               })
               .catch((error) => {
                    console.log(error.message);
               });

          form.reset();
     };
     return (
          <div>
               <p className=" text-3xl font-bold mb-6 text-center text-[#FF444A] mt-5">
                    Sign Up Page
               </p>

               <form
                    onSubmit={handleRegister}
                    className="w-4/5 md:w-1/2 mx-auto"
               >
                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Name</span>
                         </label>
                         <input
                              type="text"
                              name="name"
                              placeholder="Name"
                              className="input input-bordered"
                              required
                         />
                    </div>
                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Photo URL</span>
                         </label>
                         <input
                              type="text"
                              name="photo"
                              placeholder="Photo URL"
                              className="input input-bordered"
                              required
                         />
                    </div>
                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Email</span>
                         </label>
                         <input
                              type="text"
                              name="email"
                              placeholder="Email"
                              className="input input-bordered"
                              required
                         />
                    </div>
                    <div className="form-control relative">
                         <label className="label">
                              <span className="label-text">Password</span>
                         </label>
                         <input
                              type={showPassword ? "text" : "password"}
                              name="password"
                              placeholder="Password"
                              className="input input-bordered"
                              required
                         />

                         <span
                              className="text-xl absolute top-[60%] right-4"
                              onClick={() => setShowPassword(!showPassword)}
                         >
                              {showPassword ? (
                                   <FiEye> </FiEye>
                              ) : (
                                   <FiEyeOff></FiEyeOff>
                              )}
                         </span>
                    </div>
                    <div className="form-control">
                         <div className="flex items-center gap-2 mt-2">
                              <input
                                   type="checkbox"
                                   name="terms"
                                   id=""
                                   required
                              />
                              <p>
                                   Please accept our
                                   <a
                                        className="hover:underline hover:text-red-500"
                                        href="#"
                                   >
                                        terms and conditions
                                   </a>
                              </p>
                         </div>
                    </div>
                    <h3>
                         {errorMessage && (
                              <p className="text-red-600 pt-1">
                                   {errorMessage}
                              </p>
                         )}
                    </h3>
                    <div className="form-control mt-6">
                         <button className="btn bg-[#FF444A] text-white">Sign Up</button>
                    </div>
               </form>
               <p className="text-center py-4">
                    Already Have An Account ?
                    <Link
                         className="text-red-500 font-bold hover:underline ml-1"
                         to="/login"
                    >
                         Login
                    </Link>
               </p>
          </div>
     );
};

export default RegistrationPage;
