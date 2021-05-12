import { useTrackClipboard, TrackClipboardClass } from './sharing-logic'
// import { ExampleForUseRef } from './useref-example'

function App() {
  const data = useTrackClipboard()

  return (
    <>
      <div className="App">
        <h1>Sharing Logic with hooks</h1>
        <p>You copied: <strong>{data}</strong></p>
      </div>
      <TrackClipboardClass render={(clipboardData) => (
        <div className="App">
          <h1>Sharing logic with class component via render props</h1>
          <p>You copied: <strong>{clipboardData}</strong></p>
        </div>
      )}/>
    </>
  )
}

export default App;
