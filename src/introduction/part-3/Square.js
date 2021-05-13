import React from 'react'

const Square = props => {
  console.log(props)

  const styles = {
    width: '50px',
    height: '50px',
    backgroundColor: props.color
  }

  return (
    <div style={styles} />
  )
}


// In javascript instance variables, have to be defined in constructor and assigned to this.
// However there is a experimental featured that is enabled in create-react-app , and used very widely, called class fields
// instance variables can be created outside of constructor without this
// this.shapeName in the constructor and shapeName in the class body have the same effect
class SquareClass extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.shapeName = "Square"
  // }

  shapeName = "Square"

  render() {
    console.log('shapeName = ' + this.shapeName)
    const styles = {
      width: '50px',
      height: '50px',
      backgroundColor: this.props.color
    }
    
    return (
      <div style={styles} />
    )

  }

}


export { Square, SquareClass }
