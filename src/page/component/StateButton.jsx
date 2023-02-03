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
            <div className='stateIconOuter' onClick={() => { <StateMain index={index} /> }}>
                <span >
                    {icon}
                    {index}
                </span>
            </div >
        </>
    )
};

export default StateButton;

//onclick하면 setIcon 해서 전환해주고
//recoil로 전역관리해서 statemain에다가 recoil로 해주는거지
