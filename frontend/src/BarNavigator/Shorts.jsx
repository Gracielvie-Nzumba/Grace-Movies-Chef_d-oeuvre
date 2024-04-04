import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import MyIcon from './Composants/MyIcon';
import Image from '../PageConnexion/MyImage';
import { Routes, Route } from 'react-router-dom';


function Shorts() {
  const [films, setFilms] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchShorts = async () => {
      try {
        const filmResponse = await axios.get('/api/films');
        const serieResponse = await axios.get('/api/series');
        setFilms(filmResponse.data);
        setSeries(serieResponse.data);
      } catch (error) {
        console.error('Error fetching shorts:', error);
      }
    };
    fetchShorts();
  }, []);

  return (
    // <Routes>
    //   <Route path="/" element={<Short />} />
    //   <Route path="/home" element={<Home />} />
    //   <Route path="/" element={
    <div className="flex justify-between bg-slate-900 static">
      <div className="w-3/12 border-r text-white">
        <div className="text-center m-20 font-bold">
          <h1>Home</h1>
          <h2 className="m-10">Films</h2>
          <div className="shorts-container">
            {films.map((film) => (
              <div key={film.idFilm} className="short">
                <img src={film.urlDeStreaming} alt={film.titre} />
                <h3>{film.titre}</h3>
                <p>{film.description}</p>
              </div>
            ))}
            <h2>Séries</h2>
            <div className="shorts-container">
              {series.map((serie) => (
                <div key={serie.idSerie} className="short">
                  <img src={serie.urlDeStreaming} alt={serie.titre} />
                  <h3>{serie.titre}</h3>
                  <p>{serie.description}</p>
                </div>
              ))}
            </div>
            {/* <h1>Explorez les vidéos</h1> */}
          </div>
        </div>
      </div>
      <div className="w-4/12 text-white ">
        <div>
          <div className="m-4">
            <Image src="/MesImages/dessin animé 1.svg" />
          </div>
          <div className="flex justify-between">
            <Image src="/src/MesIcons/icons8-home 1.svg" />
            <Image src="/src/MesIcons/icons8-analyze-64 1.svg" />
            <Image src="/src/MesIcons/icons8-camera-plus-24 1.svg" />
            <Image src="/src/MesIcons/icons8-user-64 1.svg" />
            <Image src="/src/MesIcons/icons8-message-48.png" />
          </div>
          <div className="grid justify-items-end pl-20">
            <div>
              <Image
                src="/src/MesIcons/pains-cmohamed-hassouna-1024x683 1.svg"
                className=""
              />
            </div>
            <div>
              <Image src="/src/MesIcons/icons8-like-64 1.svg" />
              <span className="pl-4">22</span>
            </div>
            <div>
              <Image src="/src/MesIcons/icons8-comment-50 1.svg" />
              <span className="pl-4">2</span>
            </div>
            <div>
              <Image src="/src/MesIcons/icons8-connect-64 1.svg" />
              <p>Partage</p>
            </div>
            <div>
              <Image src="/src/MesIcons/icons8-more-50 1.svg" />
              <p>More</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/12 border-l text-white"></div>
    </div>
    //     }
    //   />
    // </Routes>
  );
}

export default Shorts;
