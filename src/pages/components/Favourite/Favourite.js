import React from 'react';
import { BsGrid3X3Gap } from "react-icons/bs";
import { Link, useLocation } from 'react-router-dom';
import GridView from './GridView';
import ListView from './ListView';

const Favourite = () => {
  const { pathname } = useLocation();
    return (
      <div className="">
        <div className=" ml-12 w-[95%] mx-auto mt-4 ">
          <div className="flex mb-4 justify-between items-center">
            <h1 className="text-3xl">Favourite</h1>
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <p className="w-16">Sort by:</p>
                <select
                  id="default"
                  class="bg-gray-50 text-gray-900 text-sm rounded font-bold w-36 p-2.5"
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-4 rounded-lg">
                <Link to="/dashboard/drive">
                  <BsGrid3X3Gap
                    color={pathname === "/dashboard/drive" ? "blue" : "gray"}
                    className="w-[22px] h-[22px]"
                  />
                </Link>
                <Link to="/dashboard/drive/list-view">
                  {/* <VscListFlat
                    color={
                      pathname === "/dashboard/drive/list-view"
                        ? "blue"
                        : "gray"
                    }
                    className="w-[22px] h-[24px]"
                  /> */}
                  <svg
                    color={
                      pathname === "/dashboard/drive/list-view"
                        ? "blue"
                        : "gray"
                    }
                    width="22"
                    height="22"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.375 12H23.375M1.375 17.5H23.375M1.375 23H23.375M3.875 1H20.875C21.538 1 22.1739 1.28973 22.6428 1.80546C23.1116 2.32118 23.375 3.02065 23.375 3.75C23.375 4.47935 23.1116 5.17882 22.6428 5.69454C22.1739 6.21027 21.538 6.5 20.875 6.5H3.875C3.21196 6.5 2.57607 6.21027 2.10723 5.69454C1.63839 5.17882 1.375 4.47935 1.375 3.75C1.375 3.02065 1.63839 2.32118 2.10723 1.80546C2.57607 1.28973 3.21196 1 3.875 1V1Z"
                      stroke="#324FF6"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div>
            {pathname === "/dashboard/drive" && <GridView />}
            {pathname === "/dashboard/drive/list-view" && <ListView />}
          </div>
        </div>
      </div>
    );
};

export default Favourite;