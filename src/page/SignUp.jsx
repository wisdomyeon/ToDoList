import React, { useState } from 'react';
import Input from './../page/component/Input';

const SignUp = () => {
    const [userInfo, setUserInfo] = useState({ name: "", goal: "" });
    const assignInfo = (e) => {
        let { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    }

    return (
        <div className='basic_modal'>
            <h1 className='title'>ToDoList</h1>
            <p>이름과 하루 다짐 적어봅시다✍</p>
            <div className='container'>
                <Input value={userInfo.name} text="이름을 적어주세요" assignInfo={assignInfo} ></Input>
                <Input value={userInfo.goal} text="오늘의 다짐!" assignInfo={assignInfo}></Input>
            </div>
            <button>Let's go</button>
        </div >
    );
};

export default SignUp;