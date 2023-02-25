import React from 'react';
import Assets from './AssetsLibrary/Assets';

const Basic = () => {
    return (
        <div className='mt-4'>
           <form action="" className=" flex flex-col mx-auto w-full ">
			
                <div className='flex justify-start items-center gap-3'>
                        <div className=" w-[35%] h-[49px] my-2">
                            <label for="city" className="text-[#090D28] text-[16px] leading-[-0.33px]  ">Project Name <span className='text-[#DD2a2f]'>*</span></label>
                            <input id="city" type="text" placeholder="New Project" className="w-full mt-2 px-3 h-[49px] rounded-md  border-[#D2D2D2] border-[1px] rounded--[4px]  text-gray-900" />
                        </div>
                        <div className="  w-[25%] h-[49px] my-2"> 
                            <label for="state" className="text-[#090D28] text-[16px] leading-[-0.33px]  ">No. of Photos <span className='text-[#DD2a2f]'>*</span></label>
                            <input id="state" type="text" placeholder="24" className="w-full mt-2 px-3 h-[49px] rounded-md  border-[#D2D2D2] border-[1px] rounded--[4px] text-gray-900" />
                        </div>
                        <div className=" w-[25%] h-[49px] my-2 ">
                            <label for="zip" className="text-[#090D28] text-[16px] leading-[-0.33px]  ">Turnaround Time <span className='text-[#DD2a2f]'>*</span></label>
                            <input id="zip" type="text" placeholder="24 Hours (No Extra Credits)" className="w-full mt-2 px-3 h-[49px] rounded-md  border-[#D2D2D2] border-[1px] rounded--[4px] text-gray-900" />
                        </div>
                </div>

                <div className='flex justify-start items-center mt-12 gap-2'>
                    <h5 className='text-[#000000] text-[16px] font-medium'>Attachments <span className='text-[#6B6F86] text-sm font-normal'>(optional)</span></h5>
                     <div className='flex justify-center items-center  w-[15px] h-[15px] border-[#324FF6] border-[2px] rounded-full border-solid'>
                           <svg width="2" height="8" viewBox="0 0 2 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M0.25 3.25H1.75V7.75H0.25V3.25ZM0.25 0.25H1.75V1.75H0.25V0.25Z" fill="#324FF6"/>
                           </svg>
                     </div>
                </div>

                 <div className="flex items-center justify-center w-[86.5px] h-[84px] mt-4">
                            <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-[84px] border-2 border-none rounded-lg cursor-pointer bg-[#DFDFDF]" >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 6H8V0H6V6H0V8H6V14H8V8H14V6Z" fill="#6B6F86"/>
                                    </svg>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                  </div> 

                
                    <h5 className='text-[#000000] text-[16px] font-medium mt-6'>Assets Library <span className='text-[#6B6F86] text-sm font-normal'>(optional)</span></h5>
                    <Assets></Assets>
            </form>  
        </div>
    );
};

export default Basic;