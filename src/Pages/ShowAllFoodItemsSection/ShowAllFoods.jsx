import React from "react";
import { Link } from "react-router-dom";

const ShowAllFoods = ({ food }) => {
     // console.log(Object.keys(food).join(", "));
     const {
          _id,
          food_name,
          food_image,
          food_category,
          price,
          food_origin,
          quantity,
     } = food;
     return (
          <div className="my-5">
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
                              <p>food_name: {food_name}</p>
                              <p>food_category: {food_category}</p>
                              <p>Price: {price}</p>
                              <p>Quantity:{quantity}</p>
                              <p>food_origin: {food_origin}</p>
                              <Link to={`/details/${_id}`}>
                                   <button className="btn mt-3 text-white bg-gradient-to-r from-blue-700 to-blue-900">
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
