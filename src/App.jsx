import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CustomError from "./components/Error";
import Layout from "./components/Layout";
import Detail from "./pages/Detail/Detail";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import AuthLayout from "./components/AuthLayout";
import SignIn from "./pages/Signin/Signin";
import SignUp from "./pages/Signup/Signup";
import Category from "./pages/Category/Category";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/product/:slug",
          element: <Detail />,
        },
        {
          path: "/shopping-cart",
          element: <Cart />,
        },
        {
          path: "/signin",
          element: <AuthLayout />,
          children: [{ path: "/signin", element: <SignIn /> }],
        },
        {
          path: "/signup",
          element: <AuthLayout />,
          children: [{ path: "/signup", element: <SignUp /> }],
        },
        {
          path:"products/:categoryid",
          element: <Category />
        }
        ,
        {
          path: "*",
          element: (
            <CustomError
              title={"ERROR 404!"}
              description={"looks like the page was not found"}
            />
          ),
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}