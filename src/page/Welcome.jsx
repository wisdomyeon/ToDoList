import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className='basic_modal'>
            <h1 className='title'>ToDoList</h1>
            <p>환영합니다🌟</p>
            <p>오늘 하루 목표량 달성을 위하여 열정🔥 열정🔥 열정🔥</p>
            <h3 className='click'>Click</h3>
        </div >

    );
};

export default Welcome;