import { Hangman } from './hangman'
import { Tictactoe } from './tictactoe'

function App() {
  return (
    <div className="App">
      <p>React Introduction</p>
      <Tictactoe count={3} />
    </div>
  );
}

export default App;
