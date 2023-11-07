import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShowAllFoods from "./ShowAllFoods";

const ShowAllFoodItemsSection = () => {
     const { count } = useLoaderData();
     console.log(count);

     const [allFoodItem, setAllFoodItem] = useState([]);
     const [searchFood, setSearchFood] = useState([]);

     const [currentPage, setCurrentPage] = useState(0);
     const [itemsPerPage, setItemsPerPage] = useState(() => {
          return parseInt(localStorage.getItem("itemsPerPage")) || 10;
     });

     useEffect(() => {
          fetch(
               `http://localhost:5000/allFoods?page=${currentPage}&size=${itemsPerPage}`
          )
               .then((res) => res.json())
               .then((data) => {
                    setAllFoodItem(data);
                    setSearchFood(data);
               });
     }, [currentPage, itemsPerPage]);

     const numberOfPages = Math.ceil(count / itemsPerPage);
     const pages = [...Array(numberOfPages).keys()];
     console.log("pages:", pages);

     const handleClickBtn = (e) => {
          e.preventDefault();
          const search = document.getElementById("inputField").value;
          if (search.length) {
               const filterFoods = allFoodItem.filter((item) =>
                    item.food_name.toLowerCase().includes(search.toLowerCase())
               );
               setSearchFood(filterFoods);
          } else {
               setSearchFood(allFoodItem);
          }
          document.getElementById("inputField").value = "";
     };

     const handleItemPerPage = (e) => {
          const val = parseInt(e.target.value);
          console.log(val);
          setItemsPerPage(val);
          localStorage.setItem("itemsPerPage", val);
          setCurrentPage(0);
     };

     return (
          <div className="container mx-auto">
               <div className="w-full mx-auto text-center">
                    <div className="mt-4 md:mt-5 relative">
                         <input
                              id="inputField"
                              type="text"
                              name="name"
                              placeholder="Search here...."
                              className="input border-2 w-3/5 md:w-[30%] rounded-l-md px-2 py-3 md:px-4 md:py-4"
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
                    {searchFood?.map((food) => (
                         <ShowAllFoods
                              key={food._id}
                              food={food}
                         ></ShowAllFoods>
                    ))}
               </div>
               <div className="border text-center mt-5 mb-10">
                    <p>currentPage:{currentPage}</p>

                    {pages.map((page) => (
                         <button
                              onClick={() => setCurrentPage(page)}
                              className={
                                   currentPage === page
                                        ? "btn mr-2 bg-blue-800 text-white"
                                        : "btn mr-2"
                              }
                              key={page}
                         >
                              {page}
                         </button>
                    ))}
                    <select
                         value={itemsPerPage}
                         onChange={handleItemPerPage}
                         name=""
                         id=""
                    >
                         <option value="5">5</option>
                         <option value="10">10</option>
                         <option value="20">20</option>
                         <option value="50">50</option>
                    </select>
               </div>
          </div>
     );
};

export default ShowAllFoodItemsSection;
