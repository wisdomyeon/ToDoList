import { React, useState } from 'react';
import StateModal from './component/StateModal';
import StateMain from './component/StateMain'
import { useRecoilState } from 'recoil';
import { UserInfoRecoil } from './../recoil/recoil';

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
                <StateMain changeModal={changeModal} />
                <div className='userInfo'>{userInfo.name}</div>
                <div className='userInfo'>{userInfo.goal}</div>
            </div>
            {modal ? <StateModal /> : null}
        </div >
    );
};

export default MainToDo;