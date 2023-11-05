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

const myCreatedRouter = createBrowserRouter([
     {
          path: "/",
          element: <MainLayout></MainLayout>,
          errorElement: <ErrorPage></ErrorPage>,
          children: [
               {
                    path: "/",
                    element: <Home></Home>,
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
                    element: <ShowSingleFood></ShowSingleFood>,
                    loader: ({ params }) =>
                         fetch(`http://localhost:5000/allfoods/${params.id}`),
               },
               {
                    path: "/login",
                    element: <LoginPage></LoginPage>,
               },
               {
                    path: "/registration",
                    element: <RegistrationPage></RegistrationPage>,
               },
               {
                    path: "/blog",
                    element: <BlogSection></BlogSection>,
               },
          ],
     },
]);

export default myCreatedRouter;
