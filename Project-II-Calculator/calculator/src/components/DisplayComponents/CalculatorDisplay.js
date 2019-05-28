import React from 'react';
import './Display.css';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';

const CalculatorDisplay = props => {
  return (
    <>
    <div className="calcNumber">
      <NumberButton number="1"/>
      <NumberButton number="2" />
      <NumberButton number="3" />
      <NumberButton number="4" />
      <NumberButton number="5" />
      <NumberButton number="6" />
      <NumberButton number="7" />
      <NumberButton number="8" />
      <NumberButton number="9" />
      <NumberButton number="" />
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