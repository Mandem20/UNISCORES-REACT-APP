import { Routes, Route } from 'react-router-dom';
import './App.scss'
import Layout from './Layout/Layout';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LeagueGames from './pages/LeagueGames';
import Results from './pages/LeagueGamesLayout/Results';
import Fixtures from './pages/LeagueGamesLayout/Fixtures';
import Livestream from './pages/Livestream';
import WatchMatch from './pages/WatchMatch';
import AllNews from './pages/AllNews';
import News from './pages/LeagueGamesLayout/News';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/livestream" element={<Livestream />} />
          <Route path="/livestream/watch-match" element={<WatchMatch />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/allnews" element={<AllNews />} />
          <Route path="/league_games/:id/" element={<LeagueGames />} >
            <Route path="/league_games/:id/news" element={<News />} />
            <Route path="/league_games/:id/results" element={<Results />} />
            <Route path="/league_games/:id/fixtures" element={<Fixtures />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
