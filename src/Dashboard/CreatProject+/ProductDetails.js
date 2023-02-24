import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CreateProjectTabs from '../../pages/components/CreatProjectTabs/CreateProjectTabs';
import BrandForm from './BrandForm/BrandForm';
import UnBrandingForm from './BrandForm/UnBrandingForm';

const ProductDetails = () => {
     const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
    return (
        <div className="bg-[#F5F5F5]  mx-auto " >
     
      
      <div className="   mt-4 ">
        <div className="p-8">
        
          <div className="mt-4 ml-[30px]">
           <CreateProjectTabs></CreateProjectTabs>
          </div>
          <div className="mt-7  ml-24 ">
            <h3 className="font-medium text-[#090D28] text-lg">
              Enter your Project Details.
            </h3>
            <div className='w-[582px] h-[40px] mt-2 '>
                <h3 className="font-medium text-[#6B6F86] text-[15px]" >
                    Wrolds first-class photo editing services whether you are a freelancer photographer, startup or big enterprise our packages suit all.
                </h3>
            </div>
          </div>

          
            {/* chose Plan div */}
            <div className='w-[98%] ml-8 bg-white mt-[35px]  pt-[50px]  mx-auto h-auto pb-20 pl-[29px] pr-[37px]'>
                <h4 className='text-[#090D28]  font-medium text-[16px]'>Choose Package</h4>

                {/* Brand */}
                <div className=' h-[192px] w-[100%] flex justify-center items-center  mr-1 mx-auto border-[#d2d2d2] mt-[26px] border-[0.5px]  rounded-[4px]'>

                    {/* branding */}
                   
                        <Link to='' onClick={ () => handleTabClick(0)} className=' h-[192px] w-[48%]  mr-[2%] focus:border-[3px] rounded-[4px] focus:border-[#5E75FB] cursor-pointer pl-[10%] pr-[6%] py-[1%] '>
                             <div className='flex justify-end'>
                                <div className='flex justify-center items-center mt-2 w-[15px] h-[15px] border-[#324FF6] border-[2px] rounded-full border-solid'>
                                    <svg width="2" height="8" viewBox="0 0 2 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.25 3.25H1.75V7.75H0.25V3.25ZM0.25 0.25H1.75V1.75H0.25V0.25Z" fill="#324FF6"/>
                                    </svg>
                                </div>
                             </div>
                           
                            <div>
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
                            </div>
                            <h5 className='text-[#5E75FB] text-3xl font-medium mt-3'>Branding</h5>
                            <h4 className='text-[#777777] text-lg mt-2'>4 Credits</h4>
                        </Link>
                  
                    <hr className='bg-[#D2D2D2] h-[130px] w-[0.5px]'></hr>

                    {/* un branding */}

                    <Link to='' onClick={ () => handleTabClick(1)} className=' h-[192px] w-[48%]  ml-[2%] focus:border-[3px] rounded-[4px] focus:border-[#5E75FB] cursor-pointer pl-[10%] pr-[6%] py-[1%]' >
                       <div className='flex justify-end'>
                                <div className='flex justify-center items-center mt-2 w-[15px] h-[15px] border-[#324FF6] border-[2px] rounded-full border-solid'>
                                    <svg width="2" height="8" viewBox="0 0 2 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.25 3.25H1.75V7.75H0.25V3.25ZM0.25 0.25H1.75V1.75H0.25V0.25Z" fill="#324FF6"/>
                                    </svg>
                                </div>
                             </div>
                           
                            <div>
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
                            </div>
                            <h5 className='text-[#5E75FB] text-3xl font-medium mt-3'>UnBranding</h5>
                            <h4 className='text-[#777777] text-lg mt-2'>4 Credits</h4>
                    </Link>
                </div>
                {activeTab === 0 && <BrandForm></BrandForm>}

                {activeTab===1 && <UnBrandingForm></UnBrandingForm>}
 
            
            <div className='flex justify-end items-center gap-2 mr-[130px] mt-[76px]'>
                <Link to='/dashboard/product'>
                <button className='bg-[#D2D2D2] w-[134px] h-[48px] text-[#090D28] text-[16px] leading-[-0.33px] rounded-[8px]' >Cancel</button>
                </Link>
                <Link to='/dashboard/upload'>
                <button className='bg-[#324FF6] w-[134px] h-[48px] text-white text-[16px] leading-[-0.33px] rounded-[8px]' >Next</button>
                </Link>
                
            </div>
            </div>
          
        </div>
      </div>
    </div>
    );
};

export default ProductDetails;