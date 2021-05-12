import React, { useEffect, useRef, useState } from 'react'


// refs allow us to get access to a DOM element
// note you can also use web api document.querySelector to get access to a DOM element
// refs allow can be used to hold any value as well, 
// and acts like an instance variable the value remains 
// the same and can assigned a new value


const DomElementExample = () => {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div>
      <input className="input" placeholder="First Input" />
      <input className="input" placeholder="Second Input" ref={inputRef} />
      <input className="input" placeholder="Third Input" />
    </div>
  )
}

// refs can also be used as instance variable in function component
// here we do not want the component to rerender but we want to keep count of number of clicks
const AsVariableExample = () => {
  const clickCountRef = useRef(0)
  const [count, setCount] = useState(0)

  const handleClick = event => {
    clickCountRef.current = clickCountRef.current + 1
    // setCount(count + 1)
  }

  useEffect(() => {
    return () => console.log('[AsVariableExample] rerendered clickCountRef.current', clickCountRef.current)
  }, [])

  console.log('[AsVariableExample] rerendered')

  return (
    <button onClick={handleClick}>Click me</button>
  )
}


export { DomElementExample, AsVariableExample }