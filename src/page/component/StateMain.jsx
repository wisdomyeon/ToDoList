import { React, useState } from 'react';


const StateMain = ({ changeModal, index }) => {
    return (
        <>
            <div className='stateMainIcon' onClick={changeModal} onChange={index}>
                {console.log(index)}
            </div >
        </>
    );
};

export default StateMain;