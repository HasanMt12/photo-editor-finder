import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const CreateProjectTabs = () => {
    const { pathname } = useLocation();
    return (
        <div className=''>
            
          <div className="flex justify-between items-center text-sm font-medium text-center text-gray-500    border-gray-200 dark:text-gray-400 dark:border-gray-700">

      <ul className="flex flex-wrap -mb-px border-b border-[#6B6F86] w-[552px] ml-16" >
        <li className="mr-[90px]">
          <Link
            to="/dashboard/product"
            className={`inline-block p-4 ${
              pathname === "/dashboard/product"
                ? " text-[#090D28] border-b-4  border-[#324FF6] active text-[20px]"
                : "border-b-2 border-transparent text-[20px]"
            } rounded-t-lg`}
          >
            Product
          </Link>
        </li>
        <li className="mr-[90px]">
          <Link
            to="/dashboard/productDetails"
            className={`inline-block p-4 ${
              pathname === "/dashboard/productDetails"
                ? " text-[#090D28] border-b-4 border-[#324FF6] active text-[20px]"
                : "border-b-2 border-transparent text-[20px] "
            } rounded-t-lg`}
          >
           Product Details
          </Link>
        </li>
        <li className="">
          <Link
            to="/dashboard/upload"
            className={`inline-block p-4 ${
              pathname === "/dashboard/upload"
                ? " text-[#090D28] border-b-4 border-[#324FF6] active text-[20px]"
                : "border-b-2 border-transparent text-[20px]"
            } rounded-t-lg`}
          >
            Upload
          </Link>
        </li>
      </ul>
      <div> <h4 className='text-[22px] text-[#6B6f86]'><span className='text-[#090D28] '>Step: </span> {pathname === "/dashboard/product" && <span className='text-[#324FF6]'>01</span>}
      {pathname === "/dashboard/productDetails" && <span className='text-[#324FF6]'>02</span>}
      {pathname === "/dashboard/upload" && <span className='text-[#324FF6]'>03</span>}
      /03</h4> </div>
    </div>
    </div>
    );
};

export default CreateProjectTabs;