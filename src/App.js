import logo from './logo.svg';
import './App.css';

// To see updates on github pages:
// commit + push to Master branch 
// type "npm run deploy" in terminal
//takes a while - don't be impatient

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Did it work?
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
