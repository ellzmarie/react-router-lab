import './App.css';
import {Route, Routes} from 'react-router-dom';
import About from './pages/About.js';
import Stock from './pages/Stock.js';
import Home from './pages/Home.js';
import Dashboard from './pages/Dashboard.js'
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/stocks' element={<Dashboard />} />
        <Route path='/stocks/:symbol' element={<Stock />} />
      </Routes>
    </div>
  );
}

export default App;
