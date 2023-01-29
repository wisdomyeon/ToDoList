import React from 'react';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();
    return (
        <div className='basic_modal'>
            <h1 className='title'>ToDoList</h1>
            <div className='container'>
                <p>환영합니다🌟</p>
                <p>오늘 하루 목표량 달성을 위하여 열정🔥 열정🔥 열정🔥</p>
            </div>
            <button className='click' onClick={() => {
                navigate('/signup')
            }}>Click</button>
        </div >

    );
};

export default Welcome;