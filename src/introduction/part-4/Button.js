import React, { useState } from 'react'

const FancyText = props => {
  const styles = {
    backgroundColor: 'cornflowerblue',
    color: 'white',
    fontSize: '20px',
    padding: '10px',
    width: '100px'
  }

  return <h1 style={styles}>{props.children}</h1>
}

const ButtonExample = props => {
  const [value, setValue] = useState(1)
  // above is array destructuring useState returns an array with two value, it is the equivalent of
  // const result = useState(0)
  // const value = result[0]
  // const setValue = result[1]


  const handleClick = event => {
    console.log(event)
    setValue(value + 1)
  }

  // note how we didn't pass value as a prop to FancyText component
  // we wrapped the value within FancyText
  // which is accesible in FancyText as props.children
  // note it doesn't have to be a single value it could be a React components or multiple components
  return (
    <div>
      <h1>Function component</h1>
      <FancyText>{value}</FancyText>
      <button onClick={handleClick}>Add 1</button>
    </div>
  )
}

// will use class fields syntax and defined instance variables outside of constructor.
// without class fields sytax state, has to be initialised in constructor
// and note without class fields syntax we have to bind this ourselves
// Also note use of Fragment instead of div as the wrapper element
class ButtonExampleClass extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     value: 1
  //   }
  //   this.handleClick = this.handleClick.bind(this)
  // }

  state = {
    value: 1
  }

  componentDidMount() {
    console.log('ButtonExampleClass: componentDidMount()')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('ButtonExampleClass: componentDidUpdate()')
    console.log('prevProps: ', prevProps, 'prevstate: ', prevState)
  }

  handleClick = event => {
    this.setState({
      value: this.state.value + 1
    })
  }

  render() {
    console.log('ButtonExampleClass: render()')
    return (
      <>
        <h1>Class component</h1>
        <h2>{this.state.value}</h2>
        <button onClick={this.handleClick}>Add 1</button>
      </>
    )    
  }
}

export { ButtonExample, ButtonExampleClass }