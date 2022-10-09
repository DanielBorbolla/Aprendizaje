import React from "react";
import fcclogo from '../../assets/img/freecodecamp-logo.png';
import './FccLogo.css'

function FccLogo() {
    return (
        <div className='freecodecamp-logo-container'>
            <img
                src={fcclogo}
                className='freecodecamp-logo'
                alt='Logo de freeCodeCamp'
            />
        </div>
    )
}

export default FccLogo