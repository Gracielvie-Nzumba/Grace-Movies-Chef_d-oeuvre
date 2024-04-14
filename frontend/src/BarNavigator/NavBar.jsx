import { Link } from 'react-router-dom';
import React, { useState } from 'react';
// import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
// import Login from '../PageConnexion/Login';
// import Home from './Home';
import MyImage from '../PageConnexion/MyImage';

function NavBar() {
  return (
    <div className='flex'>
    <div className="w-1/4 bg-gradient-to-b from-slate-800 to-slate-950 h-screen">
      <div className="font-bold text-white border border-b-2 border-t-1 text-center p-1">
        <h1 className="text-3xl mx-auto py-10">Gr@ce_Movies</h1>
      </div>
      <div className="flex gap-16 mt-10 justify-center ">
        <div className="w-8 cursor-alias ">
          <MyImage src="/src/MesIcons/icons8-home 1.svg" />
        </div>
        <Link to="/home" className="text-white font-bold border-b m-3 ">
          Home
        </Link>
      </div>
      <div className="flex gap-16 mt-2 justify-center ">
        <div className="w-8 cursor-alias">
          <MyImage src="/src/MesIcons/icons8-film-64.png" />
        </div>
        <Link to="/film" className="text-white font-bold border-b m-3 ">
          Films
        </Link>
      </div>
      <div className="flex gap-16 mt-2 justify-center ">
        <div className="w-8 cursor-alias">
          <MyImage src="/src/MesIcons/icons8-tv-show-50.png" />
        </div>
        <Link to="/serie" className="text-white font-bold border-b m-3 ">
          Séries
        </Link>
      </div>
      <div className="flex gap-14 mt-2 justify-center ">
        <div className="w-10 cursor-alias">
          <MyImage src="/src/MesIcons/icons8-my-melody-50 1.svg" />
        </div>
        <Link to="/animé" className="text-white font-bold border-b m-3 ">
          Animés
        </Link>
      </div>
      <div className="flex gap-16 mt-4 justify-center ">
        <div className="w-10 cursor-alias">
          <MyImage src="src/MesIcons/icons8-time-card-50.png" />
        </div>
        <Link to="/short" className="text-white font-bold border-b m-3 ">
          Shorts
        </Link>
      </div>
      <div className="flex gap-8 mt-6 justify-center ">
        <div className="w-8 cursor-alias">
          <MyImage src="/src/MesIcons/icons8-subscription-48.png" />
        </div>
        <Link to="/abonnement" className="text-white font-bold border-b m-3 ">
          Abonnement
        </Link>
      </div>
    </div>
    </div>
  );
}

export default NavBar;
