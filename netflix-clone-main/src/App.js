
import './App.css';
import Header from './components/header';
import React from 'react';
import Tmdb from './components/tmdb';

import Category from './components/category';
function App() {
  return (
    <div >
    
        <Header> </Header>
        
        <Category title="Netflix Originals" fetchurl={Tmdb.fetchNetflixOriginals}></Category>
        <Category title="Trending" fetchurl={Tmdb.fetchTrending}></Category>
        <Category title="Top rated" fetchurl={Tmdb.fetchTopRated}></Category>
        <Category title="Romantic" fetchurl={Tmdb.fetchRomanceMovies}></Category>
        <Category title="Comedy" fetchurl={Tmdb.fetchComedyMovies}></Category>
        <Category title="horror" fetchurl={Tmdb.fetchHorrorMovies}></Category>
        <Category title="Action" fetchurl={Tmdb.fetchActionMovies}></Category>
        <Category title="Documentaries" fetchurl={Tmdb.fetchDocumentaries}></Category>

      
    </div>
  );
}

export default App;
