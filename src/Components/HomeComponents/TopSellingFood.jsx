// import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ShowTopSellingFoods from "./ShowTopSellingFoods";

const TopSellingFood = () => {
     const allFoodItems = useLoaderData();
     console.log(allFoodItems);
     const shortedFood = [...allFoodItems].sort((a, b) =>b.ordered - a.ordered)
     console.log(shortedFood);
     return (
          <div className="container mx-auto my-10">
               <p className="text-center text-3xl font-bold my-5">
                    Top-Selling-Food-Items
               </p>
               <div>
                    <div className="grid md:grid-cols-3 gap-5">
                         {shortedFood.slice(0,6).map((food) => (
                              <ShowTopSellingFoods
                                   key={food._id}
                                   food={food}
                              ></ShowTopSellingFoods>
                         ))}
                    </div>
                    <div className="w-full mt-3 text-center">
                         <Link to="/allFoodItems">
                              <button className="btn bg-[#FF444A] text-white">
                                   See all
                              </button>
                         </Link>
                    </div>
               </div>
          </div>
     );
};

export default TopSellingFood;
