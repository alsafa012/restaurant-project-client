import React from "react";
import { Link } from "react-router-dom";

const ShowAllFoods = ({ food }) => {
     console.log(Object.keys(food).join(", "));
     const {
          food_name,
          food_image,
          food_category,
          price,
          made_by,
          food_origin,
          description,
     } = food;
     return (
          <div className="my-5">
               <div className=" py-5 px-3 md:flex items-center gap-5 bg-base-100 shadow-xl border-2  rounded-xl">
                    <div className="md:w-[30%]">
                         <img
                              className=" flex justify-center object-fill w-[300px] h-[300px]"
                              src={food_image}
                              alt="item"
                         />
                    </div>

                    <div className="md:w-[70%]">
                         <div className="text-xl font-medium space-y-2">
                              <p>Brand-Name: {food_name}</p>
                              <p>Device-Name: {food_category}</p>
                              <p>Price: {price}</p>
                              <p>Type: {made_by}</p>
                              <p>food_origin: {food_origin}</p>
                              {/* <p>Rating: {rating}</p> */}

                              <p>
                                   Description: {description}
                                   {/* Description: {description.slice(0, 80)} */}
                              </p>

                              <Link>
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
