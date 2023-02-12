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
import avatar from "../../assets/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction 1@2x.png"
import logo2 from "../../assets/Captae-removebg-preview.png";

const Projects = () => {
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

    const [modal, setModal] = useState(false);

        const toggleModal = () => {
            setModal(!modal);
        };

        if (modal) {
            document.body.classList.add("active-modal");
        } else {
            document.body.classList.remove("active-modal");
        }

  return (
    <div className=" sm:ml-64">
       <div className="ml-8 ">

         {/* first section section */}
          <div className="flex pl-20 justify-between h-40  rightSide">
            <div className="text-white">
              <h2 className="Text1">Projects</h2>
              <h4 className="Text2">Dashboard Concept for Photoshare</h4>
            </div>
            <div className="grid grid-cols-3 gap-4 mx-8 w-auto">
              <div className="flex justify-center mt-4">
                <div onClick={toggleModal} className="mt-1 mr-3">
                  <svg
                    className="hoverhighlight cursor-pointer"
                    width="24"
                    height="22"
                    viewBox="0 0 24 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="white"
                      d="M21 1.375C21.3978 1.375 21.7794 1.51987 22.0607 1.77773C22.342 2.03559 22.5 2.38533 22.5 2.75V13.75C22.5 14.1147 22.342 14.4644 22.0607 14.7223C21.7794 14.9801 21.3978 15.125 21 15.125H17.25C16.7843 15.125 16.3249 15.2244 15.9084 15.4153C15.4918 15.6062 15.1294 15.8835 14.85 16.225L12 19.7079L9.15 16.225C8.87056 15.8835 8.50821 15.6062 8.09164 15.4153C7.67507 15.2244 7.21574 15.125 6.75 15.125H3C2.60218 15.125 2.22064 14.9801 1.93934 14.7223C1.65804 14.4644 1.5 14.1147 1.5 13.75V2.75C1.5 2.38533 1.65804 2.03559 1.93934 1.77773C2.22064 1.51987 2.60218 1.375 3 1.375H21ZM3 0C2.20435 0 1.44129 0.289731 0.87868 0.805456C0.316071 1.32118 0 2.02065 0 2.75L0 13.75C0 14.4793 0.316071 15.1788 0.87868 15.6945C1.44129 16.2103 2.20435 16.5 3 16.5H6.75C6.98287 16.5 7.21254 16.5497 7.42082 16.6452C7.6291 16.7406 7.81028 16.8792 7.95 17.05L10.8 20.5329C10.9397 20.7036 11.1209 20.8422 11.3292 20.9377C11.5375 21.0332 11.7671 21.0829 12 21.0829C12.2329 21.0829 12.4625 21.0332 12.6708 20.9377C12.8791 20.8422 13.0603 20.7036 13.2 20.5329L16.05 17.05C16.1897 16.8792 16.3709 16.7406 16.5792 16.6452C16.7875 16.5497 17.0171 16.5 17.25 16.5H21C21.7956 16.5 22.5587 16.2103 23.1213 15.6945C23.6839 15.1788 24 14.4793 24 13.75V2.75C24 2.02065 23.6839 1.32118 23.1213 0.805456C22.5587 0.289731 21.7956 0 21 0L3 0Z"
                    ></path>
                    <path
                      fill="white"
                      d="M7.5 8.25C7.5 8.61467 7.34196 8.96441 7.06066 9.22227C6.77936 9.48013 6.39782 9.625 6 9.625C5.60218 9.625 5.22064 9.48013 4.93934 9.22227C4.65804 8.96441 4.5 8.61467 4.5 8.25C4.5 7.88533 4.65804 7.53559 4.93934 7.27773C5.22064 7.01987 5.60218 6.875 6 6.875C6.39782 6.875 6.77936 7.01987 7.06066 7.27773C7.34196 7.53559 7.5 7.88533 7.5 8.25V8.25ZM13.5 8.25C13.5 8.61467 13.342 8.96441 13.0607 9.22227C12.7794 9.48013 12.3978 9.625 12 9.625C11.6022 9.625 11.2206 9.48013 10.9393 9.22227C10.658 8.96441 10.5 8.61467 10.5 8.25C10.5 7.88533 10.658 7.53559 10.9393 7.27773C11.2206 7.01987 11.6022 6.875 12 6.875C12.3978 6.875 12.7794 7.01987 13.0607 7.27773C13.342 7.53559 13.5 7.88533 13.5 8.25ZM19.5 8.25C19.5 8.61467 19.342 8.96441 19.0607 9.22227C18.7794 9.48013 18.3978 9.625 18 9.625C17.6022 9.625 17.2206 9.48013 16.9393 9.22227C16.658 8.96441 16.5 8.61467 16.5 8.25C16.5 7.88533 16.658 7.53559 16.9393 7.27773C17.2206 7.01987 17.6022 6.875 18 6.875C18.3978 6.875 18.7794 7.01987 19.0607 7.27773C19.342 7.53559 19.5 7.88533 19.5 8.25Z"
                    ></path>
                  </svg>
                </div>
                <div className="divider"></div>
                <div className="mt-1 mx-3">
                  <svg
                    className="hoverhighlight cursor-pointer"
                    width="22"
                    height="21"
                    viewBox="0 0 22 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="dontfill"
                      d="M18 11.375V7C18 5.37555 17.2625 3.81763 15.9497 2.66897C14.637 1.52031 12.8565 0.875 11 0.875C9.14348 0.875 7.36301 1.52031 6.05025 2.66897C4.7375 3.81763 4 5.37555 4 7V11.375C3.97026 13.5363 3.27968 15.6512 2 17.5H20C18.7203 15.6512 18.0297 13.5363 18 11.375Z"
                      stroke="white"
                      stroke-width="1.6"
                      stroke-miterlimit="10"
                      stroke-linecap="square"
                    ></path>
                    <path
                      d="M8.17383 19.25C8.38162 19.7603 8.76478 20.2019 9.27074 20.5142C9.7767 20.8264 10.3807 20.994 10.9998 20.994C11.619 20.994 12.223 20.8264 12.7289 20.5142C13.2349 20.2019 13.618 19.7603 13.8258 19.25H8.17383Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
                <div className="divider"></div>
              </div>
              <div className="flex justify-center gap-4 mt-4">
               <img className='w-[30px] h-[30px]' src={logo2} alt="logo2"></img>
              <div>
                  <h4 className="Text-3">30 Free Credits</h4>
                  <h4 className="Text-4">Buy more cre dits!!</h4>
                </div>
              </div>
              <div className="flex justify-center gap-4 mt-4 ml-4">
                <div className="rounded-full">
                  <img
                    className="w-[50px] h-[50px] rounded-full ring-gray-200"
                    src={avatar}
                    alt="user"
                  ></img>
                </div>
                <div>
                  <h4 className=" text-lg text-white font-medium">Joshua A.</h4>
                  <h4 className="font-medium text-xs text-gray-200">
                    8:29 AM EST
                  </h4>
                </div>
              </div>
            </div>
          </div>
    
      <div className="flex justify-between items-center bg-white">
        <div className="my-5 gap-2 flex items-center justify-start">
          {/* functionality uses */}
          {/* New Button */}
          <div className="w-[115px]">
          <div  >
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

          
           
          </div>  <hr
              className={`  h-1 mt-4 -mb-6 ${activeTab === 0 ? "bg-blue-500" : "hidden"}`}
            />
</div>
          {/* Editing Button */}
          <div className="w-[140px]  ">
          <div >
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

            
          </div>
          <hr
              className={`  h-1 mt-4 -mb-6 ${activeTab === 1 ? "bg-blue-500" : "hidden"}`}
            />
          </div>
          {/* end */}
          {/* Completed Button */}
          <div  className="w-[185px]  ">
          <div>
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

            
          </div><hr
              className={`  h-1 mt-4 -mb-6 ${activeTab === 2 ? "bg-blue-500" : "hidden"}`}
            />
        </div>
</div>
        <div>
          {" "}
          {activeTab === 1 && (
            <button className="create-project mr-[50px] my-5">
              {" "}
              <span className="text-3">Create Project +</span>{" "}
            </button>
          )}
          {activeTab === 2 && (
            <div className="flex bg-transparent justify-center items-center gap-9 my-5">
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
           
          <div className="flex  justify-center items-center py-36 mx-auto">
            <div className="">
           
              <svg className="mx-auto" width="135" height="92" viewBox="0 0 135 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.3">
                <path d="M16.2805 77.9221L0.309278 10.6322C-0.360633 7.81444 0.539693 4.77961 2.74571 3.03022C3.83132 2.14772 5.18559 1.65988 6.58596 1.64688L50.7916 0.259284C51.9539 0.235752 53.0978 0.551027 54.0831 1.16646C55.0684 1.78189 55.8523 2.67073 56.3386 3.72402L60.7421 12.8413L116.84 12.8966C120.962 12.8966 125.288 18.6002 124.798 23.3887L129.598 79.4289C128.902 86.1881 122.92 91.2745 117.104 91.2745H28.4712C22.395 91.2915 17.2533 86.0008 16.2805 77.9221Z" fill="black"/>
                </g>
                <path d="M17.0441 79.8801L12.8198 5.33304L117.445 3.75391L121.111 78.467L17.0441 79.8801Z" fill="#E0E0E0"/>
                <path d="M16.5663 8.38914C16.5555 8.52432 16.5055 8.65344 16.4224 8.76073C16.3392 8.86802 16.2265 8.94883 16.0981 8.99328C15.9697 9.03774 15.831 9.0439 15.6991 9.01104C15.5673 8.97818 15.4478 8.90771 15.3554 8.80823C15.263 8.70876 15.2017 8.58459 15.1789 8.4509C15.1561 8.31722 15.1728 8.1798 15.227 8.05544C15.2812 7.93107 15.3706 7.82515 15.4841 7.75062C15.5977 7.67609 15.7306 7.63617 15.8665 7.63574C15.9622 7.63903 16.0562 7.66118 16.1433 7.70088C16.2303 7.74059 16.3086 7.79708 16.3736 7.86711C16.4387 7.93714 16.4892 8.01933 16.5223 8.10893C16.5553 8.19852 16.5703 8.29375 16.5663 8.38914Z" fill="#EBEBEB"/>
                <path d="M19.2802 8.38914C19.2694 8.52432 19.2194 8.65344 19.1362 8.76073C19.0531 8.86802 18.9404 8.94883 18.812 8.99328C18.6835 9.03774 18.5449 9.0439 18.413 9.01104C18.2811 8.97818 18.1617 8.90771 18.0693 8.80823C17.9769 8.70876 17.9155 8.58459 17.8927 8.4509C17.8699 8.31722 17.8866 8.1798 17.9409 8.05544C17.9951 7.93107 18.0844 7.82515 18.198 7.75062C18.3116 7.67609 18.4444 7.63617 18.5804 7.63574C18.676 7.63903 18.7701 7.66118 18.8571 7.70088C18.9442 7.74059 19.0225 7.79708 19.0875 7.86711C19.1526 7.93714 19.2031 8.01933 19.2361 8.10893C19.2692 8.19852 19.2842 8.29375 19.2802 8.38914Z" fill="#EBEBEB"/>
                <path d="M21.9984 8.38914C21.9877 8.52432 21.9376 8.65344 21.8545 8.76073C21.7713 8.86802 21.6587 8.94883 21.5302 8.99328C21.4018 9.03774 21.2632 9.0439 21.1313 9.01104C20.9994 8.97818 20.8799 8.90771 20.7875 8.80823C20.6951 8.70876 20.6338 8.58459 20.611 8.4509C20.5882 8.31722 20.6049 8.1798 20.6591 8.05544C20.7133 7.93107 20.8027 7.82515 20.9163 7.75062C21.0298 7.67609 21.1627 7.63617 21.2987 7.63574C21.4915 7.6435 21.6733 7.72713 21.8045 7.86832C21.9356 8.00951 22.0054 8.19678 21.9984 8.38914Z" fill="#EBEBEB"/>
                <path d="M54.0686 8.38916L60.3794 45.8032L10.7249 53.2434L4.41406 15.8294L54.0686 8.38916Z" fill="#EBEBEB"/>
                <path d="M54.0729 8.38916L53.834 8.43173L53.1385 8.54239L50.4417 8.96803L40.2821 10.5216L4.43974 15.9528L4.54642 15.8124C6.43241 26.9472 8.58722 39.7122 10.8743 53.2221L10.7079 53.1072L60.3667 45.6882L60.2643 45.8202C58.3911 34.5492 56.8507 25.2106 55.7498 18.6769C55.2122 15.408 54.7898 12.8456 54.4996 11.0877C54.3588 10.2152 54.2521 9.5469 54.1753 9.08721C54.0985 8.62751 54.0729 8.38916 54.0729 8.38916C54.0729 8.38916 54.1199 8.6105 54.2009 9.05742C54.282 9.50435 54.3972 10.1726 54.5466 11.0324C54.8495 12.7818 55.289 15.3356 55.8522 18.5876C56.9744 25.1339 58.5746 34.4938 60.5032 45.7861L60.5245 45.8968H60.4051L10.7463 53.3796L10.6055 53.4009L10.5799 53.2647C8.3056 39.7548 6.15932 26.9898 4.28613 15.8507V15.7315H4.41414L40.3632 10.411L50.5057 8.92121L53.1811 8.53814L53.8638 8.44024L54.0729 8.38916Z" fill="#263238"/>
                <path d="M12.0391 50.6298L58.2076 43.7131L52.6904 11.011L6.52197 17.9277L12.0391 50.6298Z" fill="#455A64"/>
                <g opacity="0.3">
                <path d="M12.0391 50.6298L24.7332 27.8877L36.8685 39.1076L42.4966 31.2928L58.2075 43.7131L12.0391 50.6298Z" fill="black"/>
                </g>
                <g opacity="0.3">
                <path d="M38.5453 23.2652C38.6111 23.7271 38.5837 24.1975 38.4649 24.6487C38.346 25.0999 38.1379 25.5229 37.853 25.8928C37.568 26.2627 37.2118 26.5721 36.8053 26.8029C36.3988 27.0336 35.9502 27.181 35.4859 27.2365C34.546 27.3969 33.5805 27.1858 32.7942 26.6478C32.0079 26.1097 31.4627 25.2873 31.2744 24.3549C31.2079 23.8932 31.2347 23.423 31.3531 22.9718C31.4714 22.5206 31.679 22.0975 31.9637 21.7275C32.2483 21.3575 32.6043 21.0481 33.0105 20.8173C33.4168 20.5865 33.8653 20.439 34.3295 20.3836C35.2701 20.2208 36.2373 20.4309 37.0248 20.9692C37.8123 21.5075 38.3579 22.3314 38.5453 23.2652Z" fill="black"/>
                </g>
                <path d="M20.0608 83.4171L18.6484 10.8833L125.655 10.6577L125.216 82.336L20.0608 83.4171Z" fill="#EBEBEB"/>
                <path d="M24.8529 13.7224C24.8421 13.8576 24.7921 13.9867 24.709 14.094C24.6258 14.2013 24.5132 14.2821 24.3847 14.3265C24.2563 14.371 24.1177 14.3772 23.9858 14.3443C23.8539 14.3114 23.7344 14.241 23.642 14.1415C23.5496 14.042 23.4883 13.9178 23.4655 13.7842C23.4427 13.6505 23.4594 13.513 23.5136 13.3887C23.5678 13.2643 23.6572 13.1584 23.7707 13.0839C23.8843 13.0093 24.0172 12.9694 24.1531 12.969C24.3459 12.9767 24.5278 13.0604 24.659 13.2016C24.7901 13.3428 24.8599 13.53 24.8529 13.7224Z" fill="#E0E0E0"/>
                <path d="M27.3573 13.7224C27.3465 13.8578 27.2964 13.987 27.2131 14.0944C27.1297 14.2018 27.0168 14.2826 26.8881 14.3269C26.7594 14.3712 26.6206 14.3771 26.4886 14.3439C26.3566 14.3107 26.2372 14.2398 26.145 14.1399C26.0528 14.04 25.9918 13.9155 25.9694 13.7815C25.9471 13.6476 25.9644 13.51 26.0193 13.3858C26.0741 13.2615 26.1641 13.1559 26.2783 13.0818C26.3924 13.0078 26.5257 12.9686 26.6618 12.969C26.7571 12.9728 26.8507 12.9954 26.9372 13.0353C27.0238 13.0753 27.1016 13.1319 27.1662 13.2018C27.2308 13.2718 27.2809 13.3538 27.3137 13.4431C27.3465 13.5325 27.3613 13.6274 27.3573 13.7224Z" fill="#E0E0E0"/>
                <path d="M22.1903 13.7224C22.1795 13.8576 22.1295 13.9867 22.0464 14.094C21.9632 14.2013 21.8506 14.2821 21.7221 14.3265C21.5937 14.371 21.4551 14.3772 21.3232 14.3443C21.1913 14.3114 21.0718 14.241 20.9794 14.1415C20.887 14.042 20.8257 13.9178 20.8029 13.7842C20.7801 13.6505 20.7968 13.513 20.851 13.3887C20.9052 13.2643 20.9946 13.1584 21.1082 13.0839C21.2217 13.0093 21.3546 12.9694 21.4905 12.969C21.6833 12.9767 21.8652 13.0604 21.9964 13.2016C22.1275 13.3428 22.1973 13.53 22.1903 13.7224Z" fill="#E0E0E0"/>
                <path d="M22.5488 85.1879V16.221L129.116 15.9954L123.394 86.6691L22.5488 85.1879Z" fill="#FAFAFA"/>
                <path d="M17.3772 77.5518L23.752 25.7298C24.247 21.6776 27.14 18.6726 30.5493 18.6726H127.891C132.009 18.6726 135.205 23.0014 134.718 27.9176L129.598 79.1181C128.105 89.7592 124.004 91.2915 118.188 91.2915H27.2253C21.1406 91.2915 15.2437 89.7677 17.3772 77.5518Z" fill="#CBCBCB"/>
                <g opacity="0.7">
                <path d="M82.2645 46.05L85.0636 51.7153C85.1772 51.941 85.3434 52.1361 85.5484 52.2843C85.7533 52.4324 85.991 52.5293 86.2413 52.5666L92.5052 53.4647C92.7932 53.507 93.0636 53.629 93.2856 53.8169C93.5077 54.0048 93.6725 54.2509 93.7613 54.5275C93.8502 54.8041 93.8596 55.1 93.7884 55.3816C93.7172 55.6632 93.5683 55.9192 93.3586 56.1207L88.8271 60.5261C88.6466 60.703 88.5115 60.9207 88.4335 61.1608C88.3555 61.4009 88.3368 61.6563 88.3791 61.9052L89.4501 68.1281C89.4995 68.4146 89.4675 68.7092 89.3578 68.9786C89.2481 69.2479 89.065 69.4813 88.8292 69.6522C88.5935 69.8232 88.3145 69.9249 88.0238 69.9459C87.7331 69.9669 87.4423 69.9063 87.1843 69.7711L81.5818 66.8341C81.3581 66.7167 81.1092 66.6553 80.8564 66.6553C80.6037 66.6553 80.3547 66.7167 80.131 66.8341L74.5541 69.7796C74.2964 69.9154 74.0057 69.9764 73.715 69.9556C73.4243 69.9347 73.1452 69.833 72.9096 69.6618C72.674 69.4906 72.4913 69.2569 72.3822 68.9873C72.2732 68.7177 72.2421 68.4229 72.2927 68.1366L73.3594 61.9137C73.4027 61.6648 73.3846 61.4091 73.3065 61.1688C73.2284 60.9285 73.0928 60.7108 72.9114 60.5346L68.3799 56.1292C68.1718 55.9271 68.0243 55.671 67.9541 55.3899C67.8838 55.1087 67.8936 54.8136 67.9822 54.5377C68.0709 54.2617 68.2349 54.0159 68.4559 53.8279C68.6769 53.6399 68.9461 53.517 69.2333 53.4732L75.4971 52.5666C75.7472 52.53 75.9846 52.4334 76.189 52.2851C76.3933 52.1369 76.5586 51.9413 76.6706 51.7153L79.4739 46.05C79.6039 45.792 79.8033 45.5752 80.0497 45.4237C80.296 45.2721 80.5798 45.1919 80.8692 45.1919C81.1587 45.1919 81.4424 45.2721 81.6888 45.4237C81.9352 45.5752 82.1345 45.792 82.2645 46.05Z" fill="white"/>
                </g>
                </svg>

              <hr className="line w-[178.71px] h-[0.22px] mx-auto  " />
          
            <h1 className="no-projects  mt-[12.6px] text-center ">
              No Projects Found{" "}
            </h1>
            
            <p className="start text-center mb-4">You can start creating a project now</p>
               
            <button
              style={{ fontFamily: "Poppins" }}
              class="flex items-center px-5 py-3 my-5 mx-auto font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 text-base"
            >
              <span class="mx-1">Create Project</span>
              <span>+</span>
            </button>

          </div>


          </div>
          
        )}
        {activeTab === 1 && (
           
          <div className=" mt-[40px]">
            
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
          <div className="mt-[40px]">
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
  
    
    </div></div>
  );
};

export default Projects;
