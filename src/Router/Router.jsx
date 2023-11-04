import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/HomePage/Home";
import MainLayout from "../MainLayout/MainLayout";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegistrationPage from "../RegistrationPage/RegistrationPage";


const myCreatedRouter = createBrowserRouter([
     {
          path: "/",
          element: <MainLayout></MainLayout>,
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