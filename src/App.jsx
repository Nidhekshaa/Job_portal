import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Review from './Review';
import Salary from './Salary';
import Signin from './Signin';
import PostJob from './PostJob';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<Review />} />
        <Route path="/salary" element={<Salary />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/postjob" element={<PostJob />} />
      </Routes>
    </Router>
  )
}

export default App
