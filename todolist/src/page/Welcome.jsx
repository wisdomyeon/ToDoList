import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './../page/component/Button';

const Welcome = () => {
    const navigate = useNavigate();
    const nav = () => {
        navigate('/signup');
    }

    return (
        <div className='basic_modal'>
            <h1 className='title'>ToDoList</h1>
            <div className='container'>
                <p>환영합니다🌟</p>
                <p>오늘 하루 목표량 달성을 위하여 열정🔥 열정🔥 열정🔥</p>
            </div>
            <Button nav={nav} text="Click" style={{ textDecoration: "underline" }}></Button>
        </div >

    );
};

export default Welcome;