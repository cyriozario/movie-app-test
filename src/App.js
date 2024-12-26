import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import WatchlistPage from './pages/WatchlistPage';
import Navbar from './components/Navbar';
import '../src/App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/watchlist' element={<WatchlistPage />} />
      </Routes>
    </Router>
  )
}

export default App