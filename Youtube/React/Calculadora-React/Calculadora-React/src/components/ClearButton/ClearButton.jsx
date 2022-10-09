import React from "react";
import './ClearButton.css';

const ClearButton = (props) => (
    <div className='clear-Button' onClick={props.clickclear}>
        {props.children}
    </div>
);

export default ClearButton;