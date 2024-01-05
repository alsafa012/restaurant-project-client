import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShowAllFoods from "./ShowAllFoods";

const ShowAllFoodItemsSection = () => {
     // const categoryMap=['']

     const { count } = useLoaderData();
     // console.log(count);
     const [allFoodItem, setAllFoodItem] = useState([]);
     const [searchFood, setSearchFood] = useState([]);
     const [search, setSearch] = useState("");
     const [asc, setAss] = useState(true);
     const [category, setCategory] = useState("");
     // console.log(category);

     const [currentPage, setCurrentPage] = useState(0);
     // const [itemsPerPage, setItemsPerPage] = useState(10);
     const [itemsPerPage, setItemsPerPage] = useState(() => {
          return parseInt(localStorage.getItem("itemsPerPage")) || 10;
     });

     const numberOfPages = Math.ceil(count / itemsPerPage);
     const pages = [...Array(numberOfPages).keys()];
     // const pages = Array.from({ length: numberOfPages }, (_, index) => index);
     // console.log("pages:", pages);
     // const categoryFilter = allFoodItem.filter(item=> item.category === )
     useEffect(() => {
          fetch(
               `https://restaurant-project-server.vercel.app/allFoods?page=${currentPage}&size=${itemsPerPage}&search=${search}&sort=${
                    asc ? "asc" : "des"
               }&category=${category}`
          )
               .then((res) => res.json())
               .then((data) => {
                    // setSearchCategory(data);
                    setAllFoodItem(data);
                    setSearchFood(data);
               });
     }, [currentPage, itemsPerPage, search, asc, category]);

     // sort by category
     const handleCategory = () => {
          // const category = e.target.category.value;
          const category = document.getElementById("cat-id").value;
          // setCategory(allFoodItem)
          setCategory(category);
          // console.log(category);
     };

     const handleClickBtn = (e) => {
          e.preventDefault();
          const search = document.getElementById("inputField").value;

          setSearch(search);
          if (search.length) {
               const filterFoods = allFoodItem.filter((item) =>
                    item.food_name.toLowerCase().includes(search.toLowerCase())
               );
               setSearchFood(filterFoods);
          } else {
               setSearchFood(allFoodItem);
               // setAllFoodItem(allFoodItem);
          }
          document.getElementById("inputField").value = "";
     };

     const handleItemPerPage = (e) => {
          const val = parseInt(e.target.value);
          // console.log(val);
          setItemsPerPage(val);
          localStorage.setItem("itemsPerPage", val);
          setCurrentPage(0);
     };

     return (
          <div className="container mx-auto">
               
               <div className="w-full mx-auto text-center relative">
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
                    <div className="space-x-5 md:space-x-0">
                         <button
                              onClick={() => setAss(!asc)}
                              className="btn bg-[#FF444A] border-none text-white my-5 md:my-0 md:absolute top-0 left-10"
                         >
                              {asc
                                   ? "Sort by quantity asc"
                                   : "Sort by quantity des"}
                         </button>

                         <select
                              onChange={handleCategory}
       
                              id="cat-id"
                              className="input input-bordered text-black md:absolute top-0 right-10"
                         >
                              <option value="Soft Drink">Soft Drink</option>
                              <option value="Dessert">Dessert</option>
                              <option value="Cold Coffee">Cold Coffee</option>
                         </select>
             
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
                    <p>currentPage:{currentPage + 1}</p>

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
                              {page + 1}
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
