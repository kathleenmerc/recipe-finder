import './App.css';
import { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import SearchPage from './pages/SearchPage/SearchPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import FavoriteCard from './components/FavoriteCard/FavoriteCard';
import LogInPage from './pages/LogInPage/LogInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import Footer from './components/Footer';
import { getUser } from './utilities/users-service'



function App(props) {
  const [user, setUser] = useState(getUser())

  return (
    <div className="App">
      {user ?
        <Routes>
          <Route path="/search" element={<SearchPage user={user} setUser={setUser} />} />
          <Route path="/favorites" element={<FavoritesPage user={user} setUser={setUser} />} />
          <Route path="/favorites/:id" element={<FavoriteCard id={props.id} user={user} setUser={setUser} />} />
          <Route path="/*" element={<Navigate to="/search" />} />
        </Routes>

        :

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<SignUpPage setUser={setUser} />} />
          <Route path="/login" element={<LogInPage setUser={setUser} />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>

      }
      <Footer />
    </div>
  );
}

export default App;
