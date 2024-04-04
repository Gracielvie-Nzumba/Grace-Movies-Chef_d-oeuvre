import { useState } from 'react';
import { Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './BarNavigator/Home';
// import Shorts from './Shorts';
import SignUp from './PageConnexion/SignUp';
import MyIcon from './PageConnexion/MyIcon';
import Login from './PageConnexion/Login';
import Image from './PageConnexion/MyImage';
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
        <Link to="/" src="/src/MesIcons/icons8-home 1.svg" text="Home" />
        <Link to="/series" src="" text="Series" />
        <Link to="/films" src="" text="Films" />
        <Link to="/anime" src="" text="Anime" />
        <Link to="/short" src="" text="Short" />
        <Link to="/abonnement" src="" text="Abonnement" />
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
