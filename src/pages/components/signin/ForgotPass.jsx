import React from "react";
import key from "../../../assets/key.png";
import backlogin from '../../../assets/arrow-forgot-pass.png'
import "./SignIn.css";
import { Link } from "react-router-dom";

const ForgotPass = () => {
  return (
    <div className="mt-[155px] mx-[560px] mb-[226px] bg-yellow-10">
      <div className="px-10">
      
          {" "}
          <img className="w-9 h-9 mx-36" src={key} alt="" />{" "}
      
        <h1 className="font-semibold py-2 text-xl text-center">Forgot password</h1>
        <p className="text-gray-500">No worries, we'll send you reset instructions.</p>
        <form>
        <div className="py-4 ">
            <label htmlFor="email" className="block mb-2 text-base">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="john@example.com"
              className="w-full  px-3 py-2 border rounded-md border-gray-400  text-gray-50 text-base  focus:outline-blue-600"
              data-temp-mail-org="0"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-2 text-base  tracking-wide  rounded-md bg-[#324FF6] hover:bg-blue-700 text-white"
          >
           Reset Password
          </button>
          <Link to='/' className="text-center text-gray-500 py-7 text-base flex items-center justify-center"> <img className="w-3 h-3 mx-3 " src={backlogin} alt="" />
         <span className="mb-1"> Back to login</span></Link>
        </form>
      </div>
    </div>
  );
};

export default ForgotPass;
