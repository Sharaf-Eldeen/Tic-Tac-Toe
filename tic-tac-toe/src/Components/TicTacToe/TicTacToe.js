import "./TicTacToe.css";

export default function TicTacToe() {
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
