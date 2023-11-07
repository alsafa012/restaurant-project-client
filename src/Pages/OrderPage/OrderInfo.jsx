import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const OrderInfo = ({ order, myOrders, setMyOrders }) => {
     const {
          _id,
          email,
          food_name,
          food_image,
          price,
          quantity,
          added_by,
          date,
     } = order;

     const handleRemove = (id) => {
          Swal.fire({
               title: "Are you sure?",
               text: "You won't be able to revert this!",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes, delete it!",
          }).then((result) => {
               if (result.isConfirmed) {
                    fetch(`https://restaurant-project-server.vercel.app/purchasedFoods/${id}`,{
                         method: "DELETE",
                    })
                         .then((res) => res.json())
                         .then((data) => {
                              console.log(data);
                              if (data.deletedCount > 0) {
                                   const remaining = myOrders.filter(
                                        (item) => item._id !== id
                                   );
                                   setMyOrders(remaining);

                                   Swal.fire(
                                        "Deleted!",
                                        "Your file has been deleted.",
                                        "success"
                                   );
                              }
                         });
               }
          });
     };


     return (
          <tr className="dark:text-white font-bold">
               <th>
                    <Link>
                         <button
                           onClick={() => handleRemove(_id)}
                              className="btn bg-[#FF444A] text-white border-none"
                         >
                              x
                         </button>
                    </Link>
               </th>
               <td>
                    <div className="avatar">
                         <div className="rounded w-12 h-12">
                              <img
                                   src={food_image}
                                   alt="Avatar Tailwind CSS Component"
                              />
                         </div>
                    </div>
               </td>
               <td>{food_name}</td>
               <td>{added_by}</td>
               <td>{date}</td>
               <td>{email}</td>
               <td>{price}</td>
             
          </tr>
     );
};

export default OrderInfo;
