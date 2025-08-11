import { useState } from "react";

function Square({value, onSquareClick}) {
  return <button className="square" onClick={onSquareClick}>{value}</button>

}
export default function Board() {

  const [squares, setSquare] = useState(Array(9).fill(null)); 

  function handleClick(i) {
    const nextSquare = squares.slice()
    nextSquare[i] = 'X'; 
    setSquare(nextSquare);
  }

  return (
    <>
      <div className="board-row">
        <Square value={Square[0]} onSquareClick={handleClick}/>
        <Square value={Square[1]} onSquareClick={handleClick}/>
        <Square value={Square[2]} onSquareClick={handleClick}/>
      </div>
      <div className="board-row">
        <Square value={Square[3]} onSquareClick={handleClick}/>
        <Square value={Square[4]} onSquareClick={handleClick}/>
        <Square value={Square[5]} onSquareClick={handleClick}/>
      </div>
      <div className="board-row">
        <Square value={Square[6]} onSquareClick={handleClick}/>
        <Square value={Square[7]} onSquareClick={handleClick}/>
        <Square value={Square[8]} onSquareClick={handleClick}/>
      </div>  
    </>
  );
}
