import React, { useState } from 'react';
import StateButton from './StateButton';
import { useRecoilState } from 'recoil';
import { StateIconsRecoil } from './../../recoil/recoil';
import { AiFillHeart } from "react-icons/ai";
import { BsFillCloudRainFill } from "react-icons/bs";
import { FaFireAlt } from "react-icons/fa";
import { GiPartyPopper, GiNightSleep } from "react-icons/gi";


const StateModal = () => {
    const [icons, setIcons] = useState([{
        id: 0,
        icon: <AiFillHeart />
    },
    {
        id: 1,
        icon: <BsFillCloudRainFill />
    },
    {
        id: 2,
        icon: <FaFireAlt />
    },
    {
        id: 3,
        icon: <GiPartyPopper />
    },
    {
        id: 4,
        icon: <GiNightSleep />
    }])

    return (
        <div >
            <img className="stateModal" src='StateModal.png'></img>
            {
                icons.map((icon, index) => (
                    < div className='stateModalIcon' >
                        <StateButton key={icon.id} icon={icon.icon} info={icons} />
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