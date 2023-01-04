import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import FavoriteCard from './components/FavoriteCard/FavoriteCard';

import{ useState } from 'react'

import LogInPage from './pages/LogInPage/LogInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import { getUser } from './utilities/users-service'


function App(props) {
  const [user, setUser] = useState(getUser())

  return (
    <div className="App">
      {user ?
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/favorites/:id" element={<FavoriteCard id={props.id} />} />
          </Routes>
      
        :

        <Routes>
          <Route path="/" element={<SignUpPage setUser={setUser} />} />
          <Route path="/login" element={<LogInPage setUser={setUser} />} />
        </Routes>
      }

    </div>
  );
}

export default App;
