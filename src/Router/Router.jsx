import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/HomePage/Home";
import MainLayout from "../MainLayout/MainLayout";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const myCreatedRouter = createBrowserRouter([
     {
          path: "/",
          element: <MainLayout></MainLayout>,
          errorElement:<ErrorPage></ErrorPage>,
          children: [
               {
                    path: "/",
                    element: <Home></Home>,
               },
               {
                    path: "/login",
                    element: <LoginPage></LoginPage>,
               },
               {
                    path: "/registration",
                    element: <RegistrationPage></RegistrationPage>,
               },
          ]
     },
]);

export default myCreatedRouter;