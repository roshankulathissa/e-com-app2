import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Category from "../Pages/Category/Category";
import CategoryItem from "../Pages/CategoryItem";
import Home from "../Pages/Home/Home";
import Itempage from "../Pages/ItemPage/Itempage";
import Login from "../Pages/Login";
import User from "../Pages/User/User";
import UserProtected from "./UserProtected";
import Loadng from "../Components/Loading/Loadng";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:'item',
        element:<Itempage/>
      },
      
      {
        path:'category',
        children:[
          {
            index:true,
            element:<Category/>,
          },
          {
            path:':categaryID',
            children:[
              {
                index:true,
                element:<CategoryItem/>
              },
              
            ],   
          },
          
        ]
      },
      {
        path: "/profile",
        element: <Login />,
      },
      {
        path: "/loading",
        element: <Loadng />,
      },
      {
        element: <UserProtected />,
        children: [
          {
            path: "user",
            element: <User />,
          }, 
        ],
      },
    ],
    
  },
  
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
