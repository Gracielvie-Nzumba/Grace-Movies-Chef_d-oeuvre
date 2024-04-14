import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Apropos (){
  return (
    <div>
      <header className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Grâce-Movies</h1>
          <p className="text-lg mt-4">
            Votre source de films chrétiens en streaming
          </p>
        </div>
      </header>
  
      <nav className="bg-yellow-500 text-white py-4">
        <div className="container mx-auto flex justify-center">
          <a href="#about" className="mx-4 hover:underline">
            À propos
          </a>
          <Link to="/login" className="mx-4 hover:underline">
            login
          </Link>
        </div>
      </nav>
  
      <section id="about" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">À propos de Grâce-Movies</h2>
          <p className="text-lg leading-relaxed">
            Bienvenue sur Grâce-Movies, votre destination pour les films
            chrétiens en streaming, les dessins animés pour enfants et les
            séries édifiantes.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Nous proposons une sélection soigneusement choisie de films centrés
            sur des thèmes chrétiens tels que les fiançailles, le mariage et
            bien d'autres, pour nourrir votre foi et votre inspiration.
          </p>
        </div>
      </section>
  
      <section id="contact" className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contactez-nous</h2>
          <p className="text-lg leading-relaxed">
            Pour toute question ou demande d'information, n'hésitez pas à nous
            contacter :
          </p>
          <p className="text-lg leading-relaxed mt-4">Email: </p>
          <p className="text-lg leading-relaxed">Téléphone: </p>
        </div>
      </section>
  
      <footer className=" bg-gradient-to-bl from-pink-500 via-orange-600 bg-yellow-500 text-white py-4">
        <div className="container mx-auto text-center">
          <p>© 2024 Grâce-Movies. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
  
}

export default Apropos;



