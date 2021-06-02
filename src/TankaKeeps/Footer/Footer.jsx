import React from 'react';

const Footer = () => {

    const date = new Date().getFullYear()
    let style = {
        position: "absolute",
        bottom: "0",
        height: "2.5rem",
        marginLeft:"40%"

    }
    return (
        <div>
            <p style={style}>CopyRight © {date}</p>
        </div>
    )
}

export default Footer;