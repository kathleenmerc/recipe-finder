import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import SearchPage from './pages/SearchPage/SearchPage';
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
            <Route path="/" element={<SearchPage setUser={setUser}/>} />
            <Route path="/favorites" element={<FavoritesPage setUser={setUser}/>} />
            <Route path="/favorites/:id" element={<FavoriteCard id={props.id} setUser={setUser}/>} />
          </Routes>
      
        :

        <Routes>
          <Route path="/" element={<SignUpPage setUser={setUser} />} />
          <Route path="/login" element={<LogInPage setUser={setUser} />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
      }

    </div>
  );
}

export default App;
