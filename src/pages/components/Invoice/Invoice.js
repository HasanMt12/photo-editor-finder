import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import project from '../../../assets/Project Icon.png';
import search from "../../../assets/search.png";
import './invoice.css';
const Invoice = () => {
     const [modal, setModal] = useState(false);

        const toggleModal = () => {
            setModal(!modal);
        };

        if (modal) {
            document.body.classList.add("active-modal");
        } else {
            document.body.classList.remove("active-modal");
        }

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
      const response = await axios.get("/invoiceData.json");
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
      name: "Invoice Name",
      selector: (row) => (
        <div className="flex justify-start items-center ">
          <img className="h-8 w-8 cursor-pointer" src={project} alt=""></img>
          <h1 className="px-2">{row.projects}</h1>
        </div>
      ),

      sortable: true,
    },
    {
      name: "Invoice_ID",
      selector: (row) => row.packages,
      sortable: true,
    },
    {
      name: "Credits",
      selector: (row) => row.photos,
    },

    {
      name: "Date and Time",
      selector: (row) => row.date,
      sortable: true,
    },
   
    {
      name: "Status",
      selector: (row) => (
        <div>
          {row.status === "Paid" && (
            <button className="PaidButton   mx-auto  w-[70px] h-[22px]" >
              Paid
            </button>
          )}
          {row.status === "Pending" && (
            <button className="PendingButton  w-[70px] h-[22px]">Pending</button>
          )}

          {row.status === "Processed" && (
            <button className="processedButton mx-auto  w-[80px] h-[22px]">
              Processed
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
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2132_4657)">
<path d="M8.23169 15.1017C8.46386 15.334 8.73953 15.5183 9.04295 15.644C9.34636 15.7698 9.67159 15.8345 10 15.8345C10.3285 15.8345 10.6537 15.7698 10.9571 15.644C11.2605 15.5183 11.5362 15.334 11.7684 15.1017L14.4442 12.4258C14.5877 12.2672 14.6646 12.0594 14.6591 11.8455C14.6536 11.6317 14.5661 11.4282 14.4147 11.2771C14.2633 11.126 14.0595 11.0389 13.8457 11.0338C13.6318 11.0288 13.4242 11.1062 13.2659 11.25L10.8275 13.6892L10.8334 0.833333C10.8334 0.61232 10.7456 0.400358 10.5893 0.244078C10.433 0.0877974 10.221 0 10 0V0C9.77901 0 9.56705 0.0877974 9.41077 0.244078C9.25449 0.400358 9.16669 0.61232 9.16669 0.833333L9.15919 13.6733L6.73419 11.25C6.57783 11.0937 6.36579 11.006 6.14473 11.0061C5.92367 11.0062 5.7117 11.0941 5.55544 11.2504C5.39919 11.4068 5.31145 11.6188 5.31152 11.8399C5.3116 12.0609 5.39949 12.2729 5.55586 12.4292L8.23169 15.1017Z" fill="#5E75FB"/>
<path d="M19.1667 13.333C18.9457 13.333 18.7337 13.4208 18.5774 13.5771C18.4211 13.7334 18.3333 13.9453 18.3333 14.1663L18.3333 17.4997C18.3333 17.7207 18.2455 17.9326 18.0893 18.0889C17.933 18.2452 17.721 18.333 17.5 18.333L2.5 18.333C2.27899 18.333 2.06702 18.2452 1.91074 18.0889C1.75446 17.9326 1.66667 17.7207 1.66667 17.4997L1.66667 14.1663C1.66667 13.9453 1.57887 13.7334 1.42259 13.5771C1.26631 13.4208 1.05435 13.333 0.833333 13.333C0.61232 13.333 0.400358 13.4208 0.244078 13.5771C0.0877974 13.7334 0 13.9453 0 14.1663L0 17.4997C0 18.1627 0.263392 18.7986 0.732233 19.2674C1.20107 19.7363 1.83696 19.9997 2.5 19.9997L17.5 19.9997C18.163 19.9997 18.7989 19.7363 19.2678 19.2674C19.7366 18.7986 20 18.1627 20 17.4997L20 14.1663C20 13.9453 19.9122 13.7334 19.7559 13.5771C19.5996 13.4208 19.3877 13.333 19.1667 13.333Z" fill="#5E75FB"/>
</g>
<defs>
<clipPath id="clip0_2132_4657">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>


          {/* {row.delete} */}
        </div>
      ),
      sortable: true,
    },
  ];

  useEffect(() => {
    getTableData();
  }, []);


    return (
          <div className=" ml-12">



           <div className="flex justify-between items-center bg-white relative h-[74px] pr-6">
    <div className="flex bg-transparent justify-center  items-center gap-9 ml-12 my-5">
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

            </div>

            <div className='flex justify-start items-center '>
                <h4 className='text-[#6B6F86] text-[14px] leading-[21px] font-normal'>Sort by:</h4>
                <div class="">

  <div class="dropdown inline-block relative">
    <button class=" text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
      <span class="mr-1">Processed</span>
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
    </button>
    <ul class="dropdown-menu  absolute  hidden text-gray-700 ">
      <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-1 px-4 block whitespace-no-wrap" href="#">Paid</a></li>
      <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-1 px-4 block whitespace-no-wrap" href="#">pending</a></li>
     
    </ul>
  </div>

</div>

<div className='border-[1px] border-[#324FF6] rounded-[8px] w-[195px] h-[38px] flex justify-start items-center'>
 <input className='w-[20px] text-[#5E75FB]'
 
                type="date"
               ></input>
               <h2 className='text-[12px] leading-[18px] font-normal text-[#6B6F86] ml-4'>Start Here</h2>
</div>

<div className='border-[1px] ml-4 border-[#324FF6] rounded-[8px] w-[195px] h-[38px] flex justify-start items-center'>
 <input className='w-[20px] text-[#5E75FB]'
 
                type="date"
               ></input>
               <h2 className='text-[12px] leading-[18px] font-normal text-[#6B6F86] ml-4'>End Here</h2> 
</div>
            </div>
    </div>
    
       <div className=" mt-[60px] w-11/12 mx-auto ">
            
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
    

    </div>
    );
};

export default Invoice;