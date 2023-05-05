import { ListH1 } from './TrendingList.styled';
import { ListP, ListImg } from './TrendingList.styled';
import propTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

export default function TrendingList({ movies }) {
  const location = useLocation();
  return (
    <ul>
      <ListH1>Trending list</ListH1>
      {movies.map(({ id, title, poster, voteAverage, voteCount }) => {
        return (
          <li>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <ListP>{title ? title : 'Movie without a title'}</ListP>
              <ListImg src={`${imgBaseUrl}${poster}`} alt={title} />
              <div>
                <ListP>
                  Vote average: <span>{voteAverage}</span>
                </ListP>
                <ListP>
                  Vote count:<span> {voteCount}</span>
                </ListP>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

TrendingList.prototype = {
  movies: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      title: propTypes.string,
      poster: propTypes.string,
      voteAverage: propTypes.number,
      voteCount: propTypes.number,
    }),
  ).isRequired,
};
