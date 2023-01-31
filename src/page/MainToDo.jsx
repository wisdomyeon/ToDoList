import React from 'react';
import { useRecoilState } from 'recoil';
import { UserInfoRecoil } from './../recoil/recoil';
import StateIcon from './../page/component/StateIcon';

const MainToDo = () => {
    const [userInfo, setUserInfo] = useRecoilState(UserInfoRecoil);

    return (
        <div className='basic_modal2'>
            <h1 className='title'>ToDoList</h1>
            <div className='userInfoDiv'>
                <StateIcon />
                <div className='userInfo'>{userInfo.name}</div>
                <div className='userInfo'>{userInfo.goal}</div>
            </div>

        </div >
    );
};

export default MainToDo;