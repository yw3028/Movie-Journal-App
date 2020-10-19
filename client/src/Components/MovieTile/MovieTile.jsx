import React, { useContext } from 'react';
import Button from '../ActionButton/ActionButtons';
import { HashLink } from 'react-router-hash-link';
import { MovieContext } from '../../App';
import { useHistory } from 'react-router-dom';

import * as S from './MovieTileStyle';

export default ({ movie }) => {
  // In our db the poster is called poster but in moviedApi is called poster_path
  const { updateMovieStatusInList } = useContext(MovieContext);

  const history = useHistory();

  const image = movie.poster_path ? movie.poster_path : movie.poster;
  return (
    <div
      onClick={() =>
        history.push(`/movie/${movie.apiId ? movie.apiId : movie.id}#movie`)
      }
    >
      {/* <HashLink to={`/movie/${movie.apiId ? movie.apiId : movie.id}#movie`}> */}
      <S.MovieTile>
        <img
          className="movie_img"
          alt="movie cover"
          src={'https://image.tmdb.org/t/p/w300/' + image}
        />
        <div className="movie_overlay">
          <button className="movie_overlay_btn">
            <Button
              color={'white'}
              wish={true}
              movieId={movie.apiId ? movie.apiId : movie.id}
              onClick={(event) => {
                event.preventDefault();
                // event.stopPropagation();
                updateMovieStatusInList(
                  Number(movie.apiId ? movie.apiId : movie.id),
                  'inWishlist'
                );
              }}
            />
          </button>
          <button className="movie_overlay_btn">
            <Button
              color={'white'}
              watched={true}
              movieId={movie.apiId ? movie.apiId : movie.id}
            />
          </button>
        </div>
      </S.MovieTile>
      {/* </HashLink> */}
    </div>
  );
};
