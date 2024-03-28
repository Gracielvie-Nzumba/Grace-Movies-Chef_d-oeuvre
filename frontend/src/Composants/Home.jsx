import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch movies data from your backend API
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:8000/movies');
        setMovies(response.data);
        setFilteredMovies(response.data); // Initialize filtered movies with all movies
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    // Filter movies based on search term
    const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [searchTerm, movies]);

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='flex'>
    <div className='w-1/4 bg-gradient-to-tr from-cyan-950 to-black h-screen'>
      <div className='font-bold text-white border border-b-2 text-center pb-6'>
      <h1 className='text-3xl mx-auto py-8'>
      Gr@ce_Movies
      </h1>
      </div>
    </div>
    <div className='w-3/4 bg-gradient-to-br from-slate-700 to-slate-800 h-screen'>
    <div className="mx-auto py-8 border-b-2">
         <input
          type="text"
          placeholder="Rechercher un film..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border rounded-lg p-2 w-full"
        />
      </div>
    </div>
    </div>
    // <div className="container mx-auto py-8">
    //   <h1 className="text-3xl font-bold text-center mb-8">Bienvenue sur notre site de films</h1>
    //   <div className="mb-4">
    //     <input
    //       type="text"
    //       placeholder="Rechercher un film..."
    //       value={searchTerm}
    //       onChange={handleSearchChange}
    //       className="border rounded-lg p-2 w-full"
    //     />
    //   </div>
    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    //     {filteredMovies.map((movie) => (
    //       <div key={movie.id} className="border rounded-lg p-4">
    //         <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
    //         <img src={movie.poster} alt={movie.title} className="w-full mb-2" />
    //         <p className="text-gray-600">{movie.description}</p>
    //         <p className="text-gray-500 mt-2">Release Year: {movie.year}</p>
    //         <div className="mt-4">
    //           {/* Add buttons for streaming and downloading */}
    //           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Regarder en streaming</button>
    //           <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Télécharger</button>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}

export default Home;

