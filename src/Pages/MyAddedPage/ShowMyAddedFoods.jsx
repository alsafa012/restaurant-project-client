import { Link, useLocation } from "react-router-dom";

const ShowMyAddedFoods = ({ data }) => {
     const location = useLocation()
     // console.log(location);
     // const navigate = useNavigate();
     // const from = location.state || '/'
     // console.log(from);
     const {
          _id,
          email,
          food_name,
          food_image,
          price,
          quantity,
          added_by,
          date,
          food_origin,
     } = data;
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
                              <p>Food_name: {food_name}</p>
                              <p>Food_category: {added_by}</p>
                              <p>Price: ${price}</p>
                              <p>Quantity: {quantity}</p>
                              <p>Food-Origin: {food_origin}</p>
                              <p>Added-by: {added_by}</p>
                              <p>Email: {email}</p>
                              <Link state={location.pathname} to={`/update/${_id}`}>
                                   <button className="btn mt-3 text-white bg-[#FF444A]">
                                        Update Details
                                   </button>
                              </Link>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ShowMyAddedFoods;
