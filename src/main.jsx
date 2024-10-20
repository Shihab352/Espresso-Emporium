import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Root from "./Layout/Root";
import ErrorElement from "./Components/ErrorElement/ErrorElement";
import Home from "./Layout/Home";
import AddCoffee from "./Layout/AddCoffee";
import Login from "./Layout/Login/Login";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import Register from "./Layout/Register";
import CoffeeDetails from "./Components/CoffeeDetails";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import MyCart from "./Layout/MyCart";
import AllCoffees from "./Layout/AllCoffees";
import UpdateCoffee from "./Layout/UpdateCoffee";
import Users from "./Layout/Users";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addCoffees',
        element: <PrivateRoute><AddCoffee></AddCoffee></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>,

      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/coffeeDetails/singleCoffee/:id',
        element: <PrivateRoute><CoffeeDetails></CoffeeDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/coffees/singleCoffee/${params.id}`)
      },
      {
        path: '/updateCoffee/:id',
        element: <PrivateRoute><UpdateCoffee></UpdateCoffee></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/coffees/updateCoffee/${params.id}`)
      },
      {
        path: '/myCart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,

      },
      {
        path: '/allCoffees',
        element: <AllCoffees></AllCoffees>,

      },
      {
        path:'/users',
        element:<Users></Users>,
        loader:()=>fetch("http://localhost:5000/users")
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);