import logo from './logo.svg';
import {Add, Multiply} from './helpers';
import char from './swChar';
import './App.css';


function App() {
  console.log(Add(1,2));
  console.log(Multiply(2, 2));
  console.log(char[0]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
