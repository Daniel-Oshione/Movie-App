import { Routes, Route } from 'react-router-dom';
import './css/App.css';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import NavBar from './components/Navbar';

function App() {
  return (
    <div>
      <NavBar/>
    <main className='mainContent'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="favorites" element={<Favorites/>}/>
      </Routes>
    </main>
    </div>
  );
}

export default App
