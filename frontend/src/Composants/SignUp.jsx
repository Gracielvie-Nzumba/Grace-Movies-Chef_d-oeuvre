import { Link } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';

import React, { useState, use } from 'react';
// import BackgroundImage from '../BackgroundImage';
// import FilmPage from '../FilmPage';



function SignUp() {
  const [formData, setFormData] = useState({
    nom: '',
    postnom: '',
    email: '',
    password: '',
    dateNaissance: '',
    sexe: '',
    pays: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleModify = () => {};

  return (
    <div
      className="flex items-center justify-center bg-cover bg-center bg-no-repeat bg-gradient-to-b from-teal-700 h-screen"
    >
      <div
        className="bg-white w-96 py-8 px-10 rounded-xl shadow-lg text-center relative"
      >
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Inscription</h1>
        <form className="flex flex-col space-y-4 z-10" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nom"
            placeholder="Nom"
            value={formData.nom}
            onChange={handleChange}
            className="rounded-md py-1 px-2"
          />
          <input
            type="text"
            name="postnom"
            placeholder="Postnom"
            value={formData.postnom}
            onChange={handleChange}
            className="rounded-md py-1 px-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="rounded-md py-1 px-2"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="rounded-md py-1 px-2"
          />
          <input
            type="date"
            name="dateNaissance"
            value={formData.dateNaissance}
            onChange={handleChange}
            className="rounded-md py-1 px-2"
          />
          <select
            name="sexe"
            value={formData.sexe}
            onChange={handleChange}
            className="rounded-md py-1 px-2"
          >
            <option value="">Sélectionner le sexe</option>
            <option value="Homme">Homme</option>
            <option value="Femme">Femme</option>
          </select>
          <input
            type="text"
            name="pays"
            placeholder="Pays"
            value={formData.pays}
            onChange={handleChange}
            className="rounded-md py-1 px-2"
          />
          <button
            type="submit"
            className="bg-gray-600 font-bold text-white rounded-md py-1 px-4 hover:bg-gray-800 w-1/2 ml-20 mt-4"
          >
            S'inscrire
          </button>
        </form>
        {/* <Link to='/page-d-accueil'>Page d'Accueil</Link> */}
      </div>
    </div>
   );
 }
export default SignUp;
