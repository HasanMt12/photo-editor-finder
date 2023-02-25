import React, { useState } from 'react';
import './AssetsLibrary.css'

const SkysSection = () => {

        const [selectPhoto, setSelectPhoto] = useState(0);
        const toggleSelect = (index) => {
    setSelectPhoto(index);
  };

    return (
        <div className='mt-8'>
            <div className='grid lg:grid-cols-4 gap-[27px]'>
                <div  onClick={()=>toggleSelect(1)} className='w-[100%] h-[263px] photoCard cursor-pointer relative'>
                   {selectPhoto === 1 &&  <div className='absolute flex justify-center items-center top-3 right-5 w-[28px] h-[28px] bg-gradient-to-r from-[#00D670] rounded-full to-[#24E0CA]'>
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 7.33333L8.4 14L18 2" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>}
                    <img src='https://i.ibb.co/j6Rv11F/photo1.png' alt='' className='cardPhoto'></img>
                    <div className='cardPhotoName flex justify-center items-center'>
                        <h5 className='text-center text-[#090D28;] text-lg font-medium'>Blue Sky 01.jpg</h5>
                    </div>
                </div>
                <div onClick={()=>toggleSelect(2)} className='w-[100%] h-[263px] photoCard cursor-pointer relative'>
                   {selectPhoto === 2 &&  <div className='absolute flex justify-center items-center top-3 right-5 w-[28px] h-[28px] bg-gradient-to-r from-[#00D670] rounded-full to-[#24E0CA]'>
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 7.33333L8.4 14L18 2" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>}
                    <img src='https://i.ibb.co/X3mcPrG/photo2.png' alt='' className='cardPhoto'></img>
                    <div className='cardPhotoName flex justify-center items-center'>
                        <h5 className='text-center text-[#090D28;] text-lg font-medium'>Blue Sky 01.jpg</h5>
                    </div>
                 </div>
                 <div onClick={()=>toggleSelect(3)} className='w-[100%] h-[263px] photoCard cursor-pointer relative'>
                    {selectPhoto === 3 &&  <div className='absolute flex justify-center items-center top-3 right-5 w-[28px] h-[28px] bg-gradient-to-r from-[#00D670] rounded-full to-[#24E0CA]'>
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 7.33333L8.4 14L18 2" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>}
                    <div className='cardPhoto p-[28%]'>
                        <svg className='ml-[35%]' width="48" height="41" viewBox="0 0 48 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.45536 11.3936C5.06765 11.3931 4.6862 11.494 4.34703 11.6869C4.00786 11.8797 3.72216 12.1582 3.51689 12.4959C3.31162 12.8337 3.19355 13.2196 3.17385 13.6172C3.15414 14.0148 3.23344 14.411 3.40426 14.7683C3.57508 15.1257 3.83178 15.4325 4.15013 15.6598C4.46849 15.887 4.83798 16.0272 5.22374 16.067C5.6095 16.1069 5.99878 16.0452 6.35484 15.8877C6.71091 15.7302 7.02202 15.482 7.25879 15.1668L9.77005 16.5233C9.69241 16.7702 9.65137 17.0277 9.64832 17.2872C9.64112 17.9286 9.85589 18.5518 10.2544 19.0459C10.6528 19.5399 11.2092 19.8727 11.8242 19.9849C12.4393 20.0971 13.0732 19.9815 13.6131 19.6587C14.1529 19.3358 14.5636 18.8267 14.772 18.222C14.9805 17.6173 14.9731 16.9562 14.7512 16.3565C14.5294 15.7568 14.1074 15.2575 13.5606 14.9474C13.0137 14.6374 12.3774 14.5367 11.7649 14.6633C11.1525 14.79 10.6038 15.1357 10.2164 15.639L7.68259 14.2733C7.72589 14.0977 7.74859 13.9174 7.75022 13.7362C7.74822 13.3633 7.6585 12.9964 7.48871 12.6668L9.26509 11.1251C9.9114 11.8473 10.8011 12.2898 11.7536 12.3629C12.7061 12.4359 13.65 12.134 14.3936 11.5185C15.1372 10.9029 15.6248 10.0198 15.7574 9.04849C15.89 8.07719 15.6577 7.09046 15.1076 6.28867C14.5574 5.48688 13.7308 4.93012 12.7954 4.73143C11.8601 4.53274 10.8861 4.70703 10.0714 5.21889C9.25659 5.73075 8.66207 6.54183 8.40849 7.48744C8.15492 8.43304 8.26129 9.4423 8.70603 10.3103L6.87104 11.9029C6.4696 11.5722 5.97003 11.3925 5.45536 11.3936ZM12.2453 15.5881C12.5723 15.589 12.8918 15.6894 13.1633 15.8767C13.4348 16.0639 13.6462 16.3296 13.7707 16.6402C13.8953 16.9507 13.9274 17.2922 13.863 17.6215C13.7987 17.9507 13.6407 18.2531 13.4092 18.4902C13.1776 18.7274 12.8827 18.8887 12.5619 18.9539C12.241 19.0191 11.9086 18.9852 11.6065 18.8564C11.3044 18.7277 11.0463 18.5099 10.8646 18.2306C10.683 17.9513 10.5861 17.623 10.5861 17.2872C10.5861 17.0636 10.6291 16.8423 10.7125 16.6359C10.7959 16.4294 10.9182 16.2419 11.0723 16.0841C11.2265 15.9262 11.4094 15.8012 11.6107 15.7161C11.8119 15.631 12.0276 15.5875 12.2453 15.5881ZM12.0379 6.05105C12.5121 6.05196 12.9753 6.19719 13.3692 6.46838C13.763 6.73956 14.0698 7.12455 14.2506 7.57468C14.4315 8.02481 14.4783 8.51987 14.3853 8.99734C14.2922 9.4748 14.0634 9.91323 13.7278 10.2572C13.3922 10.6012 12.9648 10.8353 12.4996 10.93C12.0345 11.0246 11.5524 10.9756 11.1144 10.789C10.6764 10.6025 10.3021 10.2868 10.0387 9.88188C9.77536 9.47695 9.6348 9.00094 9.6348 8.51401C9.63479 8.19018 9.69698 7.86952 9.8178 7.5704C9.93863 7.27128 10.1157 6.99956 10.3389 6.7708C10.5621 6.54203 10.8271 6.36069 11.1186 6.23719C11.4101 6.11369 11.7225 6.05044 12.0379 6.05105ZM5.45536 15.2223C5.16912 15.2223 4.88931 15.1352 4.65131 14.9719C4.41331 14.8086 4.22781 14.5765 4.11827 14.3049C4.00873 14.0334 3.98006 13.7346 4.03591 13.4463C4.09175 13.158 4.22959 12.8932 4.43199 12.6854C4.63439 12.4775 4.89227 12.336 5.17301 12.2787C5.45375 12.2213 5.74474 12.2508 6.00919 12.3632C6.27364 12.4757 6.49967 12.6662 6.6587 12.9106C6.81772 13.155 6.90261 13.4423 6.90261 13.7362C6.90261 14.1304 6.75013 14.5084 6.47872 14.7871C6.2073 15.0658 5.83919 15.2223 5.45536 15.2223Z" fill="#3556F2"/>
                        <path d="M44.5401 0H2.86744C2.10653 0.0012266 1.3772 0.312474 0.839577 0.865399C0.301956 1.41833 -9.37613e-07 2.16773 0 2.94907V30.4491L1.15419 29.5694V2.94907C1.15538 2.48243 1.33612 2.03519 1.65703 1.70479C1.97794 1.37439 2.41301 1.18763 2.86744 1.18518H44.5401C44.9949 1.18641 45.4307 1.37279 45.7519 1.70345C46.073 2.03411 46.2534 2.48206 46.2534 2.94907V12.3009L47.4076 11.375V2.94907C47.4076 2.16773 47.1056 1.41833 46.568 0.865399C46.0304 0.312474 45.301 0.0012266 44.5401 0ZM46.2534 14.6713V37.0509C46.2534 37.5179 46.073 37.9659 45.7519 38.2966C45.4307 38.6272 44.9949 38.8136 44.5401 38.8148H2.86744C2.41301 38.8124 1.97794 38.6256 1.65703 38.2952C1.33612 37.9648 1.15538 37.5176 1.15419 37.0509V31.9583L0 32.8333V37.0648C0.00471629 37.8447 0.308188 38.5913 0.844792 39.1431C1.3814 39.695 2.10799 40.0078 2.86744 40.0139H44.5401C45.2996 40.0078 46.0262 39.695 46.5628 39.1431C47.0994 38.5913 47.4029 37.8447 47.4076 37.0648V13.7778L46.2534 14.6713Z" fill="#3556F2"/>
                        <path d="M47.4076 13.7639V37.0509C47.4029 37.8308 47.0994 38.5774 46.5628 39.1293C46.0262 39.6812 45.2996 39.9939 44.5401 40H2.86744C2.10799 39.9939 1.3814 39.6812 0.844792 39.1293C0.308188 38.5774 0.00471629 37.8308 0 37.0509V32.8195L1.15419 31.9445L15.2029 21.2222C16.0259 20.5945 17.0326 20.2735 18.0572 20.3122C19.0817 20.3509 20.0628 20.747 20.8386 21.4352L25.9288 25.9584C26.7116 26.6534 27.7036 27.0507 28.738 27.0836C29.7724 27.1164 30.7863 26.7829 31.6096 26.1389L46.2534 14.6713L47.4076 13.7639Z" fill="#3556F2"/>
                        </svg>
                        
                        <svg width="157" height="31" viewBox="0 0 157 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 30.3657V6.93977H3.71957L3.98106 9.21756C4.58693 8.37972 5.37873 7.7024 6.29068 7.24183C7.20263 6.78126 8.20841 6.55074 9.22452 6.56941C14.1839 6.56941 17.4797 10.3564 17.4797 15.2176C17.4797 20.0787 14.5131 23.8611 9.36429 23.8611C7.66456 23.8611 5.15329 23.324 4.01262 21.5185V30.3657H0ZM13.4761 15.2176C13.4761 12.6342 11.7809 10.5231 8.90892 10.5231C6.03696 10.5231 4.33724 12.6342 4.33724 15.2176C4.37453 16.4365 4.87229 17.5927 5.72515 18.4413C6.57802 19.29 7.71903 19.7646 8.90666 19.7646C10.0943 19.7646 11.2353 19.29 12.0882 18.4413C12.9411 17.5927 13.4388 16.4365 13.4761 15.2176Z" fill="#6B6F86"/>
                        <path d="M24.3779 0V9.18518C24.9536 8.38014 25.7131 7.73276 26.5897 7.30004C27.4664 6.86732 28.4331 6.66252 29.405 6.70369C33.9721 6.70369 35.9965 9.88889 35.9965 14.7454V23.4583H32.0154V14.7824C32.0154 11.7639 30.478 10.4907 28.359 10.4907C26.01 10.4907 24.3779 12.537 24.3779 15.0139V23.4583H20.3969V0H24.3779Z" fill="#6B6F86"/>
                        <path d="M55.3472 15.2176C55.3472 19.9768 52.1913 23.8287 46.9613 23.8287C41.7314 23.8287 38.6069 19.9768 38.6069 15.2176C38.6069 10.4583 41.8035 6.60181 46.9298 6.60181C52.056 6.60181 55.3472 10.4907 55.3472 15.2176ZM42.588 15.2176C42.588 17.7314 44.0578 20.074 46.9613 20.074C49.8648 20.074 51.3346 17.7314 51.3346 15.2176C51.3346 12.7037 49.6349 10.324 46.9613 10.324C44.0894 10.324 42.588 12.7361 42.588 15.2176Z" fill="#6B6F86"/>
                        <path d="M63.3769 2.28247V6.97229H67.8359V10.4908H63.3273V17.6297C63.3273 19.2038 64.1749 19.9769 65.4148 19.9769C66.0848 19.956 66.7421 19.7837 67.34 19.4723L68.449 22.9584C67.4041 23.4063 66.2855 23.6452 65.1533 23.6621C61.6591 23.7964 59.3778 21.7501 59.3778 17.6436V10.4908H56.3751V6.97229H59.3778V2.71766L63.3769 2.28247Z" fill="#6B6F86"/>
                        <path d="M86.7719 15.2176C86.7719 19.9768 83.6159 23.8287 78.386 23.8287C73.1561 23.8287 70.0271 19.9768 70.0271 15.2176C70.0271 10.4583 73.2282 6.60181 78.3499 6.60181C83.4717 6.60181 86.7719 10.4907 86.7719 15.2176ZM74.0127 15.2176C74.0127 17.7314 75.478 20.074 78.386 20.074C81.294 20.074 82.7593 17.7314 82.7593 15.2176C82.7593 12.7037 81.0596 10.324 78.386 10.324C75.5005 10.324 74.0172 12.7361 74.0172 15.2176H74.0127Z" fill="#6B6F86"/>
                        <path d="M100.027 11.3287C99.4942 10.8204 98.867 10.4276 98.183 10.1739C97.499 9.9201 96.7722 9.81057 96.046 9.85181C94.1524 9.85181 93.1064 10.4583 93.1064 11.4953C93.1064 12.5324 94.0532 13.1712 96.1091 13.3055C99.1434 13.5046 102.994 14.2314 102.994 18.6018C102.994 21.5185 100.676 24.0277 96.0776 24.0277C93.5302 24.0277 90.9874 23.5925 88.6339 21.0787L90.5951 18.1666C91.7358 19.4722 94.3463 20.4444 96.1407 20.4814C97.642 20.5138 99.0487 19.7129 99.0487 18.5046C99.0487 17.3657 98.147 16.8981 95.8476 16.7638C92.8134 16.5277 89.1885 15.375 89.1885 11.6342C89.1885 7.89348 93.0433 6.47217 95.9784 6.47217C98.4896 6.47217 100.383 6.97681 102.245 8.65273L100.027 11.3287Z" fill="#6B6F86"/>
                        <path d="M109.522 0V9.18518C110.098 8.38044 110.858 7.73328 111.734 7.30059C112.611 6.86791 113.577 6.66293 114.549 6.70369C119.116 6.70369 121.141 9.88889 121.141 14.7454V23.4583H117.16V14.7824C117.16 11.7639 115.627 10.4907 113.503 10.4907C111.154 10.4907 109.522 12.537 109.522 15.0139V23.4583H105.541V0H109.522Z" fill="#6B6F86"/>
                        <path d="M127.895 16.6575C128.156 18.6992 129.887 20.1761 132.692 20.1761C134.161 20.1761 136.087 19.6066 137.002 18.6344L139.549 21.2131C137.849 23.0233 135.077 23.8937 132.629 23.8937C127.078 23.8937 123.783 20.3751 123.783 15.0974C123.783 10.0696 127.115 6.44922 132.349 6.44922C137.732 6.44922 141.096 9.86588 140.464 16.6714L127.895 16.6575ZM136.641 13.2733C136.38 11.1298 134.748 10.0557 132.466 10.0557C130.311 10.0557 128.548 11.1298 127.958 13.2733H136.641Z" fill="#6B6F86"/>
                        <path d="M147.218 6.93976L147.511 8.84716C148.751 6.8055 150.415 6.50457 152.047 6.50457C153.571 6.47789 155.05 7.03961 156.19 8.07864L154.387 11.6296C154.001 11.2649 153.548 10.9822 153.056 10.7979C152.563 10.6135 152.039 10.5312 151.515 10.5555C149.428 10.5555 147.502 11.699 147.502 14.7453V23.4583H143.521V6.93976H147.218Z" fill="#6B6F86"/>
                        </svg>
                     </div>
                    <div className='cardPhotoName flex justify-center items-center'>
                        <h5 className='text-center text-[#090D28;] text-lg font-medium'>Let photosher decided</h5>
                    </div>
                </div>

                <div className='w-[100%] h-[263px] photoCard cursor-pointer'>
                    <div className='cardPhoto flex justify-center items-center'>
                        <svg width="94" height="79" viewBox="0 0 94 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M71.1835 0C65.5584 0 59.9332 2.14172 55.6497 6.42526C55.2079 6.86699 54.7905 7.32381 54.3944 7.7926H5.21783C2.36309 7.7926 0 10.0499 0 12.8483V73.0832C0 75.8818 2.36313 78.1389 5.21783 78.1389H83.2769C86.1315 78.1389 88.4941 75.8818 88.4941 73.0832V35.485C95.2353 26.8715 94.6438 14.3518 86.7173 6.42526C82.4338 2.14172 76.8086 0 71.1835 0ZM71.1835 1.62459C76.3872 1.62459 81.5911 3.60985 85.5619 7.58067C93.5035 15.5223 93.5035 28.3958 85.5619 36.3375C77.6202 44.2793 64.7467 44.2793 56.8051 36.3375C48.8632 28.3958 48.8632 15.5223 56.8051 7.58067C60.7759 3.60984 65.9798 1.62459 71.1835 1.62459ZM71.7372 7.57812C71.3752 7.57844 71.0123 7.5925 70.6492 7.61961C68.3253 7.79316 65.9922 8.5086 63.8026 9.6821C63.3192 9.94116 63.2232 10.5934 63.6114 10.9808L82.1793 29.5024C82.5675 29.8896 83.2194 29.7921 83.4774 29.3083C86.5863 23.4744 86.4543 16.6322 81.4822 11.6603C78.661 8.83912 75.2372 7.57502 71.7372 7.57812ZM71.8962 9.17494C72.1945 9.17673 72.4916 9.18969 72.7876 9.21419C75.4961 9.43838 78.0921 10.581 80.3268 12.8157C84.5079 16.9966 84.8278 22.4348 82.5033 27.5175L65.5964 10.6524C67.6734 9.69679 69.8083 9.16231 71.8962 9.17494ZM5.21783 9.42676H53.1381C47.1859 17.9871 48.0229 29.8663 55.6497 37.4929C64.2168 46.0602 78.1502 46.0602 86.7173 37.4929C86.7656 37.4446 86.8122 37.3951 86.86 37.3464V73.0832C86.86 73.6571 86.7123 74.199 86.4508 74.6755L64.801 47.4297C63.8102 46.1828 61.9245 46.0967 60.8241 47.2481L49.24 59.3658C48.7443 59.8845 48.1996 59.8544 47.7635 59.2844L32.5256 39.3639C32.0453 38.7361 31.3375 38.3554 30.6061 38.3566C29.8747 38.3577 29.1683 38.7406 28.6901 39.3699L1.97281 74.5399C1.75549 74.0972 1.63416 73.6033 1.63416 73.0832V12.8483C1.63416 10.9681 3.21503 9.42676 5.21783 9.42676ZM59.5324 14.3123C59.23 14.3149 58.9538 14.4842 58.8143 14.7525C55.7947 20.5632 55.9522 27.3261 60.8841 32.2581C60.8842 32.2582 60.8848 32.2581 60.8848 32.2581V32.2585C65.7737 37.1473 72.4507 37.3313 78.2356 34.4071C78.7298 34.157 78.8373 33.4981 78.4482 33.104L60.121 14.5552C59.9477 14.3819 59.7554 14.3123 59.5324 14.3123ZM59.7973 16.5529L76.4482 33.4046C71.4269 35.5683 66.1407 35.2038 62.0398 31.1027C57.9003 26.9634 57.5563 21.6031 59.7973 16.5529ZM17.8788 17.5641C13.154 17.5641 9.30644 21.412 9.30644 26.1367C9.30644 30.8615 13.154 34.7087 17.8788 34.7087C22.6035 34.7087 26.4514 30.8615 26.4514 26.1367C26.4514 21.412 22.6035 17.5641 17.8788 17.5641ZM17.8788 19.1982C21.7204 19.1982 24.8173 22.2951 24.8173 26.1367C24.8173 29.9783 21.7204 33.0746 17.8788 33.0746C14.0372 33.0746 10.9406 29.9783 10.9406 26.1367C10.9406 22.2951 14.0372 19.1982 17.8788 19.1982ZM30.609 39.9907C30.7957 39.9906 31.0067 40.0673 31.2279 40.3565L46.4655 60.2773C47.4324 61.5413 49.3217 61.6452 50.4213 60.4947L62.0054 48.377C62.5003 47.8591 63.0757 47.8857 63.5214 48.4466L85.3292 75.8903C84.7505 76.2763 84.0455 76.5047 83.2769 76.5047H5.21783C4.40041 76.5047 3.65569 76.2451 3.05767 75.8134L29.9911 40.3587C30.2113 40.0689 30.4223 39.991 30.609 39.9907Z" fill="#6B6F86"/>
                        </svg>
                    </div>
                    <div className='cardPhotoName flex justify-center items-center'>
                        <h5 className='text-center text-[#090D28;] text-lg font-medium'>Blue Sky 01.jpg</h5>
                    </div>
                 </div>

            </div>

            
                {/* Email notification area */}

               <div class="flex items-center mb-4 mt-16">
                    <input id="default-checkbox" type="checkbox" value="" class="w-[18px] h-[18px] text-#5E75FB bg-gray-100 border-gray-300 rounded focus:ring-#5E75FB dark:focus:ring-#5E75FB dark:ring-offset-#5E75FB focus:ring-2 dark:bg-#5E75FB dark:#5E75FB"/>
                    <label for="checked-checkbox" class="ml-2 text-lg font-medium text-[#5E75FB] ">   Email Notifications <span className='text-[#6B6F86] text-sm' >(optional)</span></label>
               </div>

               <div className='flex justify-start items-center gap-3 '>
                        <div className="  w-[25%] h-[49px] my-1"> 
                            <label for="state" className="text-[#090D28] text-[16px] leading-[-0.33px]  ">Name</label>
                            <input id="state" type="text" placeholder="John" className="w-full h-[49px] mt-2 px-3 rounded-md  border-[#D2D2D2] border-[1px] rounded--[4px] text-gray-900" />
                        </div>
                        <div className=" w-[25%] h-[49px] my-2 ">
                            <label for="zip" className="text-[#090D28] text-[16px] leading-[-0.33px] ">Email</label>
                            <input id="zip" type="text" placeholder="johndoe@gmail.com" className="w-full h-[49px] mt-2 px-3  rounded-md  border-[#D2D2D2] border-[1px] rounded--[4px] text-gray-900" />
                        </div>
                </div>
            
        </div>
    );
};

export default SkysSection;