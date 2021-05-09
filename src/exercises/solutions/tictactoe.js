import React, { useState, useEffect } from 'react'

const initializeGameState = size => {
  const gameState = []
  for(let i = 0; i < size; i++) {
    const row = []

    for (let j = 0; j < size; j++) {
      row.push('')
    }

    gameState.push(row)
  }
  return gameState
}

const checkPlayerWon = gameBoard => {
  // check horizontals
  for(let i = 0; i < gameBoard.length; i++) {
    const sequence = gameBoard[i].join('')
    if (sequence === 'XXX') return 'X'
    if (sequence === 'OOO') return 'O'
  }

  // check verticals


  // check diagonals

  return ''
}

const Tictactoe = ({ count = 3}) => {
  const [playerWon, setPlayerWon] = useState('')
  const [gameState, setGameState] = useState(initializeGameState(count))
  const [currentTurn, setCurrentTurn] = useState('O')

  // useEffect to check gameState if any player has won or lost



  useEffect(() => {
    setPlayerWon(checkPlayerWon(gameState))
  }, gameState)

  const renderBoard = () => {
    const rows = []
    for(let rowIndex = 0; rowIndex < gameState.length; rowIndex++) {

      const handleClick = (rowNumber, columNumber) => {
        if (gameState[rowNumber][columNumber]) return 
        const newGameState = gameState.map(existingRow => {
          const copiedRow = [...existingRow]
          return copiedRow
        })

        newGameState[rowNumber][columNumber] = currentTurn
        setGameState(newGameState)
        setCurrentTurn(currentTurn === 'X' ? 'O' : 'X')
      }

      const row = (
        <div className="tictactoe-row">
          { gameState[rowIndex].map((cell, colIndex) => <div className="tictactoe-cell" onClick={() => handleClick(rowIndex, colIndex)}>{cell}</div>) }
        </div>
      )

      rows.push(row)
    }

    return rows
  }

  const gameOverMessage = playerWon !== ''
    ? `${playerWon} has won the game`
    : ''

  return (
    <>
      <h1>{gameOverMessage}</h1>
      {renderBoard()}
    </>
  )

}

export { Tictactoe }