import React from 'react';
import { BsGrid3X3Gap } from "react-icons/bs";
import { VscListFlat } from "react-icons/vsc";
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
                  <VscListFlat
                  
                    color={
                      pathname === "/dashboard/drive/list-view"
                        ? "blue"
                        : "gray"
                    }
                    className="w-[22px] h-[24px]"
                  />
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