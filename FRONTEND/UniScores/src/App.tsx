import { Routes, Route } from 'react-router-dom';
import './App.scss'
import Layout from './Layout/Layout';
import Home from './pages/Home';
import Header from './components/Header';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
        </Route>
      </Routes>
    </>
  )
}

export default App
