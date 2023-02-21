import { createBrowserRouter } from "react-router-dom";

import Notification from "../Dashboard/notification-&-comments/Notification";

import DashboardLayout from "../layout/DashboardLayout";

import DashboardHome from "../Dashboard/DashboardHome";
import MyPlan from "../pages/components/MyPlan/MyPlan";
import PhotoEditing from "../Dashboard/Pricing/PhotoEditing";
import PhotoEdits from "../Dashboard/Pricing/PhotoEdits";
import VideoEdits from "../Dashboard/Pricing/VideoEdits";
import Projects from "../Dashboard/table/Projects";
import Team from "../Dashboard/Team/Team";
import ForgotPass from "../pages/components/signin/ForgotPass";
import SignIn from "../pages/components/signin/SignIn";
import Signup from "../pages/components/signup/Signup";
import Table from "./../Dashboard/table/Table";
import Main from "./../layout/Main";
import Invoice from "../pages/components/Invoice/Invoice";

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
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/dashboard/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/dashboard/plan",
        element: <MyPlan></MyPlan>,
      },
      {
        path: "/dashboard/invoice",
        element: <Invoice></Invoice>
      },
      {
        path: "/dashboard/team",
        element: <Team></Team>,
      },
      {
        path: "/dashboard/pricing",
        element: <PhotoEditing />,
      },
      {
        path: "/dashboard/photo-edits",
        element: <PhotoEdits />,
      },
      {
        path: "/dashboard/video-edits",
        element: <VideoEdits />,
      },
    ],
  },
]);

export default router;
