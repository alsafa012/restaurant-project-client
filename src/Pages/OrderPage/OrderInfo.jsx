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

    

     return (
          <tr className="dark:text-white font-bold">
               <th>
                    <Link>
                         <button
                              className="btn"
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
