import React, { useState } from 'react';
import StateButton from './StateButton';
import { useRecoilState } from 'recoil';
import { StateIconsRecoil } from './../../recoil/recoil';

const StateModal = ({ icon }) => {
  return (
    <div >
      <img className="stateModal" src='StateModal.png'></img>
      {
        icon.map((icon, index) => (
          < div className='stateModalIcon' >
            <StateButton icon={icon.icon} index={index} key={icon.id} />
          </div>
        ))
      }
    </div >
  );
};
export default StateModal;


/*{[0, 0, 0, 0, 0].map((v, i) => (
    <li
    onClick={() => {
      setInfo({ ...info, star_count: i + 1 });
    }}
    key={i + 1}
    className={`${
      i + 1 <= info.star_count ? "text-red-500" : false
    } flex justify-center items-center flex-col`}
  >
    <FiStar />
  </li>
))}*/