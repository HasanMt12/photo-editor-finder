import React, { useState } from 'react';

import { Slider } from 'rsuite';
import Plan from './Plan/Plan';
import Plan1 from './Plan/Plan1';
import './slider.less';
import './styles.css';
const MyPlan = () => {
     const [activeTab, setActiveTab] = useState(1);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
   
    return (
      <div className="bg-[#F5F5F5]">
        <div className="ml-12 bg-white w-[95%] mx-auto mt-4">
          <div className="pb-4 ">
            <div className="flex justify-center  items-center">
              <div>
                <h2 className="text-[#090D28] text-[36px] leading-[54px] font-semibold mt-[24px]">
                  We’ve Plans for Everyone
                </h2>
                <p className="text-[#6B6F86] text-[16px] mb-7 leading-[22px] tracking-[-0.333333px] font-normal text-center">
                  Choose a plan to get started
                </p>
              </div>
            </div>

            <div className="flex  justify-between items-center">
              <div>
                <h2 className="text-[#090D28]  font-[500px] text-2xl ml-[80px] tracking-[-0.333333px]">
                  Subscription
                </h2>
              </div>
              <div className="flex justify-start items-center gap-3  mr-[30px]">
                <h4 className="text-[#6B6F86] font-[500px] text-[20px] leading-[26px] ">
                  Starter
                </h4>
                <label
                  for="Toggle1"
                  className="inline-flex items-center space-x-4 cursor-pointer text-gray-100"
                >
                  <span className="relative">
                    <input
                      id="Toggle1"
                      type="checkbox"
                      className="hidden peer"
                    />
                    <div className="w-10 h-6 rounded-full shadow-inner bg-white border-[#324FF6] border-[1px] peer-checked:bg-[#324FF6]"></div>
                    <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto border-[1px] border-[#324FF6] bg-white"></div>
                  </span>
                </label>
                <h4 className="text-[#324FF6] text-[20px] leading-[27px] font-[500px]">
                  Professional
                </h4>
                <div className="bg-[#E1FFED] w-[97px] h-[28px] p-2 rounded-[5px]">
                  <h4 className="text-[#0EC970] text-[10px] leading-[10px] font-bold">
                    Save up to 45%
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <hr className="w-full border-[1px] border-[#6B6F86]"></hr>

          {/* <fieldset className="space-y-1 sm:w-60 text-gray-900">
	<input onChange={(e)=>setActiveTab(e.target.value) } type="range" className="w-full accent-violet-900 " min="1" max="6" />
	
    <div aria-hidden="true" className="flex justify-between px-1">
		{activeTab === 1 &&
        
        <span>1</span>
        
        }
        {activeTab === 2 &&
        
        <span>2</span>
        
        }
		
	</div>
</fieldset> */}

          <div className="flex justify-start items-center mt-3">
            <div className="flex justify-center gap-1 items-center pl-2 mb-8">
              <h5 className="text-[#090D28] text-[20px] leading-[30px] tracking-[-0.333333px] ">
                Monthly package volume
              </h5>
              <div className="flex justify-center items-center mt-2 w-[15px] h-[15px] border-[#324FF6] border-[2px] rounded-full border-solid">
                <svg
                  width="2"
                  height="8"
                  viewBox="0 0 2 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.25 3.25H1.75V7.75H0.25V3.25ZM0.25 0.25H1.75V1.75H0.25V0.25Z"
                    fill="#324FF6"
                  />
                </svg>
              </div>
            </div>

            <div className=" w-8/12 mx-auto " style={{ padding: 20 }}>
              <Slider
                onChange={(e) => setActiveTab(e)}
                min={0}
                step={1}
                max={6}
                graduated
                progress
                renderMark={(mark) => {
                  if ([1, 2, 3, 4, 5, 6].includes(mark)) {
                    if (mark === 1) {
                      return (
                        <div className="rangText">
                          <div>
                            <span className="rangText1">0 - 500$</span>
                          </div>
                          <span className="rangText2">0 - 500 credits</span>
                        </div>
                      );
                    }
                    if (mark === 2) {
                      return (
                        <div className="rangText">
                          <div>
                            <span className="rangText1">501 - 1000$</span>
                          </div>
                          <span className="rangText2">501 - 1000 credits</span>
                        </div>
                      );
                    }
                    if (mark === 3) {
                      return (
                        <div className="rangText">
                          <div>
                            <span className="rangText1">1001 - 1500$</span>
                          </div>
                          <span className="rangText2">1001 - 1500 credits</span>
                        </div>
                      );
                    }
                    if (mark === 4) {
                      return (
                        <div className="rangText">
                          <div>
                            <span className="rangText1">1501 - 2000$</span>
                          </div>
                          <span className="rangText2">1501 - 2000 credits</span>
                        </div>
                      );
                    }
                    if (mark === 5) {
                      return (
                        <div className="rangText">
                          <div>
                            <span className="rangText1">2001 - 2500$</span>
                          </div>
                          <span className="rangText2">2001 - 2500 credits</span>
                        </div>
                      );
                    }
                    if (mark === 6) {
                      return (
                        <div className="rangText">
                          <div>
                            <span className="rangText1">2501 - 3000$</span>
                          </div>
                          <span className="rangText2">2501 - 3000 credits</span>
                        </div>
                      );
                    }
                  }
                }}
              />
            </div>
          </div>

          <div>
            {activeTab === 1 && <Plan1></Plan1>}
            {activeTab === 2 && <Plan></Plan>}
            {activeTab === 3 && <Plan></Plan>}
            {activeTab === 4 && <Plan></Plan>}
            {activeTab === 5 && <Plan></Plan>}
            {activeTab === 6 && <Plan></Plan>}
          </div>

          {/* <div className='flex justify-center items-center '>
     <
     div  className='flex justify-start items-center ml-12'>
      
        <div className=' h -
         [5
     0
px]  w -
     [2
 5
0px]  p y
     -2
 '
>   
     
 
 
      
             <h4 className='text-[#090D28] text-[20px] leading-[30px] font-[500px] tracking-[-0.3333333px]'> Monthly package volume</h4></div>
      
       
     
     50
 }
   < d ilassName='flex justify-center  items-center border-[2px] rounded-full w-[15px] h-[15px] border-[#324FF6]'>
<h4 c10
l}
 assN a mtext-xs text-[#324FF6]'>i</h4>
10
}
   
     100
 }
   </div>
 div>
  
     
 

}
 <
         <div class="w-full mx-auto mt-8">

      
       
                < class="w-10/12 lg:w-4/6 mx-auto">
     50
 }
                  <div class="bg-[#324FF6] h-[10px] flex items-center justify-between">
     64
 }
                       <div class="w-[130px] bg-[#324FF6] h-1 flex items-center">
                           <div class="bg-[#324FF6] h-1 w-1 rounded-full shadow flex items-center justify-center">
                              
     64
 }
                        </div>
     1024
 }
               
                   
                             </div>
                             
                     
             
              
                            <div class="w-[130px] bg-[#324FF6] h-1 flex items-center">
                                 <div class="bg-white h-3 w-3 rounded-full shadow flex items-center justify-center">
                                  
 }
    <                          </div>
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
