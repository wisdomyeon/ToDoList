import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainToDo from './page/MainToDo';
import SignUp from './page/SignUp';
import Welcome from './page/Welcome';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Welcome />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/todo" element={<MainToDo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
