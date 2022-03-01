import logo from './logo.svg';
import './App.css';
import firebase from './utils/firebase.js';
import { getAuth } from 'firebase/auth';
import './styles/variables.css';
import TestEl from './components/TestEl';

function App() {
  console.log(getAuth().currentUser);
  return (
    <div className="App">
      <header className="App-header">
        <TestEl />
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
