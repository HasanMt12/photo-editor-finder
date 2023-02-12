// import "./App.css";

import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./router/Routs";



function App() {
  return (
    <div className="">
        <RouterProvider router={router}></RouterProvider>
        <Toaster position="top-center" reverseOrder={false}></Toaster>
    </div>
  );
}

export default App;
