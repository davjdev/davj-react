import logo from './assets/logo.png';
import './App.css';
import Home from './components/home/Home.js'
import TopNav from './components/topnav/TopNav.js'

function App() {
  return (
    <div className="App">
      <TopNav></TopNav>

      <Home></Home>
    </div>
  );
}

export default App;
