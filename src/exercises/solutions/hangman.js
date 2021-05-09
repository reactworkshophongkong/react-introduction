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

  const [guesses, setGuesses] = useState([])
  const [guessedLetter, setGuessedLetter] = useState('')
  const [lives, setLives] = useState(ALLOWED_GUESSES)
  // create some state to keep track of the user entered information
  // create some state to keep track of lives left ALLOWED_GUESSES - number of incorrect guesses
  // create some state to keep track of guessed characters

  /*
    handleChange: handle updating the state with the value from e.target.value
    handleClick: uppercase the 
  */

  const disabled = lives === 0 || guesses.length === SECRET.length

  const handleClick = () => {
    if(guessedLetter === '' || guesses.includes(guessedLetter)) return

    if (!SECRET.includes(guessedLetter)) {
      setLives(lives - 1)
    } else {
      setGuesses([...guesses, guessedLetter])
    }

    setGuessedLetter('')
  }

  const handleChange = e => {
    setGuessedLetter(e.target.value.toUpperCase())
  }

  const displayGuessedCharacters = () => {
    let result = []

    SECRET.forEach(char => {
      if (guesses.includes(char)) {
        result.push(` ${char} `)
      } else {
        result.push(' _ ')
      }
    })

    return result.join('')
  }

  return (
    <div>
      {/* create an input of type text , with onChange handler, and set value to state, add maxLength={1} to restrict number of characters that can be entered */}
      <h1>{displayGuessedCharacters()}</h1>
      <p>Lives: {lives}</p>
      <input type="text" maxLength={1} onChange={handleChange} value={guessedLetter} disabled={disabled} />
      {/* create a button with onClick handler  */}
      <button onClick={handleClick} disabled={disabled}>Guess</button>
    </div>
  )
}

export { Hangman }