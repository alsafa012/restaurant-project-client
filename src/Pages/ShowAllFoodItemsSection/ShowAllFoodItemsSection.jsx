import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShowAllFoods from "./ShowAllFoods";

const ShowAllFoodItemsSection = () => {
     const allFoods = useLoaderData();
     console.log(allFoods);
     const [allFoodItem, setAllFoodItem] = useState(allFoods);
     const [searchFood, setSearchFood] = useState(allFoods);

     const handleClickBtn = (e) => {
          e.preventDefault();
          const search = document.getElementById("inputField").value;

          if (search.length) {
               const filterCampaigns = allFoodItem.filter((campaign) =>
                    campaign.food_name
                         .toLowerCase()
                         .includes(search.toLowerCase())
               );

               if (filterCampaigns) {
                    setSearchFood(filterCampaigns);
               }
          } else {
               setSearchFood(allFoodItem);
          }
          document.getElementById("inputField").value = "";
     };

     return (
          <div className="container mx-auto">
               <div className=" w-full mx-auto text-center">
                    {/* <div className="absolute top-[30%] md:top-[35%] right-0 left-0 w-full mx-auto text-center"> */}
                    <h2 className="text-xl md:text-3xl lg:text-5xl font-extrabold">
                         I Grow By Helping People In Need
                    </h2>
                    <div className="mt-4 md:mt-5">
                         <input
                              id="inputField"
                              type="text"
                              name="name"
                              placeholder="Search here...."
                              className="input border-none w-3/5 md:w-[30%] rounded-l-md px-2 py-3 md:px-4 md:py-4"
                         />
                         <button
                              onClick={handleClickBtn}
                              className="rounded-r-md absolute right-[20%] md:right-[35%] bg-[#FF444A] text-[#FFFFFF] font-semibold px-2 py-3 md:px-3 md:py-3"
                         >
                              Search
                         </button>
                    </div>
               </div>

               <div className="mt-10">
               {/* <div className="grid grid-cols-3 gap-5 mt-10"> */}
                    {searchFood.map((food) => (
                         <ShowAllFoods key={food} food={food}></ShowAllFoods>
                    ))}
               </div>
          </div>
     );
};

export default ShowAllFoodItemsSection;
