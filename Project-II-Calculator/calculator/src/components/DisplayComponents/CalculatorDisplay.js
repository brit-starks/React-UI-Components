import React from 'react';
import './Display.css';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';
import ClearButton from '../ButtonComponents/ClearButton';
import Zero from '../ButtonComponents/Zero';

const CalculatorDisplay = props => {
  return (
    <>
    <div className="buttons">
      <div className="numButtons">
        <div className="zero-btn">
          <Zero />
        </div>
        <div className="numRowOne">
          <NumberButton number="1"/>
          <NumberButton number="2" />
          <NumberButton number="3" />
        </div>
        <div className="numRowTwo">
          <NumberButton number="4" />
          <NumberButton number="5" />
          <NumberButton number="6" />
        </div>
        <div className="numRowThree">
          <NumberButton number="7" />
          <NumberButton number="8" />
          <NumberButton number="9" />
        </div>  
        <div className="clear-btn">
          <ClearButton />
        </div>
      </div>

      <div className="calcAction">
        <ActionButton action="/" />
        <ActionButton action="x" />
        <ActionButton action="-" />
        <ActionButton action="+" />
        <ActionButton action="=" />
      </div>
    </div>
    </>
  );
}

export default CalculatorDisplay;
