import { useState, useEffect } from 'react';
import { Router, Routes, Route, Link, Outlet, useNavigate, Navigate } from 'react-router-dom';
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './BarNavigator/Home';
import SignUp from './PageConnexion/SignUp';
import MyIcon from './PageConnexion/MyIcon';
import Login from './PageConnexion/Login';
import MyImage from './PageConnexion/MyImage';
import Apropos from './PageConnexion/Apropos';
import NavBar from './BarNavigator/NavBar';
import Films from './BarNavigator/Films';
import Serie from './BarNavigator/Serie';
import Shorts from './BarNavigator/Shorts';
import Animes from './BarNavigator/Animes';



      // <div>
      //   Login
      //   <nav>
      //     <ul>
      //       <li>
      //         <Link to="/home">Home</Link>
      //       </li>
      //       <li>
      //         <Link to="/signup">Sign Up</Link>
      //       </li>
      //     </ul>
      //   </nav>
      // </div>
    


function App() {
  const isLoggedIn = localStorage.getItem('token') !== null;
  const navigate = useNavigate();

 



  return (
    <div className='App'>
     < NavBar/>
      <Routes>
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path='/login'  element={isLoggedIn ? <Navigate to="/home" /> : <Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        {/* <Route path='/film' element={<Films/>}/> */}
        {/* <Route path='/serie' element={<Serie/>}/> */}
        {/* <Route path='/anime' element={<Animes/>}/> */}
        <Route path='/short' element={<Shorts/>}/>
      </Routes>
    </div>
   );


      
    

  }

export default App;
