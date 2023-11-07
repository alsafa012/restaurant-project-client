import React from "react";

const ShowTopSellingFoods = ({ food }) => {
     const { _id, food_name, food_image, food_category, price, ordered } = food;
     return (
          <div>
               <div className="bg-base-100 shadow-xl rounded-2xl">
                    <div className="flex justify-center items-center pt-2">
                         <img
                              className=" object-fill w-[300px] h-[300px] rounded-xl"
                              src={food_image}
                              alt="Shoes"
                         />
                    </div>

                    <div className="text-xl font-medium space-y-2 py-2 text-center">
                         <p>Food-Name: {food_name}</p>
                         <p>Food-Category: {food_category}</p>
                         <p>Price: ${price}</p>
                         <p>Total order: {ordered}</p>
                    </div>
               </div>
          </div>
     );
};

export default ShowTopSellingFoods;
