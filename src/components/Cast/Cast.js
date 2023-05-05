import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import propTypes from 'prop-types';

import { fetchMoviesCast } from '../../api/fetchApi';

const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

export default function Cast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);

  useEffect(() => {
    fetchMoviesCast(movieId).then(({ cast }) => {
      const actorsArr = [];

      cast.map(({ id, name, profile_path }) => {
        const actor = {
          id,
          name,
          photo: profile_path,
        };

        return actorsArr.push(actor);
      });

      setActors(actorsArr);
    });
  }, [movieId]);

  return (
    actors && (
      <div>
        <ul>
          {actors.map(({ id, name, photo }) => {
            return (
              <li key={id}>
                <div>
                  <img src={`${imgBaseUrl}${photo}`} alt={name} />
                </div>
                <p>{name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
}

Cast.prototype = {
  actors: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      name: propTypes.string,
      photo: propTypes.string,
    }),
  ).isRequired,
};
