import React from 'react';
import { useRecoilState } from 'recoil';

const MainToDo = ({ }) => {
    const [userInfo, setUserInfo] = useRecoilState(UserInfoRecoil);

    return (
        <div className='basic_modal2'>
            <h1 className='title'>ToDoList</h1>
            <div>{console.log(userInfo)}</div>
        </div >
    );
};

export default MainToDo;