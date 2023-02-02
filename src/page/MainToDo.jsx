import { React, useState } from 'react';
import { useRecoilState } from 'recoil';
import { UserInfoRecoil } from './../recoil/recoil';
import StateButton from './component/StateButton';
import StateModal from './component/StateModal';

const MainToDo = () => {
    const [userInfo, setUserInfo] = useRecoilState(UserInfoRecoil);
    const [modal, setModal] = useState(false);
    const changeModal = () => {
        setModal(!modal)
    };

    return (
        <div className='basic_modal2'>
            <h1 className='title'>ToDoList</h1>
            <div className='userInfoDiv'>
                <StateButton changeModal={changeModal} />
                <div className='userInfo'>{userInfo.name}</div>
                <div className='userInfo'>{userInfo.goal}</div>
            </div>
            {modal ? <StateModal /> : null}
        </div >
    );
};

export default MainToDo;