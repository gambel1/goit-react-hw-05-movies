import { ListButton, ListH2, ListP, ListLink } from './MovieDetails.styled';
import { useLocation, useNavigate } from 'react-router-dom';
import propTypes from 'prop-types';

export default function MovieDetails({ movieInfo }) {
  const location = useLocation();
  const navigate = useNavigate();
  const subLocation = location.state.from;
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

  const {
    title,
    genres,
    description,
    poster,
    releaseDate,
    voteAverage,
    voteCount,
  } = movieInfo;

  const back = () => navigate(location?.state?.from ?? '/');

  return (
    <div>
      <ListButton onClick={back}>Go back</ListButton>

      <div>
        <img src={`${imgBaseUrl}${poster}`} alt={title} />
        <div>
          <div>
            <ListH2>{title}</ListH2>
            <p>{releaseDate}</p>
          </div>
          <ul>
            {genres && genres.map(({ name, id }) => <li key={id}>{name}</li>)}
          </ul>
          <ListP>{description}</ListP>
          <div>
            <ListP>
              Vote average: <span>{voteAverage}</span>
            </ListP>
            <ListP>
              Vote count: <span>{voteCount}</span>
            </ListP>
          </div>
        </div>
      </div>

      <div>
        <ListP>Additional Information</ListP>
        <ul>
          <li>
            <ListLink to="cast" state={{ from: subLocation }}>
              Cast
            </ListLink>
          </li>
          <li>
            <ListLink to="reviews" state={{ from: subLocation }}>
              Reviews
            </ListLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

MovieDetails.prototype = {
  movieInfo: propTypes.shape({
    title: propTypes.string,
    genres: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number,
        name: propTypes.string,
      }),
    ),
    description: propTypes.string,
    poster: propTypes.string,
    releaseDate: propTypes.string,
    voteAverage: propTypes.number,
    voteCount: propTypes.number,
  }),
};
