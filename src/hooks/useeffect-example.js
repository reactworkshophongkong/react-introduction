import React, { useEffect, useState } from 'react'

// these lifecycle events are useful
// as component behaviour may want to change based on what props we receive e.g. 
// we may want to trigger some behaviour when a certain prop has changed to some value

// useEffect runs after render
// useEffect cleans up runs after effect hook / before next effect hook
// useEffect with no dependencies is similar to componentDidMount
// useEffect hooks on every rerender so similar to componentDidUpdate
// useEffect hook clean up function, runs on every render, but can be set with no dependencies to mock willUnmount

const ExampleUseEffect = () => {
  const [count, setCount] = useState(1)
  const [secondCount, setSecondCount] = useState(1)

  useEffect(() => {
    console.log('useEffect with no dependencies runs after every render')
    return () => console.log('cleanup useEffect that had no dependencies')
  })

  useEffect(() => {
    console.log('useEffect with dependency on count')
    return () => console.log('cleanup effect that had dependency on count')
  }, [count])

  const handleClick = event => {
    // function syntax in setState gives us access to previous value
    setCount(prev => prev + 1)
  }

  return (
    <>
      {console.log('finished render')}
      <h1>Fist count is {count}</h1>
      <button onClick={handleClick}>Add 1</button>
      <h1>Second count is {secondCount}</h1>
      <button onClick={() => setSecondCount(prev => prev + 1)}>Add 1</button>
    </>
  )

}

class ExampleClassLifecycle extends React.Component {
  state = {
    count: 1
  }

  handleClick = event => {
    this.setState({ count: this.state.count + 1 })
  }

  // called after initial render
  componentDidMount() {
    console.log('componentDidMount()')
  }

  // not called on initial render
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate()')
  }

  // called after component is unmounted
  componentWillUnmount() {
    console.log('componentWillUnmount()')
  }


  render() {
    console.log('rendering')

    return (
      <>
        <h1>Count is {this.state.count}</h1>
        <button onClick={this.handleClick}>Add 1</button>
      </>
    )
  }
}

// class
// componentDidMount
// componentDidUpdate
// componentWillUnmount

export { ExampleUseEffect, ExampleClassLifecycle }
