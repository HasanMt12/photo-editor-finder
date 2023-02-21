import React, { useState } from 'react';
import avatar from "../../../assets/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction 1@2x.png"
import logo2 from "../../../assets/Captae-removebg-preview.png";

const MyPlan = () => {
   
    return (
       
       <div className="ml-8 ">

    
      <div className=" bg-white w-[97%] mx-auto mt-5">
       <div className='pb-4 '>
            <div className='flex justify-center  items-center'> 
                <div>
                    <h2 className='text-[#090D28] text-[36px] leading-[54px] font-semibold mt-[24px]'>We’ve Plans for Everyone</h2>
                    <p className='text-[#6B6F86] text-[16px] mb-7 leading-[22px] tracking-[-0.333333px] font-normal text-center'>Choose a plan to get started</p>

                </div>
            </div>

            <div className='flex  justify-between items-center'>
                <div >
                    
                    <h2 className='text-[#090D28]  font-[500px] text-2xl ml-[80px] tracking-[-0.333333px]'>Subscription</h2>
                </div>
              <div className='flex justify-start items-center gap-3  mr-[30px]'>
                <h4 className='text-[#6B6F86] font-[500px] text-[20px] leading-[26px] '>Starter</h4>
               <label for="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer text-gray-100">

            <span className="relative">
              <input id="Toggle1" type="checkbox" className="hidden peer" />
              <div className="w-10 h-6 rounded-full shadow-inner bg-white border-[#324FF6] border-[1px] peer-checked:bg-[#324FF6]"></div>
              <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto border-[1px] border-[#324FF6] bg-white"></div>
            </span>

          </label>
                <h4 className='text-[#324FF6] text-[20px] leading-[27px] font-[500px]'>Professional</h4>
                <div className='bg-[#E1FFED] w-[97px] h-[28px] p-2 rounded-[5px]'>
                    <h4  className='text-[#0EC970] text-[10px] leading-[10px] font-bold'>Save up to 45%</h4>

                </div>
                
              </div>
                
            </div>
            
       </div>
    <hr className='w-full border-[1px] border-[#6B6F86]'></hr>

{/* <div className='flex justify-center items-center '>
    <div className='flex justify-start items-center ml-12'>
        <div className='h-[50px] w-[250px] py-2'> 
            <h4 className='text-[#090D28] text-[20px] leading-[30px] font-[500px] tracking-[-0.3333333px]'> Monthly package volume</h4></div>
       
        
        <div className='flex justify-center  items-center border-[2px] rounded-full w-[15px] h-[15px] border-[#324FF6]'>
<h4 className='text-xs text-[#324FF6]'>i</h4>

        </div>
    </div>




            <div class="w-full mx-auto mt-8">

       
                   <div class="w-10/12 lg:w-4/6 mx-auto">
                        <div class="bg-[#324FF6] h-[10px] flex items-center justify-between">
                            <div class="w-[130px] bg-[#324FF6] h-1 flex items-center">
                                <div class="bg-[#324FF6] h-1 w-1 rounded-full shadow flex items-center justify-center">
                                    
                                </div>
                                
                            </div>
                            
                           <div class="w-[130px] bg-[#324FF6] h-1 flex items-center">
                                <div class="bg-white h-3 w-3 rounded-full shadow flex items-center justify-center">
                                    
                                </div>
                            </div>
                            <div class="w-[130px] bg-[#324FF6] h-1 flex items-center">
                                <div class="bg-white h-3 w-3 rounded-full shadow flex items-center justify-center">
                                    
                                </div>
                            </div>
                            <div class="w-[130px] bg-[#324FF6] h-1 flex items-center">
                                <div class="bg-white h-3 w-3 rounded-full shadow flex items-center justify-center">
                                    
                                </div>
                            </div>
                            <div class="w-[130px] bg-[#324FF6] h-1 flex items-center">
                                <div class="bg-white h-3 w-3 rounded-full shadow flex items-center justify-center">
                                    
                                </div>
                            </div>
                            <div class="w-[130px] bg-[#324FF6] h-1 flex items-center">
                                <div class="bg-white h-3 w-3 rounded-full shadow flex items-center justify-center">
                                    
                                </div>
                            </div>
                             <div class="w-[130px] bg-[#324FF6] h-1 flex items-center">
                                <div class="bg-white h-3 w-3 rounded-full shadow flex items-center justify-center">
                                    
                                </div>
                            </div>
                        </div>
                    </div> 
                     <div class="w-10/12 lg:w-4/6 mx-auto mt-6">
                        <div class=" h-[10px] flex items-center justify-between">
                            <div class="w-[130px] flex justify-center items-center pt-12">
                                <div class="  ">
                                    <h1 className='text-[16px] leading-[20px] '>0 - 500$</h1>
                                   <h2>sd</h2> 
                                </div>
                                
                            </div>
                            
                           <div class="w-[130px] bg-[#324FF6] h-1 flex items-center">
                                <div class="bg-white h-3 w-3 rounded-full shadow flex items-center justify-center">
                                    
                                </div>
                            </div>
                            <div class="w-[130px] bg-[#324FF6] h-1 flex items-center">
                                <div class="bg-white h-3 w-3 rounded-full shadow flex items-center justify-center">
                                    
                                </div>
                            </div>
                            <div class="w-[130px] bg-[#324FF6] h-1 flex items-center">
                                <div class="bg-white h-3 w-3 rounded-full shadow flex items-center justify-center">
                                    
                                </div>
                            </div>
                            <div class="w-[130px] bg-[#324FF6] h-1 flex items-center">
                                <div class="bg-white h-3 w-3 rounded-full shadow flex items-center justify-center">
                                    
                                </div>
                            </div>
                            <div class="w-[130px] bg-[#324FF6] h-1 flex items-center">
                                <div class="bg-white h-3 w-3 rounded-full shadow flex items-center justify-center">
                                    
                                </div>
                            </div>
                             <div class="w-[130px] bg-[#324FF6] h-1 flex items-center">
                                <div class="bg-white h-3 w-3 rounded-full shadow flex items-center justify-center">
                                    
                                </div>
                            </div>
                        </div>
                    </div>    
            </div>

</div> */}
        
        

      </div>
  
    
    </div>
  
    );
};

export default MyPlan;
