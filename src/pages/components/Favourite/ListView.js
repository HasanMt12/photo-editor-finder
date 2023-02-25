import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';

const ListView = () => {
  const [settingStatus, setSettingStatus] = React.useState(false);
  const [imgId, setImgId] = React.useState(0);
  const items = [...Array(10)]
    return (
      <div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-white">
              <tr>
                <th scope="col" class="p-4">
                  <div class="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="checkbox-all-search" class="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                  Product
                </th>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Size
                </th>
                <th scope="col" class="px-6 py-3">
                  Date & Time
                </th>
                <th scope="col" class="px-6 py-3">
                  Type
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr class="bg-white border-b text-gray-900 hover:bg-gray-50 ">
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-1" class="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
                  >
                    <img
                      class="w-16 h-10"
                      src="https://images.unsplash.com/photo-1676476752258-6ce9df0a4820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                      alt="Jese"
                    />
                  </th>
                  <td class="px-6 py-4 font-bold text-gray-900">Bedroom</td>
                  <td class="px-6 py-4">
                    <h4 className="font-semibold">10.00 MB</h4>
                  </td>
                  <td class="px-6 py-4">
                    <h3>02th Oct 2022 @ 4:20 PM</h3>
                  </td>
                  <td class="px-6 py-4">
                    <h3>Image</h3>
                  </td>
                  <td class="px-6 py-4 relative">
                    <button className="">
                      <BsThreeDotsVertical
                        onClick={() => {
                          setSettingStatus(!settingStatus);
                          setImgId(index);
                        }}
                      />
                    </button>
                    <div
                      style={{
                        border: " .1px solid rgba(0, 0, 0, 0.06)",
                        boxShadow: "0px 24px 48px rgba(0, 0, 0, 0.05)",
                      }}
                      className={`${
                        settingStatus && imgId === index
                          ? `block z-30 text-sm w-full`
                          : `hidden`
                      } absolute top-7 right-36 bg-white rounded-md`}
                    >
                      <li
                        className="list-none py-[8px] rounded-t cursor-pointer px-6 hover:bg-[#ddd] transition duration-300"
                        onClick={() => {
                          setSettingStatus(!settingStatus);
                        }}
                      >
                        View Details
                      </li>
                      <li
                        className="list-none py-[8px] cursor-pointer px-6 hover:bg-[#ddd] transition duration-300"
                        onClick={() => {}}
                      >
                        Open Gallary
                      </li>

                      <li
                        className="list-none py-[8px] cursor-pointer px-6 hover:bg-[#ddd] transition duration-300"
                        onClick={() => {}}
                      >
                        Download
                      </li>
                      <li
                        className="list-none py-[8px] cursor-pointer px-6 hover:bg-[#ddd] transition duration-300"
                        onClick={() => {}}
                      >
                        Remove from Favorite
                      </li>
                      <li
                        className="list-none py-[8px] cursor-pointer rounded-b px-6 hover:bg-[#ddd] transition duration-300"
                        onClick={() => {}}
                      >
                        Delete
                      </li>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <nav
            class="flex items-center justify-between py-10 pr-20"
            aria-label="Table navigation"
          >
            <ul class="inline-flex items-center justify-end w-full gap-2">
              <li>
                <a
                  href="#"
                  class="block  leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700"
                >
                  <CiCircleChevLeft size="40" />
                </a>
              </li>
              <a
                href="#"
                class="flex justify-center items-center  border w-10 h-10 border-gray-300 rounded-full leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700"
              >
                1
              </a>
              <a
                href="#"
                class="flex justify-center items-center  border w-10 h-10 border-gray-300 rounded-full leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700"
              >
                2
              </a>
              <li>
                <a
                  href="#"
                  class="flex justify-center items-center  border w-10 h-10 border-gray-300 rounded-full leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="px-3 py-2 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 "
                >
                  ...
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex justify-center items-center  border w-10 h-10 border-gray-300 rounded-full leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700"
                >
                  10
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block  leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700"
                >
                  <CiCircleChevRight size="40" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
};

export default ListView;