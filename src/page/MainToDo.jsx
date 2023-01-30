import React from 'react';
import { useRecoilState } from 'recoil';
import { UserInfoRecoil } from './../recoil/recoil';

const MainToDo = () => {
    const [userInfo, setUserInfo] = useRecoilState(UserInfoRecoil);

    return (
        <div className='basic_modal2'>
            <h1 className='title'>ToDoList</h1>
            <div>{userInfo.name}</div>
            <div>{userInfo.goal}</div>
        </div >
    );
};

export default MainToDo;