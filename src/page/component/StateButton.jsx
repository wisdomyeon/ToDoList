import { React, useState } from 'react';
import StateMain from './StateMain';

const StateButton = ({ icon, index, iconInfo }) => {
    // const [change, setChange] = useState(0);
    // const changeIcon = () => {
    //     setChange([...iconInfo], index)
    //     console.log(change)
    // }
    return (
        <>
            <div className='stateIconOuter' onClick={() => { }}>
                <span>
                    {icon}
                    {index}
                </span>
            </div >
        </>
    )
};

export default StateButton;