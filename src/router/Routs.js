import { createBrowserRouter } from "react-router-dom";

import Notification from "../Dashboard/notification-&-comments/Notification";

import DashboardLayout from "../layout/DashboardLayout";

import Product from "../Dashboard/CreatProject+/Product";
import ProductDetails from "../Dashboard/CreatProject+/ProductDetails";
import Upload from "../Dashboard/CreatProject+/Upload";
import DashboardHome from "../Dashboard/DashboardHome";
import Comments from "../Dashboard/notification-&-comments/Comments";
import PhotoEditing from "../Dashboard/Pricing/PhotoEditing";
import PhotoEdits from "../Dashboard/Pricing/PhotoEdits";
import VideoEdits from "../Dashboard/Pricing/VideoEdits";
import Projects from "../Dashboard/table/Projects";
import Team from "../Dashboard/Team/Team";
import Favourite from "../pages/components/Favourite/Favourite";
import Invoice from "../pages/components/Invoice/Invoice";
import MyPlan from "../pages/components/MyPlan/MyPlan";
import ForgotPass from "../pages/components/signin/ForgotPass";
import SignIn from "../pages/components/signin/SignIn";
import Signup from "../pages/components/signup/Signup";
import Table from "./../Dashboard/table/Table";
import Main from "./../layout/Main";

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

      {
        path: "/notification",
        element: <Notification></Notification>,
      },
      {
        path: "/comment",
        element: <Comments></Comments>,
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
        element: <Invoice></Invoice>,
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
        path: "/dashboard/product",
        element: <Product></Product>,
      },
      {
        path: "/dashboard/productDetails",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/dashboard/upload",
        element: <Upload></Upload>,
      },
      {
        path: "/dashboard/video-edits",
        element: <VideoEdits />,
      },
      {
        path: "/dashboard/drive",
        element: <Favourite />,
      },
      {
        path: "/dashboard/drive/list-view",
        element: <Favourite />,
      },
    ],
  },
]);

export default router;
