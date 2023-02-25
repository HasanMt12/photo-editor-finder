import React, { useState } from "react";
import { Link } from "react-router-dom";
import eye from "../../../assets/eyecut.png";
import Table from "../../../Dashboard/table/Table";
import "./SignIn.css";
const SignIn = () => {
  const [forgotPass, setForgotPass] = useState(null);

  return (
    <div className="flex ">
      {/* background */}
      <div className="bg  ">
        <div className="logo">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 215 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_2119)">
              <path
                d="M5.45536 11.3936C5.06765 11.3931 4.6862 11.494 4.34703 11.6869C4.00786 11.8797 3.72216 12.1582 3.51689 12.4959C3.31162 12.8337 3.19355 13.2196 3.17385 13.6172C3.15414 14.0148 3.23344 14.411 3.40426 14.7683C3.57508 15.1257 3.83178 15.4325 4.15013 15.6598C4.46849 15.887 4.83798 16.0272 5.22374 16.067C5.6095 16.1069 5.99878 16.0452 6.35484 15.8877C6.71091 15.7302 7.02202 15.482 7.25879 15.1668L9.77005 16.5233C9.69241 16.7702 9.65137 17.0277 9.64832 17.2872C9.64112 17.9286 9.85589 18.5518 10.2544 19.0459C10.6528 19.5399 11.2092 19.8727 11.8242 19.9849C12.4393 20.0971 13.0732 19.9815 13.6131 19.6587C14.1529 19.3358 14.5636 18.8267 14.772 18.222C14.9805 17.6173 14.9731 16.9562 14.7512 16.3565C14.5294 15.7568 14.1074 15.2575 13.5606 14.9474C13.0137 14.6374 12.3774 14.5367 11.7649 14.6633C11.1525 14.79 10.6038 15.1357 10.2164 15.639L7.68259 14.2733C7.72589 14.0977 7.74859 13.9174 7.75022 13.7362C7.74822 13.3633 7.6585 12.9964 7.48871 12.6668L9.26509 11.1251C9.9114 11.8473 10.8011 12.2898 11.7536 12.3629C12.7061 12.4359 13.65 12.134 14.3936 11.5185C15.1372 10.9029 15.6248 10.0198 15.7574 9.04849C15.89 8.07719 15.6577 7.09046 15.1076 6.28867C14.5574 5.48688 13.7308 4.93012 12.7954 4.73143C11.8601 4.53274 10.8861 4.70703 10.0714 5.21889C9.25659 5.73075 8.66207 6.54183 8.40849 7.48744C8.15492 8.43304 8.26129 9.4423 8.70603 10.3103L6.87104 11.9029C6.4696 11.5722 5.97003 11.3925 5.45536 11.3936ZM12.2453 15.5881C12.5723 15.589 12.8918 15.6894 13.1633 15.8767C13.4348 16.0639 13.6462 16.3296 13.7707 16.6402C13.8953 16.9507 13.9274 17.2922 13.863 17.6215C13.7987 17.9507 13.6407 18.2531 13.4092 18.4902C13.1776 18.7274 12.8827 18.8887 12.5619 18.9539C12.241 19.0191 11.9086 18.9852 11.6065 18.8564C11.3044 18.7277 11.0463 18.5099 10.8646 18.2306C10.683 17.9513 10.5861 17.623 10.5861 17.2872C10.5861 17.0636 10.6291 16.8423 10.7125 16.6359C10.7959 16.4294 10.9182 16.2419 11.0723 16.0841C11.2265 15.9262 11.4094 15.8012 11.6107 15.7161C11.8119 15.631 12.0276 15.5875 12.2453 15.5881ZM12.0379 6.05105C12.5121 6.05196 12.9753 6.19719 13.3692 6.46838C13.763 6.73956 14.0698 7.12455 14.2506 7.57468C14.4315 8.02481 14.4783 8.51987 14.3853 8.99734C14.2922 9.4748 14.0634 9.91323 13.7278 10.2572C13.3922 10.6012 12.9648 10.8353 12.4996 10.93C12.0345 11.0246 11.5524 10.9756 11.1144 10.789C10.6764 10.6025 10.3021 10.2868 10.0387 9.88188C9.77536 9.47695 9.6348 9.00094 9.6348 8.51401C9.63479 8.19018 9.69698 7.86952 9.8178 7.5704C9.93863 7.27128 10.1157 6.99956 10.3389 6.7708C10.5621 6.54203 10.8271 6.36069 11.1186 6.23719C11.4101 6.11369 11.7225 6.05044 12.0379 6.05105ZM5.45536 15.2223C5.16912 15.2223 4.88931 15.1352 4.65131 14.9719C4.41331 14.8086 4.22781 14.5765 4.11827 14.3049C4.00873 14.0334 3.98006 13.7346 4.03591 13.4463C4.09175 13.158 4.22959 12.8932 4.43199 12.6854C4.63439 12.4775 4.89227 12.336 5.17301 12.2787C5.45375 12.2213 5.74474 12.2508 6.00919 12.3632C6.27364 12.4757 6.49967 12.6662 6.6587 12.9106C6.81772 13.155 6.90261 13.4423 6.90261 13.7362C6.90261 14.1304 6.75013 14.5084 6.47872 14.7871C6.2073 15.0658 5.83919 15.2223 5.45536 15.2223Z"
                fill="url(#paint0_linear_1_2119)"
              ></path>
              <path
                d="M44.5401 0H2.86744C2.10653 0.0012266 1.3772 0.312474 0.839577 0.865399C0.301956 1.41833 -9.37613e-07 2.16773 0 2.94907V30.4491L1.15419 29.5694V2.94907C1.15538 2.48243 1.33612 2.03519 1.65703 1.70479C1.97794 1.37439 2.41301 1.18763 2.86744 1.18518H44.5401C44.9949 1.18641 45.4307 1.37279 45.7519 1.70345C46.073 2.03411 46.2534 2.48206 46.2534 2.94907V12.3009L47.4076 11.375V2.94907C47.4076 2.16773 47.1056 1.41833 46.568 0.865399C46.0304 0.312474 45.301 0.0012266 44.5401 0ZM46.2534 14.6713V37.0509C46.2534 37.5179 46.073 37.9659 45.7519 38.2966C45.4307 38.6272 44.9949 38.8136 44.5401 38.8148H2.86744C2.41301 38.8124 1.97794 38.6256 1.65703 38.2952C1.33612 37.9648 1.15538 37.5176 1.15419 37.0509V31.9583L0 32.8333V37.0648C0.00471629 37.8447 0.308188 38.5913 0.844792 39.1431C1.3814 39.695 2.10799 40.0078 2.86744 40.0139H44.5401C45.2996 40.0078 46.0262 39.695 46.5628 39.1431C47.0994 38.5913 47.4029 37.8447 47.4076 37.0648V13.7778L46.2534 14.6713Z"
                fill="url(#paint1_linear_1_2119)"
              ></path>
              <path
                d="M47.4076 13.7637V37.0507C47.4029 37.8305 47.0994 38.5772 46.5628 39.129C46.0262 39.6809 45.2996 39.9937 44.5401 39.9998H2.86744C2.10799 39.9937 1.3814 39.6809 0.844792 39.129C0.308188 38.5772 0.00471629 37.8305 0 37.0507V32.8192L1.15419 31.9442L15.2029 21.222C16.0259 20.5942 17.0326 20.2733 18.0572 20.312C19.0817 20.3507 20.0628 20.7468 20.8386 21.435L25.9288 25.9581C26.7116 26.6531 27.7036 27.0504 28.738 27.0833C29.7724 27.1162 30.7863 26.7826 31.6096 26.1387L46.2534 14.6711L47.4076 13.7637Z"
                fill="url(#paint2_linear_1_2119)"
              ></path>
              <path
                d="M58.8096 32.727V9.3011H62.5291L62.7906 11.5789C63.3965 10.7411 64.1883 10.0637 65.1002 9.60316C66.0122 9.14259 67.018 8.91207 68.0341 8.93074C72.9935 8.93074 76.2893 12.7178 76.2893 17.5789C76.2893 22.44 73.3226 26.2224 68.1739 26.2224C66.4741 26.2224 63.9629 25.6854 62.8222 23.8798V32.727H58.8096ZM72.2857 17.5789C72.2857 14.9955 70.5904 12.8844 67.7185 12.8844C64.8465 12.8844 63.1468 14.9955 63.1468 17.5789C63.1841 18.7978 63.6819 19.954 64.5347 20.8027C65.3876 21.6514 66.5286 22.1259 67.7162 22.1259C68.9039 22.1259 70.0449 21.6514 70.8978 20.8027C71.7506 19.954 72.2484 18.7978 72.2857 17.5789Z"
                fill="url(#paint3_linear_1_2119)"
              ></path>
              <path
                d="M83.1876 2.36133V11.5465C83.7633 10.7415 84.5228 10.0941 85.3994 9.66137C86.2761 9.22865 87.2428 9.02385 88.2147 9.06502C92.7818 9.06502 94.8062 12.2502 94.8062 17.1067V25.8197H90.8251V17.1437C90.8251 14.1252 89.2877 12.8521 87.1687 12.8521C84.8197 12.8521 83.1876 14.8984 83.1876 17.3752V25.8197H79.2065V2.36133H83.1876Z"
                fill="url(#paint4_linear_1_2119)"
              ></path>
              <path
                d="M114.157 17.5786C114.157 22.3379 111.001 26.1898 105.771 26.1898C100.541 26.1898 97.4165 22.3379 97.4165 17.5786C97.4165 12.8194 100.613 8.96289 105.739 8.96289C110.866 8.96289 114.157 12.8518 114.157 17.5786ZM101.398 17.5786C101.398 20.0925 102.867 22.4351 105.771 22.4351C108.674 22.4351 110.144 20.0925 110.144 17.5786C110.144 15.0647 108.444 12.6851 105.771 12.6851C102.899 12.6851 101.398 15.0972 101.398 17.5786Z"
                fill="url(#paint5_linear_1_2119)"
              ></path>
              <path
                d="M122.187 4.64355V9.33337H126.646V12.8519H122.137V19.9908C122.137 21.5648 122.985 22.338 124.225 22.338C124.895 22.317 125.552 22.1448 126.15 21.8334L127.259 25.3195C126.214 25.7674 125.095 26.0063 123.963 26.0232C120.469 26.1574 118.188 24.1111 118.188 20.0047V12.8519H115.185V9.33337H118.188V5.07874L122.187 4.64355Z"
                fill="url(#paint6_linear_1_2119)"
              ></path>
              <path
                d="M145.582 17.5786C145.582 22.3379 142.426 26.1898 137.196 26.1898C131.966 26.1898 128.837 22.3379 128.837 17.5786C128.837 12.8194 132.038 8.96289 137.16 8.96289C142.281 8.96289 145.582 12.8518 145.582 17.5786ZM132.822 17.5786C132.822 20.0925 134.288 22.4351 137.196 22.4351C140.104 22.4351 141.569 20.0925 141.569 17.5786C141.569 15.0647 139.869 12.6851 137.196 12.6851C134.31 12.6851 132.827 15.0972 132.827 17.5786H132.822Z"
                fill="url(#paint7_linear_1_2119)"
              ></path>
              <path
                d="M158.837 13.69C158.304 13.1817 157.677 12.7889 156.993 12.5352C156.309 12.2814 155.582 12.1719 154.856 12.2131C152.962 12.2131 151.916 12.8196 151.916 13.8566C151.916 14.8937 152.863 15.5326 154.919 15.6668C157.953 15.8659 161.804 16.5928 161.804 20.9631C161.804 23.8798 159.486 26.3891 154.887 26.3891C152.34 26.3891 149.797 25.9539 147.444 23.44L149.405 20.5279C150.546 21.8335 153.156 22.8057 154.951 22.8428C156.452 22.8752 157.859 22.0742 157.859 20.8659C157.859 19.727 156.957 19.2594 154.658 19.1252C151.623 18.8891 147.998 17.7363 147.998 13.9955C147.998 10.2548 151.853 8.8335 154.788 8.8335C157.3 8.8335 159.193 9.33814 161.055 11.0141L158.837 13.69Z"
                fill="url(#paint8_linear_1_2119)"
              ></path>
              <path
                d="M168.332 2.36133V11.5465C168.908 10.7418 169.667 10.0946 170.544 9.66192C171.42 9.22924 172.387 9.02426 173.359 9.06502C177.926 9.06502 179.95 12.2502 179.95 17.1067V25.8197H175.969V17.1437C175.969 14.1252 174.436 12.8521 172.313 12.8521C169.964 12.8521 168.332 14.8984 168.332 17.3752V25.8197H164.351V2.36133H168.332Z"
                fill="url(#paint9_linear_1_2119)"
              ></path>
              <path
                d="M186.704 19.0184C186.966 21.0601 188.697 22.5369 191.501 22.5369C192.971 22.5369 194.896 21.9675 195.811 20.9952L198.359 23.574C196.659 25.3841 193.886 26.2545 191.438 26.2545C185.888 26.2545 182.592 22.736 182.592 17.4582C182.592 12.4304 185.924 8.81006 191.159 8.81006C196.542 8.81006 199.905 12.2267 199.274 19.0323L186.704 19.0184ZM195.451 15.6341C195.189 13.4906 193.557 12.4165 191.276 12.4165C189.121 12.4165 187.358 13.4906 186.767 15.6341H195.451Z"
                fill="url(#paint10_linear_1_2119)"
              ></path>
              <path
                d="M206.028 9.30084L206.321 11.2082C207.561 9.16658 209.225 8.86566 210.857 8.86566C212.381 8.83897 213.86 9.40069 215 10.4397L213.197 13.9907C212.811 13.626 212.358 13.3433 211.865 13.159C211.372 12.9746 210.849 12.8922 210.325 12.9166C208.237 12.9166 206.312 14.0601 206.312 17.1064V25.8194H202.331V9.30084H206.028Z"
                fill="url(#paint11_linear_1_2119)"
              ></path>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1_2119"
                x1="9.48238"
                y1="4.83299"
                x2="8.52435"
                y2="19.2077"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white"></stop>
                <stop offset="1" stop-color="white"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_1_2119"
                x1="23.7038"
                y1="0.472681"
                x2="21.9721"
                y2="37.9686"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white"></stop>
                <stop offset="1" stop-color="white"></stop>
              </linearGradient>
              <linearGradient
                id="paint2_linear_1_2119"
                x1="23.7038"
                y1="14.0736"
                x2="22.9584"
                y2="38.6886"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white"></stop>
                <stop offset="1" stop-color="white"></stop>
              </linearGradient>
              <linearGradient
                id="paint3_linear_1_2119"
                x1="67.5494"
                y1="9.2108"
                x2="65.8939"
                y2="31.4349"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white"></stop>
                <stop offset="1" stop-color="white"></stop>
              </linearGradient>
              <linearGradient
                id="paint4_linear_1_2119"
                x1="87.0064"
                y1="2.63844"
                x2="85.206"
                y2="24.5193"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white"></stop>
                <stop offset="1" stop-color="white"></stop>
              </linearGradient>
              <linearGradient
                id="paint5_linear_1_2119"
                x1="105.787"
                y1="9.16639"
                x2="104.879"
                y2="25.2925"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white"></stop>
                <stop offset="1" stop-color="white"></stop>
              </linearGradient>
              <linearGradient
                id="paint6_linear_1_2119"
                x1="121.222"
                y1="4.89618"
                x2="119.294"
                y2="24.7921"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white"></stop>
                <stop offset="1" stop-color="white"></stop>
              </linearGradient>
              <linearGradient
                id="paint7_linear_1_2119"
                x1="137.209"
                y1="9.16639"
                x2="136.302"
                y2="25.2925"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white"></stop>
                <stop offset="1" stop-color="white"></stop>
              </linearGradient>
              <linearGradient
                id="paint8_linear_1_2119"
                x1="154.624"
                y1="9.04088"
                x2="153.526"
                y2="25.4533"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white"></stop>
                <stop offset="1" stop-color="white"></stop>
              </linearGradient>
              <linearGradient
                id="paint9_linear_1_2119"
                x1="172.15"
                y1="2.63844"
                x2="170.35"
                y2="24.5193"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white"></stop>
                <stop offset="1" stop-color="white"></stop>
              </linearGradient>
              <linearGradient
                id="paint10_linear_1_2119"
                x1="190.971"
                y1="9.01613"
                x2="190.041"
                y2="25.3447"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white"></stop>
                <stop offset="1" stop-color="white"></stop>
              </linearGradient>
              <linearGradient
                id="paint11_linear_1_2119"
                x1="208.666"
                y1="9.06503"
                x2="207.506"
                y2="24.9017"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white"></stop>
                <stop offset="1" stop-color="white"></stop>
              </linearGradient>
              <clipPath id="clip0_1_2119">
                <rect width="215" height="40" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="content-Div ">
          <h3 className="signInText1 ">Get 20 free credits on </h3>
          <h3 className="signInText1 ">your first signup</h3>
        </div>
        <div className="contentDiv2 ">
          <p className="signInText2 -mt-8">
            {" "}
            Discover the world's best community of freelancers and business
            owners. Simply unbelievable! I am really satisfied with my projects
            and business. This is Absolutely wonderful!
          </p>
        </div>
      </div>

      {/* sign in */}

      <div className="py-36 px-4 mx-auto h-screen ">
        <div className="">
          <h1 className="text-3xl font-bold text-gray-800">
            Hi, Welcome Back !!
          </h1>
          <p className="text-base text-gray-500 py-2">
            You need to sign in to start uploading images!!
          </p>
        </div>
        <form className="w-[450px] mx-auto">
          <div className="pb-5 ">
            <label htmlFor="email" className="block mb-2 text-lg">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="john@example.com"
              className="w-full  px-5 py-2 border rounded-md border-gray-300  text-gray-50 text-lg  focus:outline-blue-600"
              data-temp-mail-org="0"
            />
          </div>
          <div className="pb-5">
            <label htmlFor="password" className="block mb-2 text-lg">
              Password
            </label>
            <div className="relative ">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="abcd"
                className="w-full  px-5 py-2 border rounded-md border-gray-300  text-gray-50 text-lg focus:outline-blue-600"
                data-temp-mail-org="0"
              />
              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <img className="h-4 w-4  " src={eye} alt="" />
              </span>
            </div>
          </div>
          <div>
            <div class="flex gap-24 items-center ">
              <label
                for="MarketingAccept"
                className="mr-4 flex items-center justify-center"
              >
                <input
                  type="checkbox"
                  id="MarketingAccept"
                  name="marketing_accept"
                  class="h-4 w-4 mr-2 cursor-pointer border-gray-200 bg-white shadow-sm"
                />

                <span class="text-lg cursor-pointer  text-[#5E75FB]">
                  Keep me Signed In
                </span>
              </label>
              <Link to='/forgotpass' class="text-lg text-[#5E75FB] font-semibold cursor-pointer">
                Forgot password ?
              </Link>
            </div>
          </div>
          <Link to='/dashboard'><button
            type="submit"
            className="w-full py-2 mt-8 text-xl  tracking-wide  rounded-md bg-[#324FF6] hover:bg-blue-700 text-white"
          >
            Sign in
          </button></Link>
        </form>
        {/* OR-------------- */}
        <div class="relative py-4">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-b border-gray-300"></div>
          </div>
          <div class="relative flex justify-center">
            <span class="bg-white px-4 text-lg text-gray-600">OR</span>
              
          </div>
        </div>
        {/* end------------OR */}
        <button class="bg-white flex items-center text-gray-700  justify-center gap-x-4 w-full  sm:text-base   border-gray-300  rounded-md hover:bg-gray-100 duration-300 transition-colors border px-8 py-2">
          <svg
            class="w-5 h-5 sm:h-6 sm:w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3033_94454)">
              <path
                d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z"
                fill="#4285F4"
              />
              <path
                d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z"
                fill="#34A853"
              />
              <path
                d="M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z"
                fill="#FBBC04"
              />
              <path
                d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z"
                fill="#EA4335"
              />
            </g>
            <defs>
              <clipPath id="clip0_3033_94454">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <span className="text-lg font-semibold">Log in with Google</span>
        </button>
        <div class="flex items-center justify-center py-5 text-center bg-gray-50 ">
          <span class="text-lg text-black ">Don't have an account? </span>

          <Link
            to="/signup"
            class="mx-2 text-lg font-bold text-violet-500  hover:underline"
          >
            Sign up
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default SignIn;
