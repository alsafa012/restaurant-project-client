import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateFoodsInfo = () => {

     const location = useLocation()
     console.log(location);
     const navigate = useNavigate();
     const from = location.state || '/'
     console.log(from);



     const foodsData = useLoaderData();
     const {
          _id,
          food_name,
          food_image,
          food_category,
          price,
          added_by,
          email,
          food_origin,
          description,
          quantity,
     } = foodsData;
     // console.log(Object.keys(foodsData).join(", "));
     const { user } = useContext(AuthContext);

     const handleAddProduct = (e) => {
          e.preventDefault();
          const form = e.target;
          const addedBy = user?.displayName;
          const email = user?.email;
          const foodName = form.foodName.value;
          const foodImage = form.foodImage.value;
          const foodCategory = form.foodCategory.value;
          const price = form.price.value;
          const foodOrigin = form.foodOrigin.value;
          const quantity = form.quantity.value;
          const description = form.description.value;
          const allData = {
               email,
               food_name: foodName,
               food_image: foodImage,
               food_category: foodCategory,
               price: price,
               added_by: addedBy,
               food_origin: foodOrigin,
               description: description,
               quantity: quantity,
          };
          console.log(allData);

          Swal.fire({
               title: "Are you sure?",
               text: "Update this Product!",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes, Update it!",
          }).then((result) => {
               if (result.isConfirmed) {
                    fetch(`http://localhost:5000/allfoods/${_id}`, {
                         method: "PUT",
                         headers: {
                              "content-type": "application/json",
                         },
                         body: JSON.stringify(allData),
                    })
                         .then((res) => res.json())
                         .then((data) => {
                              console.log(data);
                              if (data.modifiedCount > 0) {
                                   Swal.fire({
                                        icon: "success",
                                        text: "Inserted successfully!",
                                   });
                              }
                              navigate(from, {replace:true});
                              // navigate(from, {replace:true});
                              // navigate('/');
                         });
                    // navigate(location.state && location.state);
               }
          });

          // form.reset();
     };

     return (
          <div>
               <h2 className="text-center text-3xl font-bold mt-5 text-[#FF444A]">
                    Add Items Here
               </h2>
               <div className=" bg-[#F3F3F3] container mx-auto my-10 border">
                    <form onSubmit={handleAddProduct}>
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
                                        placeholder="Food Name"
                                        defaultValue={food_name}
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
                                        defaultValue={food_image}
                                        placeholder="Food Image URL"
                                        name="foodImage"
                                        type="text"
                                        className="input input-bordered "
                                   />
                              </div>
                              {/* 4th Food Category*/}
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">
                                             Food Category
                                        </span>
                                   </label>
                                   <input
                                        defaultValue={food_category}
                                        type="text"
                                        name="foodCategory"
                                        placeholder="Food Category"
                                        className="input input-bordered "
                                        required
                                   />
                              </div>
                              {/* 5th quantity  */}
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">
                                             Quantity
                                        </span>
                                   </label>
                                   <input
                                        defaultValue={quantity}
                                        type="text"
                                        name="quantity"
                                        placeholder="Quantity"
                                        className="input input-bordered"
                                        required
                                   />
                              </div>
                              {/* 6th Price*/}
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">
                                             Price
                                        </span>
                                   </label>
                                   <input
                                        defaultValue={price}
                                        type="text"
                                        placeholder="Price"
                                        name="price"
                                        className="input input-bordered "
                                        required
                                   />
                              </div>
                              {/* 7th Food Origin (Country) */}
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text ">
                                             Food Origin (Country)
                                        </span>
                                   </label>
                                   <input
                                        defaultValue={food_origin}
                                        placeholder="Food Origin (Country)"
                                        name="foodOrigin"
                                        className="input input-bordered "
                                   />
                              </div>
                              {/* 8th  description */}
                              <div className="form-control col-span-1 md:col-span-2">
                                   <label className="label">
                                        <span className="label-text ">
                                             description
                                        </span>
                                   </label>
                                   <input
                                        type="text"
                                        defaultValue={description}
                                        name="description"
                                        placeholder="Description"
                                        className="input input-bordered"
                                        required
                                   />
                              </div>
                         </div>
                         <div className="form-control p-10">
                              <input
                                   type="submit"
                                   className="btn bg-[#FF3811] border-none text-white"
                                   value="Update here"
                              />
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default UpdateFoodsInfo;
