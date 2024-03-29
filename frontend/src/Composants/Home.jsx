import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MyIcon from './MyIcon';
import Image from '../Image';
function Home() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:8000/5173');
        setMovies(response.data);
        setFilteredMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

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
      <div className="w-1/4 bg-gradient-to-b from-slate-800 to-slate-950 h-screen">
        <div className="font-bold text-white border border-b-2 border-t-1 text-center p-1">
          <h1 className="text-3xl mx-auto py-10">Gr@ce_Movies</h1>
        </div>
        <div className=" text-white text-2xl font-bold ml-20 m-10">
          <div className="mt-10 border-b">
            <MyIcon icon="/MesIcons/icons8-home.svg" text="Home" />
          </div>
          <div className="mt-10 border-b">
            <MyIcon icon="/MesIcons/icons8-connect-64 1.svg" text="Films" />
          </div>
          <div className="mt-10 border-b">
            <MyIcon icon="/src/MesIcons/icons8-tv-show-50.png" text="Séries" />
          </div>
          <div className="mt-10 border-b">
            <MyIcon icon="/MesIcons/icons8-my-melody-50 1.svg" text="Animés" />
          </div>
          <div className="mt-10 border-b">
            <MyIcon icon="/MesIcons/icons8-time-card-50.png" text="Shorts" />
          </div>
          <div className="mt-10 border-b">
            <MyIcon 
              icon="/MesIcons/icons8-subscription-48.png"
              text="Abonnement"
            />
          </div>
        </div>
      </div>
      <div className="w-3/4 bg-gradient-to-b from-slate-800 to-slate-700 h-screen">
        <div className="mx-auto py-10 border-b-2">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="p-2 w-full text-center text-2xl"
          />
        </div>
        <div className="flex justify-between text-white font-serif m-10  font-bold">
          <div>
            <div>
              <img src="/MesImages/waroomfilm 1.svg" />
              <h2 className="">War Room un film a voir en fammille.</h2>
            </div>
            <div className="text-center">
              <p>Grace TV</p>
              <small>30 vues. y a 3 jrs</small>
            </div>
          </div>
          <div>
            <div>
              <img src="/MesImages/fiançaille et vie chretienne 1.svg" />
              <h2 className="text-center">Fiançaille et vie chretienne.</h2>
            </div>
            <div className="text-center">
              <p>Mc TV</p>
              <small>11 k vues. y a 1 sem</small>
            </div>
          </div>
          <div>
            <div>
              <img src="/MesImages/image 2.svg" />
              <h2 className="text-center">Film chretien à voir absolument</h2>
            </div>
            <div className="text-center">
              <p>GloDi-Tivi</p>
              <small>20vues. y a 2 jrs</small>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-white font-serif m-10  font-bold">
          <div>
            <div>
              <img src="/MesImages/dessin-anime naissance de JC 1.svg" />
              <h2 className='text-center'>Déssin animé: 
              l’enfant Jésus</h2>
            </div>
            <div className='text-center'>
              <p>Sephora’K</p>
              <small>1 k vues. y a 20 jrs.</small>
            </div>
          </div>
          <div>
            <div>
              <img src="/MesImages/film_enfants 1.svg" />
              <h2 className="text-center">Série chretienne enfants.</h2>
            </div>
            <div className="text-center">
              <p>Emili TV</p>
              <small>17 vues. y a 2 sem</small>
            </div>
          </div>
          <div>
            <div>
              <img src="/MesImages/image 1.svg" />
              <h2 className="text-center">Joseph le roi-des-revês.</h2>
            </div>
            <div className="text-center">
              <p>TV-Movies</p>
              <small>2 k vues. y a 6mois</small>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-white font-serif m-10 font-bold">
          {/* <div>
            <img src="" />
            <h2>War Room un film a voir en fammille.</h2>
            <p>Grace TV</p>
            <small>30 vues. y a 3 jrs</small>
          </div>
          <div>
            <img src="" />
            <h2>War Room un film a voir en fammille.</h2>
            <p>Grace TV</p>
            <small>30 vues. y a 3 jrs</small>
          </div>
          <div>
            <img src="" />
            <h2>War Room un film a voir en fammille.</h2>
            <p>Grace TV</p>
            <small>30 vues. y a 3 jrs</small>
          </div> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredMovies.map((movie) => (
            <div key={movie.id} className="border rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
              <img
                icon={movie.poster}
                alt={movie.title}
                className="w-full mb-2"
              />
              <p className="text-gray-600">{movie.description}</p>
              <p className="text-gray-500 mt-2">Release Year: {movie.year}</p>
              <div className="mt-2 text-gray-500">
                <p>Views: {movie.views}</p> {/*API renvoie de vues */}
                <p>Likes: {movie.likes}</p>{' '}
                {/* API renvoie le nombre de likes */}
                <p>Posted by: {movie.posterName}</p>{' '}
                {/* API renvoie le nom de la personne qui a posté */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
