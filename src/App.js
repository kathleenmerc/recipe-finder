import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Homepage from './pages/Homepage';
import FavoritesPage from './pages/FavoritesPage';
import FavoriteCard from './components/FavoriteCard';



function App(props) {


    return (
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/favorites/:id" element={<FavoriteCard id={props.id}/>} />
        </Routes>
      </div>
    );
  }

  export default App;
