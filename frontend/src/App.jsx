import { useState } from 'react';
import { Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './BarNavigator/Home';
// import Shorts from './Shorts';
import SignUp from './PageConnexion/SignUp';
import MyIcon from './PageConnexion/MyIcon';
import Login from './PageConnexion/Login';
import MyImage from './PageConnexion/MyImage';
import Apropos from './PageConnexion/Apropos';
// import NavBar from './BarNavigator/NavBar';




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
  const navigate = useNavigate();

  const handleSignUp = async (formData) => {
    try {
      const response = await axios.post(
        'http://localhost:8000/inscription',
        formData
      );
      console.log('Inscription réussie!', response.data);
      navigate('/home');
    } catch (error) {
      console.error("Erreur lors de l'inscription", error.message);
    }
  };



  return (
    <div className='App'>
     {/* < NavBar/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        {/* <Route path='/home' element={<Home/>}/> */}
      </Routes>
    </div>
   );


      
    

  }

export default App;
{
  /* <p className="m-3 border-b-2">Shorts</p> */
}
{
  /* <Routes> */
}
// <Route path="/" element={<Home />} />
{
  /* <Route path="/home" element={<Home />} />  */
}
// <Route path="/signup" element={<SignUp />} />
// </Routes>
