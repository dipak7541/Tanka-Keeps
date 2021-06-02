import React from 'react';
import tanka_technical from '../Images/tanka_technical.png';


const Headers = () => {
    return (
        <>
            <div className="header">
                <img className= "logoImage" src={tanka_technical} alt="logoImages"/>
                <h1 className="header-text">Tanka Keeps</h1>

            </div>


        </>
    )
}
export default Headers;
