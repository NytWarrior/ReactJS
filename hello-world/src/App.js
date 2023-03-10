import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Rajeev";
  const isLoggedIn = false;   //false->hello World      //true-> Hello Rajeev
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Hello {new Date().toDateString()} */}
          Hello {isLoggedIn ? name : 'World'}
          {!isLoggedIn && <p>Hello World</p>}
          {isLoggedIn && <p>Hello {name}</p>}

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
