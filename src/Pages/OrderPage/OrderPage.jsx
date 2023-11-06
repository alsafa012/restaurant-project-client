import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import OrderInfo from "./OrderInfo";

const OrderPage = () => {
     const { user } = useContext(AuthContext);
     // console.log(data)
     const [myOrders, setMyOrders] = useState([]);
     console.log(myOrders);
     

     useEffect(() => {
          if (user) {
               axios.get(
                    `http://localhost:5000/purchasedFoods?email=${user.email}`,
                    {
                         withCredentials: true,
                    }
               ).then((res) => {
                    setMyOrders(res.data);
               });
          }
     }, [user]);
     return (
          <div className="min-h-screen border-red-500 border ">
               {myOrders.length === 0 ? (
                    <div className="text-center mx-auto text-xl md:text-3xl font-bold mt-20 space-y-2">
                         <h1>Oops...!</h1>
                         <h3>No Product Added Yet.</h3>
                         <Link to={"/"}>
                              <button className="btn mt-2 bg-gradient-to-r from-blue-700 to-blue-400 text-white border-none">
                                   Click Here for Home Page..
                              </button>
                         </Link>
                    </div>
               ) : (
                    <div className="dark:text-white">
                         <h2 className="text-5xl text-center">
                              Bookings: {myOrders.length}
                         </h2>
                         <div className="overflow-x-auto">
                              <table className="table">
                                   {/* head */}
                                   <thead className="dark:text-white font-bold">
                                        <tr>
                                             <th>
                                                  <label>
                                                       <input
                                                            type="checkbox"
                                                            className="checkbox"
                                                       />
                                                  </label>
                                             </th>
                                             <th>Avatar</th>
                                             <th>Food Name</th>
                                             <th>Added-by</th>
                                             <th>Time</th>
                                             <th>user name</th>
                                             <th>Price</th>
                                             <th></th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {myOrders.map((order) => (
                                             <OrderInfo
                                                  key={order._id}
                                                  order={order}
                                                  myOrders={myOrders}
                                                  setMyOrders={setMyOrders}
                                             ></OrderInfo>
                                        ))}
                                   </tbody>
                              </table>
                         </div>
                    </div>
               )}
          </div>
     );
};

export default OrderPage;
