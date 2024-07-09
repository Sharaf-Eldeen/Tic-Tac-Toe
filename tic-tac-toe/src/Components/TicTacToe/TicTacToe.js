import "./TicTacToe.css";
import { useState } from "react";

export default function TicTacToe() {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  return (
    <div className="container">
      <h1 className="title">
        Tic Tac Toe Game In <span> React</span>
      </h1>
      <div className="board">
        <div className="row1">
          <div className="boxs"></div>
          <div className="boxs"></div>
          <div className="boxs"></div>
        </div>
        <div className="row2">
          <div className="boxs"></div>
          <div className="boxs"></div>
          <div className="boxs"></div>
        </div>
        <div className="row3">
          <div className="boxs"></div>
          <div className="boxs"></div>
          <div className="boxs"></div>
        </div>
      </div>
      <button className="reset">Reset</button>
    </div>
  );
}
