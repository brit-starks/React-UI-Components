import React from 'react';
import './Button.css';


const ActionButton = props => {
  return (
    <>
      <p className="actionButton">{props.action}</p>
    </>
  );
}

export default ActionButton;