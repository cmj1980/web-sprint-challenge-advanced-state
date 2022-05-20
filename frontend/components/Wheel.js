import React from 'react';
import { connect } from 'react-redux';
import { moveClockwise, moveCounterClockwise } from '../state/action-creators';

 
const Wheel = (props) => {

  const { wheel, moveClockwise, moveCounterClockwise } = props

  const handleClockWise = () => {
    moveClockwise()
  }

  const handleCounterClockWise = () => {
    moveCounterClockwise()
  }


  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={`${wheel}` == 0 ? "cog active" : "cog"} style={{ "--i": 0 }}>{`${wheel}` == 0 ? "B" : ""}</div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" >Counter clockwise</button>
        <button id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}
export default connect(st => st, {moveClockwise, moveCounterClockwise})(Wheel)