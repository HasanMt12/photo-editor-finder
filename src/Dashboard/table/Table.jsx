import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import img from "../../assets/Project Icon.png";
import search from "../../assets/search.png";
import axios from "axios";
import "./Table.css";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import action1 from "../../assets/action1.png";
import action2 from "../../assets/action2.png";
import action3 from "../../assets/action3.png";
import Folder from "../../assets/Folder 1.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const dataTable = [
  {
    projects: "10th Oct 2022 @ 2:00 PM",
    packages: "Photo Editing",
    photos: "10",
    date: "10th Oct 2022 @ 2:00 PM",
    timeZone: "US/California",
    status: "editing",
  },
  {
    projects: "10th Oct 2022 @ 2:00 PM",
    packages: "Photo Editing",
    photos: "10",
    date: "10th Oct 2022 @ 2:00 PM",
    timeZone: "US/California",
    status: "editing",
  },
  {
    projects: "10th Oct 2022 @ 2:00 PM",
    packages: "Photo Editing",
    photos: "10",
    date: "10th Oct 2022 @ 2:00 PM",
    timeZone: "US/California",
    status: "reject",
  },
  {
    projects: "10th Oct 2022 @ 2:00 PM",
    packages: "Photo Editing",
    photos: "10",
    date: "10th Oct 2022 @ 2:00 PM",
    timeZone: "US/California",
    status: "processing",
  },
  {
    projects: "10th Oct 2022 @ 2:00 PM",
    packages: "Photo Editing",
    photos: "10",
    date: "10th Oct 2022 @ 2:00 PM",
    timeZone: "US/California",
    status: "editing",
  },
];

const Table = () => {
  const [tableData, setTableData] = useState([]);

  const caseInsensitiveSort = (rowA, rowB) => {
    const a = rowA.first_name.toLowerCase();
    const b = rowB.last_name.toLowerCase();

    if (a > b) {
      return 1;
    }

    if (b > a) {
      return -1;
    }

    return 0;
  };
  const customStyles = {
    rows: {
      style: {
        minHeight: "72px", // override the row heigh
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
        margin: "2px",
        backgroundColor: " #FFFFFF",
        color: "black",
        borderRadius: "5px",
        text: "bold",
        fontSize: "15px",
      },
    },
    cells: {
      style: {
        paddingLeft: "15px", // override the cell padding for data cells
        paddingRight: "10px",
        textAlign: "center",
        backgroundColor: " rgba(59, 130, 246, 0.04)",
        // borderRadius: "5px",
        color: "black",
        // margin: "2px",
      },
    },
  };
  const getTableData = async () => {
    try {
      const response = await axios.get("/data.json");
      setTableData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //data get

  console.log(tableData);

  const columns = [
    // {
    //   name: "id",
    //   selector: (row, i) => i + 1,
    // },
    {
      name: "Projects",
      selector: (row) => (
        <div className="flex justify-center items-center ">
          <img className="h-8 w-8 cursor-pointer" src={img} alt=""></img>
          <h1 className="px-2">{row.projects}</h1>
        </div>
      ),

      sortable: true,
    },
    {
      name: "Packages",
      selector: (row) => row.packages,
      sortable: true,
    },
    {
      name: "No. of Photos",
      selector: (row) => row.photos,
    },

    {
      name: "Date and Time",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "TimeZone",
      selector: (row) => row.timeZone,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => (
        <div>
          {row.status === "Reject" && (
            <button className="rejectButton   mx-auto  w-[70px] h-[22px]">
              Reject
            </button>
          )}
          {row.status === "Editing" && (
            <button className="editButton  w-[70px] h-[22px]">Editing</button>
          )}

          {row.status === "Processing" && (
            <button className="processButton mx-auto  w-[80px] h-[22px]">
              Processing
            </button>
          )}
        </div>
      ),
      sortable: true,
    },

    {
      name: "Action",
      selector: (row) => (
        <div className="cursor-pointer flex justify-center items-center ">
          <img src={action1} alt="action"></img>
          <img className="mx-[19px]" src={action2} alt="action"></img>
          <img src={action3} alt="action"></img>

          {/* {row.delete} */}
        </div>
      ),
      sortable: true,
    },
  ];

  useEffect(() => {
    getTableData();
  }, []);

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className=" ">
      <div className="flex justify-between items-center">
        <div className="ml-[130px] mt-[39px] gap-2 flex items-center justify-start">
          {/* functionality uses */}
          {/* New Button */}
          <div className="w-[115px]  ">
            <div
              className={`  py-2 px-4 ${
                activeTab === 0
                  ? " text-blue-600 font-semibold "
                  : "text-gray-500"
              }`}
              onClick={() => handleTabClick(0)}
            >
              <div className="flex justify-between items-center">
                <button className="font-[poppins] text-xl tracking-wide "> New</button>
                <span
                  className={` w-[20px] h-[20px] py-3 px-3  rounded-full  flex justify-center items-center  ${
                    activeTab === 0
                      ? "bg-blue-600   text-white"
                      : "bg-gray-500 text-white "
                  }`}
                >
                  <span className="text-center font-semibold font-[Satoshi]">
                    1
                  </span>
                </span>
              </div>
            </div>

            <hr
              className={`  h-1 ${activeTab === 0 ? "bg-blue-500" : "hidden"}`}
            />
          </div>

          {/* Editing Button */}
          <div className="w-[140px]  ">
            <div
              className={`  py-2 px-4 ${
                activeTab === 1
                  ? " text-blue-600 font-semibold "
                  : "text-gray-500"
              }`}
              onClick={() => handleTabClick(1)}
            >
              <div className="flex justify-between items-center">
                <button className="font-[poppins] text-xl tracking-wider"> Editing</button>
                <span
                  className={` w-[20px] h-[20px] py-3 px-3  rounded-full  flex justify-center items-center text- ${
                    activeTab === 1
                      ? "bg-blue-600   text-white"
                      : "bg-gray-500 text-white "
                  }`}
                >
                  <span className="text-center font-semibold font-[Satoshi]">
                    1
                  </span>
                </span>
              </div>
            </div>

            <hr
              className={`  h-1 ${activeTab === 1 ? "bg-blue-500" : "hidden"}`}
            />
          </div>
          {/* end */}
          {/* Completed Button */}
          <div className="w-[185px]  ">
            <div
              className={`  py-2 px-4 ${
                activeTab === 2
                  ? " text-blue-600 font-semibold "
                  : "text-gray-500"
              }`}
              onClick={() => handleTabClick(2)}
            >
              <div className="flex justify-between items-center">
                <button className="font-[poppins] text-xl tracking-wider"> Completed</button>
                <span
                  className={` w-[20px] h-[20px] py-3 px-3  rounded-full  flex justify-center items-center text- ${
                    activeTab === 2
                      ? "bg-blue-600   text-white"
                      : "bg-gray-500 text-white "
                  }`}
                >
                  <span className="text-center font-semibold font-[Satoshi]">
                    1
                  </span>
                </span>
              </div>
            </div>

            <hr
              className={`  h-1 ${activeTab === 2 ? "bg-blue-500" : "hidden"}`}
            />
          </div>
        </div>

        <div>
          {" "}
          {activeTab === 1 && (
            <button className="create-project mr-[50px] mt-[39px]  ml-[665px] ">
              {" "}
              <span className="text-3">Create Project +</span>{" "}
            </button>
          )}
          {activeTab === 2 && (
            <div className="flex justify-center items-center gap-9 mt-[39px]">
            
             
              
                <div className="relative flex justify-between  items-center search-div ">
                  <span className="absolute left-0 flex items-center pl-2">
                    <button
                      type="button"
                      title="search"
                      className="p-1 focus:outline-none "
                    >
                     <img className="search-img" src={search} alt="" />
                    </button>
                  </span>
                  <input
                    type="search"
                    name="Search"
                    placeholder="Search Here"
                    className=" py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none text-[#6B6F86] search-text   "
                  />
                </div>

              <button className="create-project mr-[50px]  ">
                {" "}
                <span className="text-3">Create Project +</span>{" "}
              </button>
            </div>
          )}
        </div>
      </div>

      <div>
        {activeTab === 0 && (
          <div className="w-[342px] h-[141px]   mx-auto my-48">
            <div>
              <img
                style={{ width: " 135px", height: " 91px" }}
                src={Folder}
                alt=""
              />
              <hr className="line w-[178.71px] h-[0.22px] -ml-5" />
            </div>
            <h1 className="no-projects mt-[12.6px] text-center -ml-8">
              No Projects Found{" "}
            </h1>
            <p className="start -ml-16">You can start creating a project now</p>

            <button
              style={{ fontFamily: "Poppins" }}
              class="flex items-center px-5 py-3 my-5 -ml-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 text-base"
            >
              <span class="mx-1">Create Project</span>
              <span>+</span>
            </button>
          </div>
        )}
        {activeTab === 1 && (
          <div className=" ml-[130px] mr-[43px] mt-[40px]">
            <DataTable
              columns={columns}
              data={tableData}
              fixedHeader
              pagination
              caseInsensitiveSort={caseInsensitiveSort}
              // selectableRows
              selectableRowsHighlight
              customStyles={customStyles}
            />
          </div>
        )}

        {activeTab === 2 && (
          <div className=" ml-[130px] mr-[43px] mt-[40px]">
            <DataTable
              columns={columns}
              data={tableData}
              fixedHeader
              pagination
              caseInsensitiveSort={caseInsensitiveSort}
              // selectableRows
              selectableRowsHighlight
              customStyles={customStyles}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;
