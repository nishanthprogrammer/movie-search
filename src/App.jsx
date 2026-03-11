import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
function App() {
  const [search,setSearch] = useState("");
  const [movies, setMovies] = useState([]);


  const searchMovies = async() => {
    const response = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  return (
    <div className='main'>
      <input type = 'text'
             placeholder='Search your movies..'
             value = {search}
             onChange = {(e) => setSearch(e.target.value)}
      />
      <button onClick = {searchMovies}> Search </button>
      <div className='container'>
        {movies.map((movie) => (
          <div key={movie.imdbID} className='moviecard'>
          <img src={movie.Poster} alt={movie.Title} width="150"/>
          <h3>{movie.Title}</h3>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p className='imdb-link'><strong>IMDB Page : </strong><a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" rel="noopener noreferrer">Click Here</a></p>
        </div>
))}
      </div>
    </div>
  )
}

export default App

