import React from "react";
import './CalcButton.css'

function CalcButton(props) {
  const isOperation = value => {
    return isNaN(value) && (value != '.') && (value != '=');
  };

  return (
    <div
      className={`button-container ${isOperation(props.children) ? 'operator' : ' '}`.trimEnd()}
      onClick={() => props.clickAction(props.children)}
    >


      {props.children}
    </div>
  )
}
export default CalcButton;