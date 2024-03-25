import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import SignUp from './Composants/SignUp';
// import FilmPage from './FilmPage';
// import MyIcon from './Composants/MyIcon';

function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false)

  const handleLogin = () => {
    console.log(hello)
    // const loginData = {
    //   username,
    //   email,
    //   password,
    // };

    // axios.post('/login', loginData);
    //   then((response) => {

    //   })
    //   .catch((error) => {

    //   })
  };



  const handleSignUp = () => {
    setIsSignup(true)
  };

  if(isSignup) {
    return(
      <SignUp />
    )
  }

  return (
    <Router basename="/">
      <div className="flex items-center h-screen justify-center bg-gradient-to-b from-blue-600 to-gray-700">
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
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none"
            />
            <button
              onClick={handleLogin}
              className="bg-gray-600 font-bold text-white rounded-md py-1 px-4 hover:bg-gray-800 w-1/2 ml-20"
            >
              Login
            </button>
          </form>
          <Routes>
            <Route path="/SignUp" element={<SignUp />} />
            {/* <Route path="/" element={<PageDAccueil />} /> */}
          </Routes>
            <button onClick={handleSignUp} className="bg-gray-600 font-bold text-white rounded-md py-1 px-4 hover:bg-gray-800 w-1/2 ml-2 mb-3">
              Sign Up
            </button>
         
        </div>
      </div>
    </Router>
  );
}

export default App;



// <div>

// </div>
