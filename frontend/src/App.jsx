import './css/App.css';
import Home from './pages/home.jsx';
import Favorites from './pages/Favorites.jsx';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';

function App() {
  return (
    <>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>

    </>
  )
}

export default App
