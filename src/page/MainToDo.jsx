import { React, useState } from 'react';
import StateModal from './component/StateModal';
import StateMain from './component/StateMain'
import List from './component/List'
import AddButton from './component/AddButton'
import { useRecoilState } from 'recoil';
import { UserInfoRecoil } from './../recoil/recoil';
import { AiFillHeart } from "react-icons/ai";
import { BsFillCloudRainFill } from "react-icons/bs";
import { FaFireAlt } from "react-icons/fa";
import { GiPartyPopper, GiNightSleep } from "react-icons/gi";


const MainToDo = () => {
    const [userInfo, setUserInfo] = useRecoilState(UserInfoRecoil);
    const [modal, setModal] = useState(false);
    const changeModal = () => {
        setModal(!modal)
    };
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
        <div className='basic_modal2'>
            <h1 className='title'>ToDoList</h1>
            <div className='userInfoDiv'>
                <StateMain changeModal={changeModal} />
                <div className='userInfoName'>{userInfo.name}</div>
                <div className='userInfoGoal'>{userInfo.goal}</div>
            </div>
            {modal ? <StateModal icon={icons} /> : null}
            <List />
            <AddButton />
        </div >
    );
};

export default MainToDo;