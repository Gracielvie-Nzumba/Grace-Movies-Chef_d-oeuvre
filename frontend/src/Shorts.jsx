// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import MyIcon from './Composants/MyIcon';
// import Image from './Image';

// function Shorts() {
//   const [films, setFilms] = useState([]);
//   const [series, setSeries] = useState([]);

//    useEffect(() => {
//     const fetchShorts = async () => {
//       try {
//         const filmResponse = await axios.get('/api/films');
//         const serieResponse = await axios.get('/api/series');
//         setFilms(filmResponse.data);
//         setSeries(serieResponse.data);
//       } catch (error) {
//         console.error('Error fetching shorts:', error);
//       }
//     };

//    }, []);

//   return (
//     <div className="flex justify-between">
//       <div className="w-3/12 border-r text-white">
//         <div className="text-center m-20 font-bold">
//           <h1>Explorez les vidéos</h1>
//           <h2 className="m-6">Films</h2>
//           <div className="shorts-container">
//             {films.map((film) => (
//               <div key={film.idFilm} className="short">
//                 <img src={film.urlDeStreaming} alt={film.titre} />
//                 <h3>{film.titre}</h3>
//                 <p>{film.description}</p>
//               </div>
//             ))}
//             <h2>Séries</h2>
//             <div className="shorts-container">
//               {series.map((serie) => (
//                 <div key={serie.idSerie} className="short">
//                   <img src={serie.urlDeStreaming} alt={serie.titre} />
//                   <h3>{serie.titre}</h3>
//                   <p>{serie.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="w-5/12 text-white">
//         <div className='m-4'>
//           <Image src="/MesImages/dessin animé 1.svg" />
//         </div>
//         <div className='flex m-3'>
//             <MyIcon icon="/MesIcons/icons8-home 1.svg"/>
//             <MyIcon icon="/MesIcons/icons8-analyze-64 1.svg"/>
//             <MyIcon icon="/MesIcons/icons8-camera-plus-24 1.svg"/>
//             <MyIcon icon="/MesIcons/icons8-user-64 1.svg/MesIcons/icons8-user-64 1.svg"/>
//             <MyIcon icon="/MesIcons/icons8-message-48.png"/>
//         </div>
//         <div></div>
//       </div>
//       <div className="w-3/12 border-l text-white">
//         <div>gggggggggg</div>
//       </div>
//     </div>
//   );
// }

// export default Shorts;
