import React from 'react'
import { Square } from './Square'

function App() {
  return (
    <div className="App">
      <p>React Introduction</p>
      <Square color="red" name="square" sides={4} properties={{ type: 'shape', foo: 'bar' }} trueBoolean falseBoolean={false} />
    </div>
  );
}

export default App;
