
import React, { useState } from 'react';
import './Rows.css';
import Modal from './Modal';
import Featured from './Featured';
const Rows = () => {
  const [movie, setMovie] = useState('');
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [boxVisible, setBoxVisible] = useState(true);
  const [details, setDetails] = useState();
  const [search, setSearch] = useState(true);


  const key = '1490928f';

  const handleChange = (e) => {
    const val = e.target.value;

    setMovie(val);
  };

  const handleClick = async () => {
    const api = `http://www.omdbapi.com/?s=${movie}&apikey=${key}`;
    try {
      const response = await fetch(api);
      const data = await response.json();

      setMovies(data.Search);
    } catch (error) {
      console.log(error);
    }

  };

  const clickImage = (m) => {
    setSearch(false)
    setSelectedMovie(m);
    const desc = `http://www.omdbapi.com/?apikey=${key}&i=${m.imdbID}`
    const func = async () => {
      try {
        const res = await fetch(desc);
        const description = await res.json();
        setDetails(description);

      }
      catch (error) {
        console.log(error);
      }
    }
    func();
    setModalOpen(true);
    setBoxVisible(false)
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedMovie(null);
    setBoxVisible(true)
    setSearch(true)
  };


  return (
    <div>

      {search && (<p className='header-title'>The Movie Search App allows users to search for movies by title. Users can enter the title of a movie they're interested in and click the search button to retrieve a list of matching movies from the Open Movie Database (OMDb) API. The search results are displayed as a grid of movie posters, along with their titles and release years.</p>)}
      {search && (<div className='search-box'>
        <input type="text" value={movie} onChange={handleChange} className='search' placeholder='Search any movie...' />
        <button onClick={handleClick} className='button'>Search</button>
      </div>)}
      {movies.length === 0 && <Featured />}
      {boxVisible && (<div className="box">
        {movies.map((m) => (
          <div key={m.imdbID} className="movie">
            <img src={m.Poster} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} alt={m.Title} onClick={() => clickImage(m)} />
            <div className="movie-title">{m.Title}</div>
            <div className="movie-description">{m.Year}</div>
          </div>
        ))}
      </div>)}

      {modalOpen && selectedMovie && <Modal title={selectedMovie.Title} img={selectedMovie.Poster} year={selectedMovie.Year} onClose={closeModal} plot={details && details.Plot} released={details && details.Released} genre={details && details.Genre} direc={details && details.Director} rating={details && details.imdbRating} />}

    </div>
  );
};

export default Rows;


