import React from 'react';

const UnBrandingForm = () => {
    return (
        <div>
           <form novalidate="" action="" className=" flex flex-col mx-auto w-full ">
			
                <div className='flex justify-start items-center gap-3'>
                        <div className=" w-[35%] h-[49px] my-2">
                            <label for="city" className="text-[#090D28] text-[16px] leading-[-0.33px] ">Project Name *</label>
                            <input id="city" type="text" placeholder="New Project" className="w-full mt-2 px-3 h-[49px] rounded-md  border-[#D2D2D2] border-[1px] rounded--[4px]  text-gray-900" />
                        </div>
                        <div className="  w-[25%] h-[49px] my-2"> 
                            <label for="state" className="text-[#090D28] text-[16px] leading-[-0.33px] ">No. of Photos *</label>
                            <input id="state" type="text" placeholder="24" className="w-full mt-2 px-3 h-[49px] rounded-md  border-[#D2D2D2] border-[1px] rounded--[4px] text-gray-900" />
                        </div>
                        <div className=" w-[25%] h-[49px] my-2 ">
                            <label for="zip" className="text-[#090D28] text-[16px] leading-[-0.33px] ">Turnaround Time *</label>
                            <input id="zip" type="text" placeholder="24 Hours (No Extra Credits)" className="w-full mt-2 px-3 h-[49px] rounded-md  border-[#D2D2D2] border-[1px] rounded--[4px] text-gray-900" />
                        </div>
                </div>

                {/* comments area */}
                <div className='flex justify-between items-start mt-[59px]'>
                    <h4 className='text-[#090D28] text-lg font-medium mt-10'>Comment</h4>
                    
                    <textarea id="comment" placeholder="Leave default editor comment here optional"
                    className="w-[75%] h-[232px] rounded-md border-[0.5px] border-[#D2D2D2] py-10 px-14" spellcheck="false"></textarea>
                 </div>

                 {/* photo upload area */}

                <div className='flex justify-between items-start mt-[38px]'>
                    <div className='mt-12'>
                        <h5 className='text-[#090D28] text-lg font-medium'>Photographer Watermark</h5>
                        <div className='w-[296px] h-[40px] mt-2'>
                            <h5 className='text-[#6B6F86] text-sm font-medium'>Wrolds first-class photo editing services whether you are a freelancer photographer, </h5>
                        </div>
                    </div>

                    <div className='w-[75%] h-64'>
                        <h5 className='text-[#090D28] text-sm mb-4 font-medium'>Watermark</h5>

                        <div class="flex items-center justify-center w-[175px] h-[131px]">
                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-[131px] border-2 border-none rounded-lg cursor-pointer bg-[#DFDFDF]" >
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg width="42" height="39" viewBox="0 0 42 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M40.4711 24.5342C40.0656 24.5342 39.6767 24.6953 39.3899 24.982C39.1032 25.2687 38.9421 25.6576 38.9421 26.0631V31.2845C38.9421 32.5151 38.4532 33.6954 37.583 34.5657C36.7128 35.4359 35.5325 35.9248 34.3018 35.9248H7.69822C6.46752 35.9248 5.28724 35.4359 4.417 34.5657C3.54677 33.6954 3.05788 32.5151 3.05788 31.2845V26.0631C3.05788 25.6576 2.8968 25.2687 2.61006 24.982C2.32333 24.6953 1.93444 24.5342 1.52894 24.5342C1.12344 24.5342 0.734548 24.6953 0.447816 24.982C0.161084 25.2687 0 25.6576 0 26.0631V31.2845C0.00202387 33.3255 0.813733 35.2824 2.25699 36.7257C3.70025 38.1689 5.65714 38.9806 7.69822 38.9827H34.3018C36.3429 38.9806 38.2998 38.1689 39.743 36.7257C41.1863 35.2824 41.998 33.3255 42 31.2845V26.0631C42 25.6576 41.8389 25.2687 41.5522 24.982C41.2654 24.6953 40.8766 24.5342 40.4711 24.5342Z" fill="#6B6F86"/>
                                    <path d="M13.3559 11.3096L19.4716 5.19384V27.8986C19.4716 28.3041 19.6327 28.693 19.9195 28.9797C20.2062 29.2665 20.5951 29.4276 21.0006 29.4276C21.4061 29.4276 21.795 29.2665 22.0817 28.9797C22.3684 28.693 22.5295 28.3041 22.5295 27.8986V5.21678L28.6453 11.3325C28.7873 11.4746 28.956 11.5873 29.1416 11.6642C29.3272 11.741 29.5261 11.7806 29.727 11.7806C29.9279 11.7806 30.1268 11.741 30.3124 11.6642C30.498 11.5873 30.6667 11.4746 30.8087 11.3325C30.9508 11.1905 31.0635 11.0218 31.1404 10.8362C31.2172 10.6506 31.2568 10.4517 31.2568 10.2508C31.2568 10.0499 31.2172 9.85099 31.1404 9.66539C31.0635 9.47978 30.9508 9.31114 30.8087 9.16909L22.0861 0.446481C21.8736 0.240325 21.6096 0.095103 21.3217 0.0260223C21.0742 -0.0195292 20.8194 -0.00512474 20.5787 0.0680291C20.338 0.141183 20.1183 0.270956 19.938 0.446481L11.2154 9.14615C10.9726 9.43823 10.8473 9.8102 10.8637 10.1896C10.8802 10.569 11.0373 10.9288 11.3044 11.1987C11.5715 11.4687 11.9295 11.6296 12.3087 11.6501C12.688 11.6706 13.0612 11.5492 13.3559 11.3096Z" fill="#6B6F86"/>
                                    </svg>     
                                </div>
                                <input id="dropzone-file" type="file" class="hidden" />
                            </label>
                        </div> 
                    </div>
                    

                </div>

                {/* Email notification area */}

               <div class="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-#5E75FB bg-gray-100 border-gray-300 rounded focus:ring-#5E75FB dark:focus:ring-#5E75FB dark:ring-offset-#5E75FB focus:ring-2 dark:bg-#5E75FB dark:#5E75FB"/>
                    <label for="checked-checkbox" class="ml-2 text-lg font-medium text-[#5E75FB] ">   Email Notifications <span className='text-[#6B6F86] text-sm' >(optional)</span></label>
               </div>

               <div className='flex justify-start items-center gap-3'>
                        <div className="  w-[25%] h-[49px] my-2"> 
                            <label for="state" className="text-[#090D28] text-[16px] leading-[-0.33px] ">Name</label>
                            <input id="state" type="text" placeholder="John" className="w-full h-[49px] mt-2 px-3 rounded-md  border-[#D2D2D2] border-[1px] rounded--[4px] text-gray-900" />
                        </div>
                        <div className=" w-[25%] h-[49px] my-2 ">
                            <label for="zip" className="text-[#090D28] text-[16px] leading-[-0.33px] ">Email</label>
                            <input id="zip" type="text" placeholder="johndoe@gmail.com" className="w-full h-[49px] mt-2 px-3  rounded-md  border-[#D2D2D2] border-[1px] rounded--[4px] text-gray-900" />
                        </div>
                </div>

		
	        </form>
        </div>
    );
};

export default UnBrandingForm;