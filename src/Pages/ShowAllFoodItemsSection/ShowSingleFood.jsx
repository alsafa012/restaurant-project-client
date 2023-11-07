import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PageTitle from '../../Components/PageTitle/PageTitle';

const ShowSingleFood = () => {
     const singleFoodInfo = useLoaderData();
     console.log(singleFoodInfo);
     const {
          _id,
          food_name,
          food_image,
          food_category,
          price,
          quantity,
          added_by,
          food_origin,
          description,
     } = singleFoodInfo;

     return (
          <div className="my-5 container mx-auto">
          <div className="md:flex items-center gap-2 bg-base-100 shadow-xl border-2  rounded-xl">
               <div className="md:w-[30%]">
                    <img
                         className=" flex justify-center object-fill w-[300px] h-[300px] rounded-l-xl"
                         src={food_image}
                         alt="item"
                    />
               </div>

               <div className="md:w-[70%]">
                    <PageTitle title="Food-Detail"></PageTitle>
                    <div className="text-xl font-medium space-y-2 py-2">
                         <p>Food-Name: {food_name}</p>
                         <p>food_category: {food_category}</p>
                         <p>Price: {price}</p>
                         <p>added_by: {added_by}</p>
                         <p>quantity: {quantity}</p>
                         <p>food_origin: {food_origin}</p>
                         {/* <p>Rating: {rating}</p> */}

                         <p>
                              Description: {description}
                              {/* Description: {description.slice(0, 80)} */}
                         </p>

                         <Link to={`/purchasedFood/${_id}`}>
                              <button className="btn mt-3 text-white bg-[#FF444A]">
                                   Order naw
                              </button>
                         </Link>
                    </div>
               </div>
          </div>
     </div>
     );
};

export default ShowSingleFood;