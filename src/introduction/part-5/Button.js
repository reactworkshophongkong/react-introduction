import { useState } from 'react'

// Lets refactor Button so now the label is configurable, can use a prop or props.children
// This is an exercise
const ButtonExample = props => {
  const [value, setValue] = useState(1)

  const handleClick = event => {
    console.log(event)
    // the behaviour should now be configurable and defined by the parent
  }

  return (
    <div>
      <h1>Function component</h1>
      <h2>{value}</h2>
      <button onClick={handleClick}>Configurable Label</button>
    </div>
  )
}

export { ButtonExample }