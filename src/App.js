import React from 'react'
import Login from './Components/Login';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Components/Header';
import Register from './Components/Register.jsx';
import Profile from './Components/Profile.jsx';
import Footer from './Components/Footer.jsx';
import About from './Components/About';
import Contact from './Components/Contact';
import './App.css';
// import {background} from './images/alcheringa-sixteen_nine.avif';

function App() {
  return (
    <div className='bg'>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
