import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import MyIcon from '../PageConnexion/MyIcon';
import NavBar from './NavBar';
import MyImage from '../PageConnexion/MyImage';
import Films from './Films';
// import * as jwt_decode from 'jwt-decode';

function Home() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    year: '',
    poster: '',
  });

  const navigate = useNavigate();
  const handleInputChhange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/movies', formData);
      if (response.status === 201) {
        alert('Film ajouté avec succès');
        handleRefresh(); 
      } else {
        alert('Erreur lors de l\'ajout du film');
      }
    } catch (error) {
      console.error('Erreur lors de l\'ajout du film:', error);
      alert('Erreur lors de l\'ajout du film');
    }
  };
  const handleRefresh = async () => {
    try {
      const response = await axios.get('http://localhost:8000/5173');
      setMovies(response.data);
      setFilteredMovies(response.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/'); 
    } else {
      try {
        // const decoded = jwt_decode(token);
        // Vous pouvez accéder aux informations de l'utilisateur décryptées à partir du token
        console.log(decoded);
      } catch (error) {
        console.error('Erreur de décodage du token:', error);
        
      }
    }
  }, [navigate]);

  useEffect(() => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [searchTerm, movies]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex">
      <div className="w-3/4 bg-gradient-to-b from-slate-800 to-slate-700 h-screen">
        <div className="mx-auto py-10 border-b-2">
          <div className='flex bg-white'>
        <img src="src/MesIcons/search_6911791.png" className='w-8 ml-6' />
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="py-1 w-full text-center text-2xl"
          />
          </div>
        </div>
        {/* <Films/> */}
        <div className="flex justify-between text-white font-serif m-10  font-bold">
          <div>
            <div className="cursor-pointer">
              <img src="/MesImages/waroomfilm 1.svg" />
              <h2 className="">War Room un film a voir en fammille.</h2>
            </div>
            <div className="text-center cursor-pointer">
              <p>Grace TV</p>
              <small>30 vues. y a 3 jrs</small>
            </div>
          </div>
          <div>
            <div className="cursor-pointer">
              <img src="/MesImages/fiançaille et vie chretienne 1.svg" />
              <h2 className="text-center">Fiançaille et vie chretienne.</h2>
            </div>
            <div className="text-center cursor-pointer">
              <p>Mc TV</p>
              <small>11 k vues. y a 1 sem</small>
            </div>
          </div>
          <div>
            <div className="cursor-pointer">
              <img src="/MesImages/image 2.svg" />
              <h2 className="text-center">Film chretien à voir absolument</h2>
            </div>
            <div className="text-center cursor-pointer">
              <p className="">GloDi-Tivi</p>
              <small>20vues. y a 2 jrs</small>
            </div>
          </div>
          <div>
            <div className="cursor-pointer">
              <img src="/MesImages/waroomfilm 1.svg" />
              <h2 className="text-center">Films Chretient</h2>
            </div>
            <div className="text-center cursor-pointer">
              <p>Nzumba'Tv</p>
              <small>1 k vues. y a 2 jrs.</small>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-white font-serif m-10  font-bold">
          <div>
            <div className="cursor-pointer">
              <img src="/MesImages/dessin-anime naissance de JC 1.svg" />
              <h2 className="text-center">Déssin animé: l’enfant Jésus</h2>
            </div>
            <div className="text-center cursor-pointer">
              <p>Sephora’K</p>
              <small>1 k vues. y a 20 jrs.</small>
            </div>
          </div>
          <div>
            <div className="cursor-pointer">
              <img src="/MesImages/film_enfants 1.svg" />
              <h2 className="text-center">Série chretienne enfants.</h2>
            </div>
            <div className="text-center cursor-pointer">
              <p>Emili TV</p>
              <small>17 vues. y a 2 sem</small>
            </div>
          </div>
          <div>
            <div className="cursor-pointer">
              <img src="/MesImages/image 1.svg" />
              <h2 className="text-center">Joseph le roi-des-revês.</h2>
            </div>
            <div className="text-center cursor-pointer">
              <p>TV-Movies</p>
              <small>2 k vues. y a 6mois</small>
            </div>
          </div>
          <div>
            <div className="cursor-pointer">
              <img src="/MesImages/dessin-anime naissance de JC 1.svg" />
              <h2 className="text-center">Déssin animé: l’enfant Jésus</h2>
            </div>
            <div className="text-center cursor-pointer">
              <p>Sephora’K</p>
              <small>1 k vues. y a 20 jrs.</small>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
            <Link to={`/movie/${movie.id}`} className="cursor-pointer">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full mb-2"
              />
            </Link>
            <p className="text-gray-600">{movie.description}</p>
            <p className="text-gray-500 mt-2">Release Year: {movie.year}</p>
            <div className="mt-2 text-gray-500">
              <p>Views: {movie.views}</p> {/*API renvoie de vues */}
              <p>Likes: {movie.likes}</p> {/* API renvoie le nombre de likes */}
              <p>Posted by: {movie.posterName}</p>{' '}
              {/* API renvoie le nom de la personne qui a posté */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
