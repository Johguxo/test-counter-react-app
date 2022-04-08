import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

function App() {
  const numInicial = 4;
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter(RTL)</h1>
        <Counter data-test="counter-comp" numInicial={numInicial}/>
      </header>
    </div>
  );
}

export default App;
