import { React, useState } from 'react';
import { BsQuestionLg } from "react-icons/bs";
import StateModal from './StateModal';


const StateButton = ({ changeModal }) => {
    return (
        <>
            <div className='stateIconOuter' onClick={changeModal}>
                <BsQuestionLg className='stateIconInner'></BsQuestionLg>
            </div >
        </>
    )
};

export default StateButton;