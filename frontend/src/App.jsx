import { useState } from 'react';
import { Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './BarNavigator/Home';
import SignUp from './PageConnexion/SignUp';
import MyIcon from './PageConnexion/MyIcon';
import Login from './PageConnexion/Login';
import Image from './PageConnexion/Image';
import Films from './BarNavigator/Films';
import NavBar from './BarNavigator/NavBar';
import Serie from './BarNavigator/Serie';
import Animes from './BarNavigator/Animes';
import Shorts from './BarNavigator/Shorts';
import Abonnement from './BarNavigator/Abonnement';

function App() {
  const navigate = useNavigate(); // Utilisation de useNavigate pour la navigation

  const handleSignUp = async (formData) => {
    try {
      const response = await axios.post(
        'http://localhost:8000/inscription',
        formData
      );
      console.log('Inscription réussie!', response.data);
      navigate('/home'); // Naviguer vers la page d'accueil après inscription réussie
    } catch (error) {
      console.error("Erreur lors de l'inscription", error.message);
    }
  };

  return (
    <>
      {/* <div>
        <Login />
      </div> */}
      <div>
        <NavBar />{' '}
        {/* Utilisez le composant NavBar ici s'il n'est pas déjà utilisé */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<Films />} />
          <Route path="/series" element={<Series />} />
          <Route path="/anime" element={<Animes />} />
          <Route path="/short" element={<Shorts />} />
          <Route path="/abonnement" element={<Abonnement />} />
        </Routes>
      </div>

      <Routes>
        {/* Route vers la page d'accueil */}
        <Route path="/*" element={<Login />} />

        {/* Route vers le formulaire d'inscription */}
        <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />

        {/* Route vers la page d'accueil */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

{
  /* <Routes> */
}
// <Route path="/" element={<Home />} />
{
  /* <Route path="/home" element={<Home />} />  */
}
// <Route path="/signup" element={<SignUp />} />
// </Routes>
