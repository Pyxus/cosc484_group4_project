import './App.css';
import { useEffect, useState } from 'react';
import FilmList from './FilmList';
import 'bootstrap/dist/css/bootstrap.css';
import FilmListHeading from './FilmListHeading';
import SearchBox from './SearchBox';
import AddFavorites from './AddFavorites';
import RemoveFavorites from './RemoveFavorites';


const Movies = () => {
  const [films, setFilms] = useState([]);
  const [favoriteFilms, setFavoriteFilms] = useState([]);


  //making the search dynamic with state obj
  const [searchFilm, setSearchFilm] = useState('');


  const getFilmRequest = async (searchFilm) => {
    //make the request to the API
    const url = `http://www.omdbapi.com/?s=${searchFilm}&apikey=d3d2a29c`;

    const response = await fetch(url);

    //convert the response to JSON
    const responseJson = await response.json();

    if(responseJson.Search) {
      setFilms(responseJson.Search);
    }
  };

  //call the getFilmRequest with useEffect hook
  //it gets called when the page loads
  useEffect(() => {
    getFilmRequest(searchFilm);
  }, [searchFilm]);

  // get data from local storage
  useEffect(() => {
    const filmFavorites = JSON.parse(
      localStorage.getItem('your-favorites')
    );
    
    if(filmFavorites) {
      setFavoriteFilms(filmFavorites);
    }
    
  }, []);


  const saveToLocalStorage = (items) => {
    localStorage.setItem('your-favorites', JSON.stringify(items))
  }

  const addFavoriteFilm = (film) => {
    const newFavoriteList = [...favoriteFilms, film];
    setFavoriteFilms(newFavoriteList);
    saveToLocalStorage(newFavoriteList);//saved
  };

  const removeFavoriteFilm = (film) => {
    const newFavoriteList = favoriteFilms.filter(
      (favoriteFilm) => favoriteFilm.imdbID !== film.imdbID
    );
    setFavoriteFilms(newFavoriteList);
    saveToLocalStorage(newFavoriteList);//removed
  };

  
  return (

    
    <div className="App container-fluid film-css">
      <div className="row d-flex align-items-center mb-4">
        <FilmListHeading heading={searchFilm}/>
        <SearchBox searchFilm = {searchFilm} setSearchFilm = {setSearchFilm}/>
      </div>

      <div className="row">
        <FilmList 
          films= {films} 
          favoritesChosen={addFavoriteFilm} 
          favorites = {AddFavorites}
        />
      </div>

      <div className="row d-flex align-items-center mt-4 mb-4">
        <FilmListHeading heading="Your Favorites"/>
      </div>

      <div className="row">
        <FilmList 
          films= {favoriteFilms} 
          favoritesChosen={removeFavoriteFilm}
          favorites = {RemoveFavorites}
        />
      </div>

    </div>
  );
}

export default Movies;