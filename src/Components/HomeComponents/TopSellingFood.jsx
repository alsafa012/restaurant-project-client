import React from "react";
import { Link } from "react-router-dom";

const TopSellingFood = () => {
     return (
          <div>
               <p className="text-center text-3xl font-bold">
                    Top-Selling-Food-Items
               </p>
               <div>
                    <div className="card card-side bg-base-100 shadow-xl">
                         
                         <div className="card-body">
                              <h2 className="card-title">
                                   New movie is released!
                              </h2>
                              <p>Click the button to watch on Jetflix app.</p>
                              <div className="card-actions justify-end">
                                  <Link to="/allFoodItems">
                                  <button className="btn btn-primary">
                                        See all
                                   </button></Link>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default TopSellingFood;
