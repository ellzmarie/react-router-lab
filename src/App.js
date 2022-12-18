import './App.css';
import {Route, Routes} from 'react-router-dom';
import About from './pages/About.js';
import Stocks from './pages/Stocks.js';
import Home from './pages/Home.js';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/stocks' element={<Stocks />} />
        <Route path='/stocks/:symbol' element={<Stocks />} />

      </Routes>
    </div>
  );
}

export default App;
