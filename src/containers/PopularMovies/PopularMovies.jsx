/**
 *
 * Popular Movies component
 *
 *
 */
import React from 'react';
import DangerousLies from '../../assets/images/movies/dangerous-lies.png';
import TheGodfather from '../../assets/images/movies/theGodFather.png';
import TheDarkKnight from '../../assets/images/movies/TheDarkKnight.png';
import SchindlersList from '../../assets/images/movies/SchindlersList.png';
import './PopularMovies.scss';

function PopularMovies() {
  return (
    <ul className="popular-movies">
      <li className="movie-item">
        <div className="movie-img">
          <img alt="Movie title" src={DangerousLies} />
        </div>
        <div className="movie-info">
          <div className="title-subtitle">
            <p>Dangerous Lies</p>
            <span>2020</span>
          </div>
        </div>
        <div className="movie-action">
          <div className="play-wrapper">
            <div className="play-icon" />
          </div>
        </div>
      </li>
      <li className="movie-item">
        <div className="movie-img">
          <img alt="The Godfather" src={TheGodfather} />
        </div>
        <div className="movie-info">
          <div className="title-subtitle">
            <p>The Godfather</p>
            <span>1972</span>
          </div>
        </div>
        <div className="movie-action">
          <div className="play-wrapper">
            <div className="play-icon" />
          </div>
        </div>
      </li>
      <li className="movie-item">
        <div className="movie-img">
          <img alt="Movie title" src={TheDarkKnight} />
        </div>
        <div className="movie-info">
          <div className="title-subtitle">
            <p>The Dark Knight</p>
            <span>2008</span>
          </div>
        </div>
        <div className="movie-action">
          <div className="play-wrapper">
            <div className="play-icon" />
          </div>
        </div>
      </li>
      <li className="movie-item">
        <div className="movie-img">
          <img alt="The Schindler's List" src={SchindlersList} />
        </div>
        <div className="movie-info">
          <div className="title-subtitle">
            <p>The Schindler&apos;s List</p>
            <span>Subtitle</span>
          </div>
        </div>
        <div className="movie-action">
          <div className="play-wrapper">
            <div className="play-icon" />
          </div>
        </div>
      </li>
      <li className="movie-item">
        <div className="movie-img">
          <img alt="Movie title" src={DangerousLies} />
        </div>
        <div className="movie-info">
          <div className="title-subtitle">
            <p>Dangerous Lies</p>
            <span>2020</span>
          </div>
        </div>
        <div className="movie-action">
          <div className="play-wrapper">
            <div className="play-icon" />
          </div>
        </div>
      </li>
      <li className="movie-item">
        <div className="movie-img">
          <img alt="The Godfather" src={TheGodfather} />
        </div>
        <div className="movie-info">
          <div className="title-subtitle">
            <p>The Godfather</p>
            <span>1972</span>
          </div>
        </div>
        <div className="movie-action">
          <div className="play-wrapper">
            <div className="play-icon" />
          </div>
        </div>
      </li>
      <li className="movie-item">
        <div className="movie-img">
          <img alt="Movie title" src={TheDarkKnight} />
        </div>
        <div className="movie-info">
          <div className="title-subtitle">
            <p>The Dark Knight</p>
            <span>2008</span>
          </div>
        </div>
        <div className="movie-action">
          <div className="play-wrapper">
            <div className="play-icon" />
          </div>
        </div>
      </li>
    </ul>
  );
}


export default PopularMovies;
