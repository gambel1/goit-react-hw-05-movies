import {
  ListButton,
  ListWrapDiv,
  ListH2,
  ListLi,
  ListTitleGenreH3,
  ListTitleGenreP,
  ListDescriptionDiv,
  ListTitleDescriptionH3,
  ListDescriptionTitleP,
  ListRatingBoxUl,
  ListRatingBoxLi,
  ListRatingBoxSecondaryLi,
  ListRatingTitleH3,
  ListRatingP,
  AdditionalListH3,
  AdditionalListLi,
  ListLink,
} from './MovieDetails.styled';

import { useLocation, useNavigate } from 'react-router-dom';
import propTypes from 'prop-types';
import { Typography } from 'antd';

const { Text } = Typography;

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

      <ListWrapDiv>
        <img src={`${imgBaseUrl}${poster}`} alt={title} />
        <div>
          <div>
            <ListH2>{title}</ListH2>
            <Text keyboard>{releaseDate}</Text>
          </div>
          <ul>
            <ListLi>
              <ListTitleGenreH3 strong>Genre:</ListTitleGenreH3>
              {genres &&
                genres.map(({ name, id }) => (
                  <ListTitleGenreP key={id}>{name}</ListTitleGenreP>
                ))}
            </ListLi>
          </ul>
          <ListDescriptionDiv>
            <ListTitleDescriptionH3>Descriptions:</ListTitleDescriptionH3>
            <ListDescriptionTitleP> {description}</ListDescriptionTitleP>
          </ListDescriptionDiv>
          <ListRatingBoxUl>
            <ListRatingBoxLi>
              <ListRatingTitleH3>Vote average:</ListRatingTitleH3>
              <ListRatingP>{voteAverage}</ListRatingP>
            </ListRatingBoxLi>
            <ListRatingBoxSecondaryLi>
              <ListRatingTitleH3>Vote count:</ListRatingTitleH3>
              <ListRatingP>{voteCount}</ListRatingP>
            </ListRatingBoxSecondaryLi>
          </ListRatingBoxUl>

          <div>
            <AdditionalListH3>Additional Information</AdditionalListH3>
            <ul>
              <AdditionalListLi>
                <ListLink to="cast" state={{ from: subLocation }}>
                  Cast
                </ListLink>
              </AdditionalListLi>
              <li>
                <ListLink to="reviews" state={{ from: subLocation }}>
                  Reviews
                </ListLink>
              </li>
            </ul>
          </div>
        </div>
      </ListWrapDiv>
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
