import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';

const GridView = () => {
  const [settingStatus, setSettingStatus] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [imgId, setImgId] = useState(0);
  const items = [...Array(24)];
    return (
      <div>
        <div className="grid grid-cols-6 justify-between gap-2 px-7 py-8 bg-white rounded">
          {items.map((item, index) => (
            <div key={index} className="relative border rounded-lg bg-slate-700 h-36 w-full">
              <button className="absolute top-2 left-2">
                <BsThreeDotsVertical
                  onClick={() => {
                    setSettingStatus(true);
                    setFavorite(false);
                    setImgId(index)
                  }}
                />
              </button>
              <button className="absolute top-2 right-2">
                <AiFillStar
                  onClick={() => {setFavorite(true); setImgId(index); setSettingStatus(false)}}
                  color="orange"
                />
              </button>
              <div
                style={{
                  border: " .1px solid rgba(0, 0, 0, 0.06)",
                  boxShadow: "0px 24px 48px rgba(0, 0, 0, 0.05)",
                }}
                className={`${
                  settingStatus && imgId=== index ? `block z-30 text-sm` : `hidden`
                } absolute top-3 left-6 bg-white rounded-md`}
              >
                <li
                  className="list-none py-[8px] rounded-t cursor-pointer px-6 hover:bg-[#ddd] transition duration-300"
                  onClick={() => {
                    setSettingStatus(!settingStatus);
                  }}
                >
                  View Details
                </li>
                <li
                  className="list-none py-[8px] cursor-pointer px-6 hover:bg-[#ddd] transition duration-300"
                  onClick={() => {}}
                >
                  Open Gallary
                </li>

                <li
                  className="list-none py-[8px] cursor-pointer px-6 hover:bg-[#ddd] transition duration-300"
                  onClick={() => {}}
                >
                  Download
                </li>
                <li
                  className="list-none py-[8px] cursor-pointer px-6 hover:bg-[#ddd] transition duration-300"
                  onClick={() => {}}
                >
                  Remove from Favorite
                </li>
                <li
                  className="list-none py-[8px] cursor-pointer rounded-b px-6 hover:bg-[#ddd] transition duration-300"
                  onClick={() => {}}
                >
                  Delete
                </li>
              </div>
              <div
                style={{
                  border: " .1px solid rgba(0, 0, 0, 0.06)",
                  boxShadow: "0px 24px 48px rgba(0, 0, 0, 0.05)",
                }}
                className={`${
                  favorite && imgId===index ? `block z-30 text-sm` : `hidden`
                } absolute top-7 right-0 bg-white rounded-md`}
              >
                <li
                  className="list-none py-[8px] rounded-md cursor-pointer px-6 hover:bg-[#ddd] transition duration-300"
                  onClick={() => {
                    setFavorite(!favorite);
                    setSettingStatus(false);
                  }}
                >
                  Click To Unfavorite
                </li>
              </div>
              <img
              onClick={()=> setSettingStatus(false)}
                className="w-full h-full rounded-md"
                src="https://images.unsplash.com/photo-1676476752258-6ce9df0a4820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="not found"
              />
            </div>
          ))}
        </div>
      </div>
    );
};

export default GridView;