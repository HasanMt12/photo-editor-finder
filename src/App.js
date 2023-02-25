// import "./App.css";

import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./router/Routs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function App() {
   useEffect(() => {
     AOS.init();
     AOS.refresh();
   }, []);
  return (
    <div className="">
        <RouterProvider router={router}></RouterProvider>
        <Toaster position="top-center" reverseOrder={false}></Toaster>
    </div>
  );
}

export default App;
