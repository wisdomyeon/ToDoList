import { React, useState } from 'react';

const StateButton = ({ changeModal, icon }) => {
    return (
        <>
            <div className='stateIconOuter' onClick={changeModal}>
                {icon}
                {/* <BsQuestionLg className='stateIconInner' onClick={console.log(index)}></BsQuestionLg> */}
            </div >
        </>
    )
};

export default StateButton;