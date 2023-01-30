import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { UserInfoRecoil } from './../recoil/recoil';
import Input from './../page/component/Input';
import Button from './../page/component/Button';

const SignUp = () => {
    const [userInfo, setUserInfo] = useRecoilState(UserInfoRecoil);

    const assignInfo = (e) => {
        const { name, value } = e.target
        setUserInfo({ ...userInfo, [name]: value });
        console.log(userInfo);
    }

    const navigate = useNavigate();

    const nav = () => {
        navigate('/todo');
    }

    return (
        <div className='basic_modal'>
            <h1 className='title'>ToDoList</h1>
            <p>이름과 하루 다짐 적어봅시다✍</p>
            <div className='container'>
                <Input type="text" value={userInfo.name} name="name" assignInfo={assignInfo} text="이름을 입력해주세요" ></Input>
                <Input type="text" value={userInfo.goal} name="goal" assignInfo={assignInfo} text="오늘의 다짐!!"></Input>
            </div>
            <Button nav={nav} text="Let's go"></Button>
        </div >
    );
};

export default SignUp;