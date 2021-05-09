import React, { useState } from 'react'

const TextField = props => {
  const [value, setValue] = useState('')

  const handleChange = event => {
    console.log(event)
    setValue(event.target.value)
  }

  return (
    <>
      <h1>Controlled text field with function component</h1>
      <h3>{value}</h3>
      <input type="text" value={value} onChange={handleChange} />
    </>
  )
}

class TextFieldClass extends React.Component {
  state = {
    value: ''
  }

  handleChange = event => {
    console.log(event)
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <>
        <h1>Controlled text field with class component</h1>
        <h3>{this.state.value}</h3>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </>
    )
  }
}

export { TextField, TextFieldClass }
