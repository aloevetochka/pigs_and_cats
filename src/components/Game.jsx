import React, { useState } from "react";
import Board from "./Board";
import "./Game.css";
import { calculateWinner } from "../helper";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    const boardCopy = [...board];
    //Определить был ли клик по ячейке или игра закончена
    if (winner || boardCopy[index]) return;
    //Определить чей ход
    boardCopy[index] = xIsNext ? "КiТ" : "свина";
    //Обновить наш стейт
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const startNewGame = () => {
    return (
      <button
        className="start_btn"
        onClick={() => setBoard(Array(9).fill(null))}
      >
        Начать сначала
      </button>
    );
  };
  console.log(winner);
  return (
    <div className="wrapper">
      {startNewGame()}
      <Board squares={board} click={handleClick} />
      <p className="game_info">
        {winner
          ? "Победитель " + winner + "!!!"
          : "Сейчас ходит " + (xIsNext ? "KiT" : "свина")}
      </p>
    </div>
  );
};

export default Game;
