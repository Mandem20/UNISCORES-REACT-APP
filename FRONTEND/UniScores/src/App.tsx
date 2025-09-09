import { Routes, Route } from 'react-router-dom';
import './App.scss'
import Layout from './Layout/Layout';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
