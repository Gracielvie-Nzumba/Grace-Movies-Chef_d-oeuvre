import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
// import MyIcon from './Composants/MyIcon';
import Links from './Link';
import Home from './Home';

function NavBar() {
  <>
    <div>
       <nav> 
      {/* <Link to="/" src="/src/MesIcons/icons8-home 1.svg" text="Home"/>
            <Link to="/series" src="" text="Series"/>
            <Link to="/films" src="" text="Films" />
            <Link to="/anime" src="" text="Anime" />
            <Link to="/short" src="" text="Short" />
            <Link to="/abonnement" src="" text="Abonnement" />  */}
        {/* <ul>
          <li>         
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/SignUp">SignUp</Link>
          </li>
          <li>
            <Link to="/series">Series</Link>
          </li>
          <li>
            <Link to="/films">Films</Link>
          </li>
          <li>
            <Link to="/anime">Anime</Link>
          </li>
          <li>
            <Link to="/short">Short</Link>
          </li>
          <li>
            <Link to="/abonnement">Abonnement</Link>
          </li>
        </ul> */}
      </nav> 
      
    </div>
  </>
}

export default NavBar;
