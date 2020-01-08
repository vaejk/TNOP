import React from 'react';
import PublicFoot from './PublicFoot.js';

const Sign = () => {
    return (
        <div id="sign">
            <img style={{ width: "100%" }} src={require('../images/sign.png')} />
            <PublicFoot />
        </div >
    )
}

export default Sign;