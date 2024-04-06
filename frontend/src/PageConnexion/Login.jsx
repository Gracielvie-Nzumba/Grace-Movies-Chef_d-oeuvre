import React, { useState } from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import Home from '../BarNavigator/Home';
import SignUp from './SignUp';
// import NavBar from '../BarNavigator/NavBar';
// import * as jwt_decode from 'jwt-decode';
function Login() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate(); // Importez useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Email ou mot de passe incorrect');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      navigate('/home');
    } catch (error) {
      console.error('Erreur de connexion:', error);
    }
  };

  const handleSignUp = () => {
    setIsSignup(true);
  };

  if (isSignup) {
    return <SignUp />;
  }

  return (
    <div className="flex items-center h-screen justify-center bg-gradient-to-t from-blue-600 via-cyan-500 to-sky-500">
      <div className="bg-white w-96 py-8 px-10 rounded-xl shadow-lg w-100% text-center">
        <p className="mt-6 text-center text-4xl text-black font-semibold">
          Bonjour!
        </p>
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Bienvenue sur notre site
        </h1>
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Login</h2>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
          <div>
            <Link
              to="/*"
              className="bg-gray-600 rounded-md font-bold text-white py-2 px-14 ml-2 hover:bg-gray-800 "
            >
              Login
            </Link>
          </div>
        </form>
        <button
          onClick={handleSignUp}
          className="bg-gray-600 font-bold text-white rounded-md py-1 px-4 hover:bg-gray-800 w-1/2 m-3 ml-5"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Login;
