import { Routes, Route } from 'react-router-dom';
import './css/App.css';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import NavBar from './components/Navbar';
import { MovieProvider } from './contexts/MovieContext';

function App() {
  return (
    <MovieProvider>
      <NavBar/>
    <main className='mainContent'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="favorites" element={<Favorites/>}/>
      </Routes>
    </main>
    </MovieProvider>
  );
}

export default App
