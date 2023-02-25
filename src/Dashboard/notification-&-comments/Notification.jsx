
import React from "react";
import { Link } from "react-router-dom";
import gallery from "../../assets/gallery.png";
import Comments from "./Comments";

import "./Notification.css";
const Notification = () => {
  return (
  <div>
      <div className="notification">
      <h1 className="text-[ #0C0E41] notify mx-auto">You have 112 new Notifications</h1>
      <div className="flex justify-between items-center gap-6 mt-[38px]">
        <img className="" src={gallery} alt="" />
        <div>
          <p className="font-bold pb-2 date">Feb 22</p>
          <p className="new">If you like what we do, please tell your friends and share.</p>
        </div>
      </div>
      <div className="flex justify-between items-center gap-6 mt-[20px]">
        <img className="" src={gallery} alt="" />
        <div>
          <p className="font-bold pb-2 date">Feb 22</p>
          <p className="new">If you like what we do, please tell your friends and share.</p>
        </div>
      </div>
      <button className="flex mx-auto mt-[70px] mb-[31px]"><Link to="/viewAll" className=" view ">
        View All
      </Link></button>
    
    </div>
   <Comments></Comments>
  </div>
  );
};

export default Notification;
