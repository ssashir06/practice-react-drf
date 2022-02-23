import logo from './logo.svg';
import './App.css';
import DrfAPIFetch from './components/DrfAPIFetch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DrfAPIFetch />
      </header>
    </div>
  );
}

export default App;
