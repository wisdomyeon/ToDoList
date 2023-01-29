import React from 'react';

const Input = (value, assignInfo) => {
    return (
        <div>
            <input placeholder={value.text} onChange={assignInfo}></input>
        </div>
    );
};

export default Input;