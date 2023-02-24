import React from 'react';
import { Link } from 'react-router-dom';
import CreateProjectTabs from '../../pages/components/CreatProjectTabs/CreateProjectTabs';

const Product = () => {
    return (
         <div className="bg-[#F5F5F5]  mx-auto " >
     
      
      <div className="   mt-4 ">
        <div className="p-8">
        
          <div className="mt-4 ml-[30px]">
           <CreateProjectTabs></CreateProjectTabs>
          </div>
          <div className="mt-7  ml-24 ">
            <h3 className="font-medium text-[#090D28] text-lg">
              You shoot - We Edit.
            </h3>
            <div className='w-[582px] h-[40px] mt-2 '>
                <h3 className="font-medium text-[#6B6F86] text-[15px]" >
                    Wrolds first-class photo editing services whether you are a freelancer photographer, startup or big enterprise our packages suit all.
                </h3>
            </div>

            {/* photo edit */}
             <div className='w-[831px] h-[180px] rounded-[8px] mt-[36px] mx-auto py-[29.5px] px-[34px] cursor-pointer active:bg-[#324ff6] bg-white'>
                 <div className="flex justify-start items-center gap-6">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle opacity="0.1" cx="20" cy="20" r="20" fill="#6B33FF" />
                  <g clip-path="url(#clip0_1_1707)">
                    <path
                      d="M24.9992 11.4287H14.9992C14.0523 11.4298 13.1446 11.8065 12.475 12.476C11.8055 13.1455 11.4289 14.0533 11.4277 15.0001L11.4277 25.0001C11.4289 25.947 11.8055 26.8547 12.475 27.5243C13.1446 28.1938 14.0523 28.5704 14.9992 28.5716H24.9992C25.946 28.5704 26.8538 28.1938 27.5233 27.5243C28.1928 26.8547 28.5695 25.947 28.5706 25.0001V15.0001C28.5695 14.0533 28.1928 13.1455 27.5233 12.476C26.8538 11.8065 25.946 11.4298 24.9992 11.4287V11.4287ZM14.9992 12.8573H24.9992C25.5675 12.8573 26.1125 13.083 26.5144 13.4849C26.9163 13.8868 27.142 14.4318 27.142 15.0001V25.0001C27.1408 25.3183 27.0675 25.6321 26.9277 25.918L20.3827 19.373C20.0511 19.0413 19.6573 18.7781 19.224 18.5986C18.7906 18.419 18.3261 18.3266 17.857 18.3266C17.3879 18.3266 16.9234 18.419 16.4901 18.5986C16.0567 18.7781 15.663 19.0413 15.3313 19.373L12.8563 21.8473V15.0001C12.8563 14.4318 13.0821 13.8868 13.4839 13.4849C13.8858 13.083 14.4308 12.8573 14.9992 12.8573ZM14.9992 27.143C14.4308 27.143 13.8858 26.9172 13.4839 26.5154C13.0821 26.1135 12.8563 25.5685 12.8563 25.0001V23.8673L16.3406 20.383C16.5396 20.1839 16.7759 20.0259 17.036 19.9181C17.296 19.8104 17.5748 19.7549 17.8563 19.7549C18.1378 19.7549 18.4166 19.8104 18.6767 19.9181C18.9367 20.0259 19.173 20.1839 19.372 20.383L25.917 26.9287C25.6312 27.0685 25.3174 27.1418 24.9992 27.143H14.9992Z"
                      fill="#5E75FB"
                    />
                    <path
                      d="M22.8564 18.9285C23.3509 18.9285 23.8342 18.7818 24.2454 18.5071C24.6565 18.2324 24.9769 17.842 25.1661 17.3852C25.3554 16.9284 25.4049 16.4257 25.3084 15.9407C25.2119 15.4558 24.9738 15.0103 24.6242 14.6607C24.2746 14.3111 23.8291 14.073 23.3442 13.9765C22.8592 13.88 22.3566 13.9296 21.8997 14.1188C21.4429 14.308 21.0525 14.6284 20.7778 15.0395C20.5031 15.4507 20.3564 15.934 20.3564 16.4285C20.3564 17.0915 20.6198 17.7274 21.0887 18.1962C21.5575 18.6651 22.1934 18.9285 22.8564 18.9285ZM22.8564 15.357C23.0684 15.357 23.2755 15.4199 23.4517 15.5376C23.6279 15.6553 23.7652 15.8227 23.8463 16.0185C23.9274 16.2142 23.9486 16.4297 23.9073 16.6375C23.8659 16.8453 23.7639 17.0362 23.6141 17.1861C23.4642 17.3359 23.2733 17.438 23.0655 17.4793C22.8576 17.5207 22.6422 17.4994 22.4464 17.4183C22.2506 17.3372 22.0833 17.1999 21.9656 17.0237C21.8479 16.8475 21.785 16.6404 21.785 16.4285C21.785 16.1443 21.8979 15.8718 22.0988 15.6709C22.2998 15.4699 22.5723 15.357 22.8564 15.357Z"
                      fill="#5E75FB"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1707">
                      <rect
                        width="17.1429"
                        height="17.1429"
                        fill="white"
                        transform="translate(11.4277 11.4287)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <div>
                  <h4
                    style={{ color: "#5E75FB", fontFamily: "Poppins" }}
                    className=" text-lg font-semibold"
                  >
                    Photo Editing
                  </h4>
                  <h4
                    style={{ color: "#777777", fontFamily: "Satoshi" }}
                    className="font-normal text-sm  "
                  >
                    Upto 16 Step Photo Enhancements
                  </h4>
                </div>
                
              </div>
               <div className='ml-16 mt-[10px]'>
                  <h4
                    style={{ color: "#1F2338", fontFamily: "Poppins" }}
                    className=" text-sm font-medium"
                  >
                    ABOUT
                  </h4>
                  <h4
                    style={{ color: "#777777", fontFamily: "Satoshi" }}
                    className="font-normal text-xs mt-1 "
                  >
                    Looking for someone to build our web design files in Showit. Design file will be provided for desktop & mobile via Adobe XD. The project rate applies to websites with up to 5 pages.  
                  </h4>
                </div>
            </div>

            {/* video edit */}

            <div className='w-[831px] h-[180px] rounded-[8px] mt-[21px] mx-auto py-[29.5px] px-[34px] cursor-pointer active:bg-[#324ff6] bg-white'>
                 <div className="flex justify-start items-center gap-6">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle opacity="0.1" cx="20" cy="20" r="20" fill="#6B33FF" />
                  <path
                    d="M28.7594 15.5781C28.6201 15.4976 28.462 15.4553 28.3011 15.4553C28.1402 15.4553 27.9821 15.4976 27.8428 15.5781L24.6069 17.1731C24.5808 16.4614 24.2796 15.7875 23.7667 15.2934C23.2538 14.7993 22.5691 14.5234 21.8569 14.5239H13.6069C12.8776 14.5239 12.1781 14.8137 11.6624 15.3294C11.1467 15.8451 10.8569 16.5446 10.8569 17.2739V22.7739C10.8569 23.5033 11.1467 24.2027 11.6624 24.7185C12.1781 25.2342 12.8776 25.5239 13.6069 25.5239H21.8569C22.5691 25.5244 23.2538 25.2486 23.7667 24.7544C24.2796 24.2603 24.5808 23.5865 24.6069 22.8748L27.8703 24.5064C27.9952 24.5705 28.1332 24.605 28.2736 24.6073C28.4452 24.6078 28.6136 24.5602 28.7594 24.4698C28.8915 24.3872 29.0004 24.2723 29.0758 24.136C29.1512 23.9997 29.1906 23.8464 29.1903 23.6906V16.3573C29.1906 16.2015 29.1512 16.0482 29.0758 15.9119C29.0004 15.7755 28.8915 15.6607 28.7594 15.5781ZM22.7736 22.7739C22.7736 23.017 22.677 23.2502 22.5051 23.4221C22.3332 23.594 22.1 23.6906 21.8569 23.6906H13.6069C13.3638 23.6906 13.1307 23.594 12.9588 23.4221C12.7868 23.2502 12.6903 23.017 12.6903 22.7739V17.2739C12.6903 17.0308 12.7868 16.7977 12.9588 16.6257C13.1307 16.4538 13.3638 16.3573 13.6069 16.3573H21.8569C22.1 16.3573 22.3332 16.4538 22.5051 16.6257C22.677 16.7977 22.7736 17.0308 22.7736 17.2739V22.7739ZM27.3569 22.2056L24.6069 20.8306V19.2173L27.3569 17.8423V22.2056Z"
                    fill="#5E75FB"
                  />
                </svg>

                <div>
                  <h4
                    style={{ color: "#5E75FB", fontFamily: "Poppins" }}
                    className=" text-lg font-semibold"
                  >
                    Video Editing
                  </h4>
                  <h4
                    style={{ color: "#777777", fontFamily: "Satoshi" }}
                    className="font-normal text-sm  "
                  >
                    HD Video Composition
                  </h4>
                </div>
                
              </div>
               <div className='ml-16 mt-[10px]'>
                  <h4
                    style={{ color: "#1F2338", fontFamily: "Poppins" }}
                    className=" text-sm font-medium"
                  >
                    ABOUT
                  </h4>
                  <h4
                    style={{ color: "#777777", fontFamily: "Satoshi" }}
                    className="font-normal text-xs mt-1 "
                  >
                    Looking for someone to build our web design files in Showit. Design file will be provided for desktop & mobile via Adobe XD. The project rate applies to websites with up to 5 pages.  
                  </h4>
                </div>
            </div>

            {/* ps edit */}
          
            <div className='w-[831px] h-[180px] rounded-[8px] mt-[21px] mx-auto py-[29.5px] px-[34px] cursor-pointer active:bg-[#324ff6] bg-white'>
                 <div className="flex justify-start items-center gap-6">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle opacity="0.1" cx="20" cy="20" r="20" fill="#6B33FF" />
                  <path
                    d="M11.0114 25.5V13.8636H15.6023C16.4848 13.8636 17.2367 14.0322 17.858 14.3693C18.4792 14.7027 18.9527 15.1667 19.2784 15.7614C19.608 16.3523 19.7727 17.0341 19.7727 17.8068C19.7727 18.5795 19.6061 19.2614 19.2727 19.8523C18.9394 20.4432 18.4564 20.9034 17.8239 21.233C17.1951 21.5625 16.4337 21.7273 15.5398 21.7273H12.6136V19.7557H15.142C15.6155 19.7557 16.0057 19.6742 16.3125 19.5114C16.6231 19.3447 16.8542 19.1155 17.0057 18.8239C17.161 18.5284 17.2386 18.1894 17.2386 17.8068C17.2386 17.4205 17.161 17.0833 17.0057 16.7955C16.8542 16.5038 16.6231 16.2784 16.3125 16.1193C16.0019 15.9564 15.608 15.875 15.1307 15.875H13.4716V25.5H11.0114ZM28.5866 19.2614L26.3707 19.3977C26.3329 19.2083 26.2514 19.0379 26.1264 18.8864C26.0014 18.7311 25.8366 18.608 25.6321 18.517C25.4313 18.4223 25.1908 18.375 24.9105 18.375C24.5355 18.375 24.2192 18.4545 23.9616 18.6136C23.7041 18.7689 23.5753 18.9773 23.5753 19.2386C23.5753 19.447 23.6586 19.6231 23.8253 19.767C23.992 19.911 24.2779 20.0265 24.6832 20.1136L26.2628 20.4318C27.1113 20.6061 27.7438 20.8864 28.1605 21.2727C28.5772 21.6591 28.7855 22.1667 28.7855 22.7955C28.7855 23.3674 28.617 23.8693 28.2798 24.3011C27.9465 24.733 27.4882 25.0701 26.9048 25.3125C26.3253 25.5511 25.6567 25.6705 24.8991 25.6705C23.7438 25.6705 22.8234 25.4299 22.1378 24.9489C21.456 24.464 21.0563 23.8049 20.9389 22.9716L23.3196 22.8466C23.3916 23.1989 23.5658 23.4678 23.8423 23.6534C24.1188 23.8352 24.473 23.9261 24.9048 23.9261C25.3291 23.9261 25.67 23.8447 25.9276 23.6818C26.1889 23.5152 26.3215 23.3011 26.3253 23.0398C26.3215 22.8201 26.2287 22.6402 26.0469 22.5C25.8651 22.3561 25.5848 22.2462 25.206 22.1705L23.6946 21.8693C22.8423 21.6989 22.2079 21.4034 21.7912 20.983C21.3783 20.5625 21.1719 20.0265 21.1719 19.375C21.1719 18.8144 21.3234 18.3314 21.6264 17.9261C21.9332 17.5208 22.3632 17.2083 22.9162 16.9886C23.473 16.7689 24.1245 16.6591 24.8707 16.6591C25.973 16.6591 26.8404 16.892 27.473 17.358C28.1094 17.8239 28.4806 18.4583 28.5866 19.2614Z"
                    fill="#5E75FB"
                  />
                </svg>

                <div>
                  <h4
                    style={{ color: "#5E75FB", fontFamily: "Poppins" }}
                    className=" text-lg font-semibold"
                  >
                    Photoshop Edits
                  </h4>
                  <h4
                    style={{ color: "#777777", fontFamily: "Satoshi" }}
                    className="font-normal text-sm  "
                  >
                    High Resolution Enhancements 
                  </h4>
                </div>
                
              </div>
               <div className='ml-16 mt-[10px]'>
                  <h4
                    style={{ color: "#1F2338", fontFamily: "Poppins" }}
                    className=" text-sm font-medium"
                  >
                    ABOUT
                  </h4>
                  <h4
                    style={{ color: "#777777", fontFamily: "Satoshi" }}
                    className="font-normal text-xs mt-1 "
                  >
                    Looking for someone to build our web design files in Showit. Design file will be provided for desktop & mobile via Adobe XD. The project rate applies to websites with up to 5 pages.  
                  </h4>
                </div>
            </div>

            <div className='flex justify-end items-center gap-2 mr-[130px] mt-[76px]'>
                <Link to='/dashboard/projects'>
                <button className='bg-[#D2D2D2] w-[134px] h-[48px] text-[#090D28] text-[16px] leading-[-0.33px] rounded-[8px]' >Cancel</button>
                </Link>
                <Link to='/dashboard/productDetails'>
                <button className='bg-[#324FF6] w-[134px] h-[48px] text-white text-[16px] leading-[-0.33px] rounded-[8px]' >Next</button>
                </Link>
                
            </div>
            
          
             
            
           
          </div>
         
        </div>
      </div>
    </div>
    );
};

export default Product;