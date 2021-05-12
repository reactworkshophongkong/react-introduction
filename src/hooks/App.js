import { useState } from 'react'
import { useTrackClipboard, TrackClipboardClass } from './sharing-logic'
import { DomElementExample, AsVariableExample } from './useref-example'

function App() {
  const [show, setShow] = useState(true)
  const data = useTrackClipboard()

  return (
    <>
      <p onClick={() => setShow(!show)}>Hide Element</p>
      {show && <AsVariableExample />}
      {/* <div className="App">
        <h1>Sharing Logic with hooks</h1>
        <p>You copied: <strong>{data}</strong></p>
      </div>
      <TrackClipboardClass render={(clipboardData) => (
        <div className="App">
          <h1>Sharing logic with class component via render props</h1>
          <p>You copied: <strong>{clipboardData}</strong></p>
        </div>
      )}/> */}
    </>
  )
}

export default App;
