import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from './Components/Navbar/Navabar';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Home />
      </header>
    </div>
  );
}

export default App;
