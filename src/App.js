import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Homepage from './pages/Homepage';
import FavoritesPage from './pages/FavoritesPage';


function App() {

    return (
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    );
  }

  export default App;
