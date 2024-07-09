import "./TicTacToe.css";
import { useState, useRef } from "react";

export default function TicTacToe() {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const titleRef = useRef(null);
  const box1ref = useRef(null);
  const box2ref = useRef(null);
  const box3ref = useRef(null);
  const box4ref = useRef(null);
  const box5ref = useRef(null);
  const box6ref = useRef(null);
  const box7ref = useRef(null);
  const box8ref = useRef(null);
  const box9ref = useRef(null);
  let boxsRef = [
    box1ref,
    box2ref,
    box3ref,
    box4ref,
    box5ref,
    box6ref,
    box7ref,
    box8ref,
    box9ref,
  ];
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
