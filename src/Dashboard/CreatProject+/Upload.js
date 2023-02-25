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
              upload
            </h3>
        

         

            <div className='flex justify-end items-center gap-2 mr-[130px] mt-[76px]'>
                <Link to='/dashboard/productDetails'>
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

export default Upload;