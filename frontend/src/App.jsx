import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import SignUp from './Composants/SignUp';
import Home from './Composants/Home';

// import MyIcon from './Composants/MyIcon';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [isSignup, setIsSignup] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
     ...formData,
      [name]: value,
    });
  };

    // <Home />;

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const reponse = await axios.post('http://localhost:8000/login', formData);
        const token = response.data.token;
        SpeechSynthesisErrorEvent('Login', token)
        history.push('/home');
    } catch (error) {
      setError('Erreur de connexion:', error);
    }
    
  };

  const handleSignUp = () => {
    setIsSignup(true);
  };

  if (isSignup) {
    return <SignUp />;
  }

  return (
    <Router>
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
            <Route path="/" element={<Home />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
          <button
            onClick={handleSignUp}
            className="bg-gray-600 font-bold text-white rounded-md py-1 px-4 hover:bg-gray-800 w-1/2 ml-2 mb-3"
          >
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
