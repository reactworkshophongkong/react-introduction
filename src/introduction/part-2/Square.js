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

export { Square }
