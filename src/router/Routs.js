import { createBrowserRouter } from "react-router-dom";


import Notification from "../Dashboard/notification-&-comments/Notification";

import DashboardLayout from "../layout/DashboardLayout";

import ForgotPass from "../pages/components/signin/ForgotPass";
import SignIn from "../pages/components/signin/SignIn";
import Signup from "../pages/components/signup/Signup";
import Table from "./../Dashboard/table/Table";
import Main from "./../layout/Main";
import DashboardHome from "../Dashboard/DashboardHome";
import Projects from "../Dashboard/table/Projects";
import MyPlan from "../Dashboard/MyPlan/MyPlan";
import Team from "../Dashboard/Team/Team";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/forgotPass",
        element: <ForgotPass></ForgotPass>,
      },
      // {
      //   path: "/dashboard",
      //   element: <DashBoard></DashBoard>,
      // },
      {
        path: "/notification",
        element: <Notification></Notification>,
      },
      {
        path: "/table",
        element: <Table></Table>,
      },
    ],
  },
   {
       path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>, 
        children:[
            {
                path:'/dashboard',
                element:<DashboardHome></DashboardHome>
            },
            {
              path:'/dashboard/projects',
              element:<Projects></Projects>
            },
            {
              path: '/dashboard/plan',
              element: <MyPlan></MyPlan>
            },
            {
              path: '/dashboard/team',
              element: <Team></Team>
            }
           
             
        ]
    }
]);

export default router;
