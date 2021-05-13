import React from 'react'
import { Square, SquareClass } from './Square'

function App() {
  return (
    <div className="App">
      <p>React Introduction</p>
      <p>Square functional component</p>
      <Square color="red" />

      <p>Square class component</p>
      <SquareClass color="blue"/>

    </div>
  );
}

export default App;
