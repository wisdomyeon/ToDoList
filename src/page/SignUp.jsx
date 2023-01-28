import React from 'react';
import Input from './../page/component/Input';

const SignUp = () => {
    return (
        <div className='basic_modal'>
            <h1 className='title'>ToDoList</h1>
            <p>이름과 하루 다짐 적어봅시다✍</p>
            <Input></Input>
            <Input></Input>
            <button>Let's go</button>
        </div>
    );
};

export default SignUp;