import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/HomePage/Home";
import MainLayout from "../MainLayout/MainLayout";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddProduct from "../Pages/AddProduct/AddProduct";
import PrivateRoute from "./PrivateRoute";
import ShowAllFoodItemsSection from "../Pages/ShowAllFoodItemsSection/ShowAllFoodItemsSection";
import ShowSingleFood from "../Pages/ShowAllFoodItemsSection/ShowSingleFood";
import BlogSection from "../Components/BlogSection/BlogSection";
import OrderPage from "../Pages/OrderPage/OrderPage";
import PurchasedFood from "../Pages/PurchasedPage/PurchasedFood";
import MyAddedPage from "../Pages/MyAddedPage/MyAddedPage";
import UpdateFoodsInfo from "../Pages/UpdateFoodsInfoPage/UpdateFoodsInfo";

const myCreatedRouter = createBrowserRouter([
     {
          path: "/",
          element: <MainLayout></MainLayout>,
          errorElement: <ErrorPage></ErrorPage>,
          children: [
               {
                    path: "/",
                    element: <Home></Home>,
                    loader:()=>fetch('http://localhost:5000/allFoods')
               },
               {
                    path: "/addProduct",
                    element: (
                         <PrivateRoute>
                              <AddProduct></AddProduct>
                         </PrivateRoute>
                    ),
               },
               {
                    path: "/allFoodItems",
                    element: (
                         <PrivateRoute>
                              <ShowAllFoodItemsSection></ShowAllFoodItemsSection>
                         </PrivateRoute>
                    ),
                    loader: () => fetch("http://localhost:5000/allFoodsCount"),
               },
               {
                    path: "/details/:id",
                    element: (
                         <PrivateRoute>
                              <ShowSingleFood></ShowSingleFood>
                         </PrivateRoute>
                    ),
                    loader: ({ params }) =>
                         fetch(`http://localhost:5000/allFoods/${params.id}`),
               },
               {
                    path: "/purchasedFood/:id",
                    element: (
                         <PrivateRoute>
                              <PurchasedFood></PurchasedFood>
                         </PrivateRoute>
                    ),
                    loader: ({ params }) =>
                         fetch(`http://localhost:5000/allFoods/${params.id}`),
               },
               {
                    path: "/update/:id",
                    element: <UpdateFoodsInfo></UpdateFoodsInfo>,
                    loader: ({ params }) =>
                         fetch(`http://localhost:5000/allFoods/${params.id}`),
               },
               {
                    path: "/blog",
                    element: <BlogSection></BlogSection>,
               },
               {
                    path: "/order",
                    element: (
                         <PrivateRoute>
                              <OrderPage></OrderPage>
                         </PrivateRoute>
                    ),
               },
               // {
               //      path: "/login",
               //      element: <LoginPage></LoginPage>,
               // },
               // {
               //      path: "/registration",
               //      element: <RegistrationPage></RegistrationPage>,
               // },
               {
                    path: "/myAddedFood",
                    element: (
                         <PrivateRoute>
                              <MyAddedPage></MyAddedPage>
                         </PrivateRoute>
                    ),
                    loader: () => fetch("http://localhost:5000/allfoods"),
               },
          ],
     },
     {
          path: "/login",
          element: <LoginPage></LoginPage>,
     },
     {
          path: "/registration",
          element: <RegistrationPage></RegistrationPage>,
     },
]);

export default myCreatedRouter;
