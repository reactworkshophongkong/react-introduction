import React, { useState, useEffect } from 'react'

// useState is called with a function
// the return value of the function is used as the useState initial value
const initializeGameState = size => {
  // game state should be a multi dimension array / array of arrays
}

const checkPlayerWon = gameBoard => {
  // the easiest way to check who won is
  // check horizontals
  // check verticals
  // check diagonals
}

const Tictactoe = ({ count = 3}) => {
  // what state is needed ?
  // game board state
  // current player turn?


  // how do we check if player has one, 
  // could useEffect hook to run when ever game state is updated?



  const renderBoard = () => {
    // our renderBoard function should render the gameboard baesd on gameState
    // prop.count number of rows, and within each row render prop.count number of cells
    // the content of each div should be taken from the game state.
    // each cell should have a onClick handler that when clicked sets the value in game state of corresponding row / cell
  }


  return (
    <>
      <div className="tictactoe-row">
        <div className="tictactoe-cell"></div>
        <div className="tictactoe-cell"></div>
        <div className="tictactoe-cell"></div>
      </div>
      <div className="tictactoe-row">
        <div className="tictactoe-cell"></div>
        <div className="tictactoe-cell"></div>
        <div className="tictactoe-cell"></div>
      </div>
      <div className="tictactoe-row">
        <div className="tictactoe-cell"></div>
        <div className="tictactoe-cell"></div>
        <div className="tictactoe-cell"></div>
      </div>
    </>
  )

}

export { Tictactoe }