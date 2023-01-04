import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import FavoriteCard from './components/FavoriteCard/FavoriteCard';


function App(props) {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/favorites/:id" element={<FavoriteCard id={props.id} />} />
      </Routes>
    </div>
  );
}

export default App;
