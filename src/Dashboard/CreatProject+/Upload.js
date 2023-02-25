import React from 'react';
import { Link } from 'react-router-dom';
import CreateProjectTabs from '../../pages/components/CreatProjectTabs/CreateProjectTabs';

const Upload = () => {
    return (
          <div className="bg-[#F5F5F5]  mx-auto " >
     
      
      <div className="   mt-4 ">
        <div className="p-8">
        
          <div className="mt-4 ml-[30px]">
           <CreateProjectTabs></CreateProjectTabs>
          </div>
          <div className="mt-7  ml-24 ">
            <h3 className="font-medium text-[#090D28] text-lg">
              Upload your magical images
            </h3>
            <div className='w-[582px] h-[40px] mt-2 '>
                <h3 className="font-medium text-[#6B6F86] text-[15px]" >
                    Wrolds first-class photo editing services whether you are a freelancer photographer, startup or big enterprise our packages suit all.
                </h3>
            </div>

            <div className='w-[95%] pt-8 mt-6 mx-auto h-auto bg-white drop-shadow-[0_2px_10px_rgba(0,37,255,0.16)] rounded-[15px]' >
                   <h5 className='text-center text-[#202142] text-3xl font-semibold '>Upload Raw source file</h5>
                    <h5 className='text-lg font-normal text-[#202142] text-center mt-2'>Please upload the Raw source file of your Photos</h5>
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
    </div>
    );
};

export default Upload;