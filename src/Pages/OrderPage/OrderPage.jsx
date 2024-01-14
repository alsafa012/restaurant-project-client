import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import OrderInfo from "./OrderInfo";
import PageTitle from "../../Components/PageTitle/PageTitle";
import Swal from "sweetalert2";

const OrderPage = () => {
     const { user } = useContext(AuthContext);
     // console.log(data)
     const [myOrders, setMyOrders] = useState([]);
     // const [allData, setAllData] = useState([]);
     // console.log(myOrders);
     // console.log(allData);
     // useEffect(() => {
     //      // Assuming myOrders is an array of data you want to delete
     //      setAllData(myOrders);
     //    }, [myOrders]);
     const handleRemoveAll = () => {
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
                    axios.delete("https://restaurant-project-server.vercel.app/purchasedFoods")
                         .then((res) => {
                              console.log(res.data);
                              setMyOrders([]);
                              Swal.fire({
                                   title: "Deleted!",
                                   text: "Your file has been deleted.",
                                   icon: "success",
                              });
                         })
                         .catch((error) => {
                              console.error(error);
                         });
               }
          });
     };
     useEffect(() => {
          if (user) {
               axios.get(
                    `https://restaurant-project-server.vercel.app/purchasedFoods?email=${user.email}`,
                    {
                         withCredentials: true,
                    }
               ).then((res) => {
                    setMyOrders(res.data);
               });
          }
     }, [user]);
     return (
          <div className="min-h-screen container mx-auto">
               <PageTitle title="My Orders"></PageTitle>
               {myOrders.length === 0 ? (
                    <div className="text-center mx-auto text-xl md:text-3xl font-bold mt-20 space-y-2">
                         <h1>Oops...!</h1>
                         <h3>No Product Added Yet.</h3>
                         <Link to={"/allFoodItems"}>
                              <button className="btn mt-2 bg-[#FF444A] text-white border-none">
                                   Click Here for Home Page..
                              </button>
                         </Link>
                    </div>
               ) : (
                    <div className="overflow-hidden">
                         <h2 className="text-3xl text-[#FF444A] font-bold underline lg:text-5xl text-center">
                              Total Order: {myOrders.length}
                         </h2>
                         <div className="overflow-x-auto">
                              <table className="table">
                                   {/* head */}
                                   <thead className="font-bold">
                                        <tr className="">
                                             <th>
                                                  <label>
                                                       {/* <input
                                                            type="checkbox"
                                                            className="checkbox"
                                                       /> */}
                                                       <button
                                                            className="btn btn-sm bg-[#FF444A] text-white border-none"
                                                            onClick={
                                                                 handleRemoveAll
                                                            }
                                                       >
                                                            Delete All
                                                       </button>
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
