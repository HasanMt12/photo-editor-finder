import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SkysSection from './SkysSection';

const Assets = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    
    return (
        <div>
            <ul className="flex flex-wrap -mb-px border-b border-[#D2D2D2] w-[340px] " >
                <li onClick = {() => handleTabClick(0)}className = "mr-[30px]  cursor-pointer" >
                <div 
                
                    className={`inline-block p-4 ${
                
                    activeTab === 0
                        ? " text-[#090D28] border-b-4 border-[#324FF6] active text-[16px]"
                        : "border-b-2 border-transparent text-[16px] "
                    } rounded-t-lg`}
                >
                Sky's
                </div>
                </li>
                <li onClick = {() => handleTabClick(1)}className = "mr-[30px] cursor-pointer" >
                <div 
                
                    className={`inline-block p-4 ${
                
                    activeTab === 1
                        ? " text-[#090D28] border-b-4 border-[#324FF6] active text-[16px]"
                        : "border-b-2 border-transparent text-[16px] "
                    } rounded-t-lg`}
                >
                Tv’s Screens
                </div>
                </li>
                <li onClick = {() => handleTabClick(2)}className = "cursor-pointer" >
                <div 
                
                    className={`inline-block p-4 ${
                
                    activeTab === 2
                        ? " text-[#090D28] border-b-4 border-[#324FF6] active text-[16px]"
                        : "border-b-2 border-transparent text-[16px] "
                    } rounded-t-lg`}
                >
                Fires
                </div>
                </li>
            </ul>  

            {activeTab === 0 && <SkysSection></SkysSection>}
        </div>
    );
};

export default Assets;