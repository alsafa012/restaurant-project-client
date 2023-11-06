import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import moment from "moment";
import Swal from "sweetalert2";

const PurchasedFood = () => {
     const { user } = useContext(AuthContext);
     const foodItems = useLoaderData();
     console.log(foodItems);
     const handlePurchase = (e) => {
          e.preventDefault();
          const form = e.target;
          const food_name = foodItems.food_name;
          const food_image = foodItems.food_image;
          const quantity = form.quantity.value;
          const addedBy = form.name.value;
          const price = foodItems.price;
          const email = user?.email;
          const date = form.date.value;

          const allData = {
               email,
               date,
               food_name,
               food_image,
               price: price,
               added_by: addedBy,
               quantity: quantity,
          };
          console.log(allData);
          if(foodItems.email === email) {
               return alert('same user');
          }
          else{
               if (foodItems?.quantity === 0) {
                    Swal.fire({
                         icon: "error",
                         title: "Oops...",
                         text: "Something went wrong!",
                    });
               } else {
                    if (foodItems?.quantity < quantity) {
                         Swal.fire({
                              icon: "error",
                              title: "Oops...",
                              text: "not enough!",
                         });
                    } 
                    else {
                         fetch("http://localhost:5000/purchasedFoods", {
                              method: "POST",
                              headers: {
                                   "content-type": "application/json",
                              },
                              body: JSON.stringify(allData),
                         })
                              .then((res) => res.json())
                              .then((data) => {
                                   if (data.acknowledged) {
                                        Swal.fire(
                                             "Good job!",
                                             "Product added successfully",
                                             "success"
                                        );
                                   }
                                   console.log(data);
                              });
                    }
               }

          }
     };

     return (
          <div>
               <h2 className="text-center text-3xl font-bold mt-5 ">
                    Purchased Here
               </h2>
               <div className=" bg-[#F3F3F3] container mx-auto my-10 border">
                    <form onSubmit={handlePurchase}>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
                              {/* 1st added by*/}
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text ">
                                             Added By
                                        </span>
                                   </label>
                                   <input
                                        type="text"
                                        placeholder="name"
                                        defaultValue={user?.displayName}
                                        name="name"
                                        className="input input-bordered "
                                        required
                                   />
                              </div>
                              {/* 2nd user email*/}
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text ">
                                             User Email
                                        </span>
                                   </label>
                                   <input
                                        type="text"
                                        placeholder="name"
                                        defaultValue={user?.email}
                                        name="email"
                                        className="input input-bordered "
                                        required
                                   />
                              </div>
                              {/* 3rd food name */}
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">
                                             Food Name
                                        </span>
                                   </label>
                                   <input
                                        defaultValue={foodItems?.food_name}
                                        placeholder="Food Name"
                                        name="foodName"
                                        className="input input-bordered "
                                   />
                              </div>
                              {/* 3rd food image */}
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">
                                             Food Image
                                        </span>
                                   </label>
                                   <input
                                        defaultValue={foodItems?.food_image}
                                        name="foodImage"
                                        type="text"
                                        className="input input-bordered "
                                   />
                              </div>
                              {/* 4th Food Category*/}
                              {/* <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">
                                             Food Category
                                        </span>
                                   </label>
                                   <input
                                        type="text"
                                        name="foodCategory"
                                        placeholder="Food Category"
                                        className="input input-bordered "
                                        required
                                   />
                              </div> */}
                              {/* 5th quantity  */}
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">
                                             Quantity
                                        </span>
                                   </label>
                                   <input
                                        type="text"
                                        name="quantity"
                                        placeholder="Quantity"
                                        className="input input-bordered"
                                        required
                                   />
                              </div>
                              {/* 6th date*/}
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text dark:text-white">
                                             Date
                                        </span>
                                   </label>
                                   <input
                                        value={moment().format(
                                             "dddd, MMMM YYYY"
                                        )}
                                        name="date"
                                        className="input input-bordered dark:text-black"
                                   />
                              </div>
                              {/* 7th Food Origin (Country) */}
                              {/* <div className="form-control">
                                   <label className="label">
                                        <span className="label-text ">
                                             Food Origin (Country)
                                        </span>
                                   </label>
                                   <input
                                        placeholder="Food Origin (Country)"
                                        name="foodOrigin"
                                        className="input input-bordered "
                                   />
                              </div> */}
                              {/* 8th  description */}
                              {/* <div className="form-control col-span-1 md:col-span-2">
                                   <label className="label">
                                        <span className="label-text ">
                                             description
                                        </span>
                                   </label>
                                   <input
                                        type="text"
                                        name="description"
                                        placeholder="Description"
                                        className="input input-bordered"
                                        required
                                   />
                              </div> */}
                              {/* price */}
                              <div className="form-control col-span-1 md:col-span-2">
                                   <label className="label">
                                        <span className="label-text">
                                             Price
                                        </span>
                                   </label>
                                   <input
                                        type="text"
                                        // placeholder="Price"
                                        defaultValue={foodItems?.price}
                                        name="price"
                                        className="input input-bordered"
                                   />
                              </div>
                         </div>
                         <div className="form-control p-10">
                              <input
                                   type="submit"
                                   className="btn bg-[#FF3811] border-none text-white"
                                   value="Purchased Food"
                              />
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default PurchasedFood;
