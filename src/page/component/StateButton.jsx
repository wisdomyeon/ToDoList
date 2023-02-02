import { React, useState } from 'react';

const StateButton = ({ icon }) => {
    return (
        <>
            <div className='stateIconOuter'>
                <span>{icon}</span>
            </div >
        </>
    )
};

export default StateButton;