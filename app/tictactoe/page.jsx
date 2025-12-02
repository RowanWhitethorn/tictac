"use client" 
import { useState } from "react"; 
import "./styles.css";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], // rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // columns
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diagonals
    [2, 4, 6],
  ];

  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // "X" or "O"
    }
  }

  return null;
}

function Square({value, onSquareClick}) { 
    return <button className="square" onClick={onSquareClick}> {value ?? null} </button> } 
    
function Board(){
     const [squares, setSquares] = useState(Array(9).fill(null)); 
     const [xIsNext, setXIsNext] = useState(true); 
     const winner = calculateWinner(squares)
     
     
function handleClick (index){
    if (squares[index] || winner ){
        return;}
        const nextSquares = squares.slice(); 
        nextSquares[index] = xIsNext ? "X" : "O"; 
        setSquares(nextSquares); 
        setXIsNext(!xIsNext);
} 

let status;
if (winner) {
    status = `Winner: ${winner}`;
}else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
}

     return(
         <>
            <div>
                {status}
            </div>
            <div>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)}/> 
                <Square value={squares[1]} onSquareClick={() => handleClick(1)}/> 
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}/> 
            </div> 
            <div> 
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}/> 
                <Square value={squares[4]} onSquareClick={() => handleClick(4)}/> 
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
            </div> 
            <div> 
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}/> 
                <Square value={squares[7]} onSquareClick={() => handleClick(7)}/> 
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}/> 
            </div> 
         </> 
        ); 
    } 


export default function TicTacToePage()
 { return <Board/> }; 
