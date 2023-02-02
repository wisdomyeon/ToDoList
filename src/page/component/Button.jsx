import React from 'react';

const Button = ({ nav, text, style }) => {

    return (
        <div>
            <button onClick={nav} style={style}>{text}</button>
        </div >
    );
};

export default Button;