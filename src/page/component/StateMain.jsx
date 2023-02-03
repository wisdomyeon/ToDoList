import { React, useState } from 'react';


const StateMain = ({ changeModal, index }) => {
    return (
        <>
            <div className='stateIconOuter' onClick={changeModal} onChange={index}>
                {console.log(index)}
            </div >
        </>
    );
};

export default StateMain;