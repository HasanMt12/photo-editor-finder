import React from "react";
import { Link, useLocation } from "react-router-dom";

const Tabs = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul class="flex flex-wrap -mb-px">
        <li class="mr-2">
          <Link
            to="/dashboard/pricing"
            class={`inline-block p-4 ${
              pathname === "/dashboard/pricing"
                ? " text-blue-600 border-b-2 border-blue-600 active"
                : "border-b-2 border-transparent"
            } rounded-t-lg`}
          >
            Photo Editing
          </Link>
        </li>
        <li class="mr-2">
          <Link
            to="/dashboard/photo-edits"
            class={`inline-block p-4 ${
              pathname === "/dashboard/photo-edits"
                ? " text-blue-600 border-b-2 border-blue-600 active"
                : "border-b-2 border-transparent"
            } rounded-t-lg`}
          >
            Photo Edits
          </Link>
        </li>
        <li class="mr-2">
          <Link
            to="/dashboard/video-edits"
            class={`inline-block p-4 ${
              pathname === "/dashboard/video-edits"
                ? " text-blue-600 border-b-2 border-blue-600 active"
                : "border-b-2 border-transparent"
            } rounded-t-lg`}
          >
            Videos
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
