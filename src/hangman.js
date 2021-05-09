import React, { useState } from 'react'

/*
  - display coded word
  - a text input and a button to submit
  - valid guess unhide a character, invalid guess decrement guess count
  - game won, disable button  / input
  - game lost, when no live sleft disabled button  / input
*/

const Hangman = () => {
  const SECRET = ['M', 'A', 'G', 'I', 'C']
  const ALLOWED_GUESSES = 10

  // create some state to keep track of the user entered character
  // create some state to keep track of lives left i.e. ALLOWED_GUESSES - number of incorrect guesses
  // create some state to keep track of guessed characters

  /*
    handleChange: handle updating the state with the value from e.target.value
    handleClick: 
      check if character is in SECRET if yes add to guesses, however update the state immutably
      if not decrement lives
  */

  const handleClick = () => {

  }

  const handleChange = e => {
    // strings have a method toUpperCase, we can apply this before setState
  }


  const displayGuessedCharacters = () => {
    // can use below implementation or your own

    // let result = []

    // SECRET.forEach(char => {
    //   if (guesses.includes(char)) {
    //     result.push(` ${char} `)
    //   } else {
    //     result.push(' _ ')
    //   }
    // })

    // return result.join('')
  }

  return (
    <div>
      <h1>{displayGuessedCharacters()}</h1>
      <p>Lives: 10</p>
      {/* create an input of type text , with onChange handler, and set value to state, add maxLength={1} to restrict number of characters that can be entered */}
      {/* create a button with onClick handler  */}
    </div>
  )
}

export { Hangman }