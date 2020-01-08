import React from 'react'
import PublicFoot from './PublicFoot.js';

const NewWriter = () => {
    let img = {
        width: "100%"
    };
    let logo = {
        width: "100%"
    };
    return (
        <div id="newwriter" >
            <div style={{ position: "fixed", backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: '50%', width: "12vw", height: "12vw", fontSize: '8vw', textAlign: 'center', lineHeight: '12vw', color: '#fff', top: "4vw", left: "4vw" }}>{'<'}</div>
            <div style={{ width: "100%", padding: "10vw", boxSizing: "border-box" }}>
                <img style={logo} src={require('../images/newwriter/mob_logo.67893095.png')} />
                <img style={{ height: "50%" }} src={require('../images/newwriter/download.png')} />
            </div>
            <img style={img} src={require('../images/newwriter/1.jpg')} />
            <img style={img} src={require('../images/newwriter/2.jpg')} />
            <img style={img} src={require('../images/newwriter/3.jpg')} />
            <img style={img} src={require('../images/newwriter/4.jpg')} />
            <img style={img} src={require('../images/newwriter/5.png')} />
            <img style={img} src={require('../images/newwriter/6.jpg')} />
            <img style={img} src={require('../images/newwriter/7.jpg')} />
            <PublicFoot />
        </div >
    )
}

export default NewWriter;