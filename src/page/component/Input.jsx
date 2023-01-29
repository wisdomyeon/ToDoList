import React from 'react';

const Input = ({ type, value, name, assignInfo, text }) => {

    return (
        <div>
            <input type={type} value={value} name={name} onChange={assignInfo} placeholder={text} ></input>
        </div>
    );
};

export default Input;