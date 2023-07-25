import { ListUl, ListLi, ListLink, ListP } from './TrendingList.styled';
import propTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

export default function TrendingList({ movies }) {
  const location = useLocation();
  return (
    <ListUl>
      {movies.map(({ id, title, poster, voteAverage, voteCount }) => {
        return (
          <ListLi>
            <ListLink to={`/movies/${id}`} state={{ from: location }}>
              <ListP>{title ? title : 'Movie without a title'}</ListP>
              <img src={`${imgBaseUrl}${poster}`} alt={title} />
              <div>
                <ListP>
                  Vote average: <span>{voteAverage}</span>
                </ListP>
                <ListP>
                  Vote count:<span> {voteCount}</span>
                </ListP>
              </div>
            </ListLink>
          </ListLi>
        );
      })}
    </ListUl>
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
