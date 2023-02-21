import React from 'react';
import { Link } from 'react-router-dom';
import gallery from "../../assets/gallery.png";
const Comments = () => {
    return (
        <div className="notification mt-10">
        <h1 className="text-[ #0C0E41] notify mx-auto">You have 1 new Notifications</h1>
        <div className="flex justify-between items-center gap-6 mt-[38px]">
          <img className="" src={gallery} alt="" />
          <div>
            <div className='flex justify-between items-center'>
            <p className="font-bold pb-2 date">Feb 22</p>
            <p className='time'>10:39 pm</p>
            </div>
            <p className="new">If you like what we do, please tell your friends and share.</p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-6 mt-[20px]">
          <img className="" src={gallery} alt="" />
          <div>
          <div className='flex justify-between items-center'>
            <p className="font-bold pb-2 date">Feb 22</p>
            <p className='time'>1 day ago</p>
            </div>
            <p className="newNotification">If you like what we do, please tell your friends and share.</p>
          </div>
        </div>
        <button className="flex mx-auto mt-[70px] "><Link to="/viewAll" className=" view ">
          View All
        </Link></button>
      
      </div>
    );
};

export default Comments;