import logo from './assets/logo.png';
import './App.css';
import Home from './components/home/Home.js'
import TopNav from './components/topnav/TopNav.js'

function App() {
  return (
    <div className="App">
      <TopNav></TopNav>
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

      <Home></Home>
      <Home></Home>
    </div>
  );
}

export default App;
