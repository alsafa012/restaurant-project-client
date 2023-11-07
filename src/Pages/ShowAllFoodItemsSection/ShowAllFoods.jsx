import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../Components/PageTitle/PageTitle";

const ShowAllFoods = ({ food }) => {
     console.log(Object.keys(food).join(", "));
     const {
          _id,
          food_name,
          food_image,
          food_category,
          price,
          food_origin,
          quantity,
          added_by,
          email,
     } = food;
     return (
          <div className="my-5">
               <PageTitle title="All Foods"></PageTitle>
               <div className="md:flex items-center gap-2 bg-base-100 shadow-xl border-2  rounded-xl">
                    <div className="md:w-[30%]">
                         <img
                              className=" flex justify-center object-fill w-[300px] h-[300px] rounded-l-xl"
                              src={food_image}
                              alt="item"
                         />
                    </div>

                    <div className="md:w-[70%]">
                         <div className="text-xl font-medium space-y-2 py-2">
                              <p>Food-Name: {food_name}</p>
                              <p>Food-Category: {food_category}</p>
                              <p>Price: ${price}</p>
                              <p>Quantity: {quantity}</p>
                              <p>Food-Origin: {food_origin}</p>
                              <p>Added-By: {added_by}</p>
                              <p>Email: {email}</p>
                              <Link to={`/details/${_id}`}>
                                   <button className="btn mt-3 text-white bg-[#FF444A]">
                                        See Details
                                   </button>
                              </Link>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ShowAllFoods;
