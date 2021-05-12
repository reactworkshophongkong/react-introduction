import React, { useEffect, useRef } from 'react'


// refs allow us to get access to a DOM element
// note you can also use web api document.querySelector to get access to a DOM element
// refs allow can be used to hold any value as well, 
// and acts like an instance variable the value remains 
// the same and can assigned a new value


const ExampleForUseRef = () => {
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

export { ExampleForUseRef }