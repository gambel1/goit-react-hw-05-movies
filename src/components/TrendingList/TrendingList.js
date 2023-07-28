import {
  ListH1,
  ListUl,
  ListLi,
  ListLink,
  ListTitleP,
  ListWrapDiv,
  ListP,
  ListParagraphSpan,
} from './TrendingList.styled';
import propTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

export default function TrendingList({ movies }) {
  const location = useLocation();
  return (
    <>
      <ListH1>Trending list</ListH1>
      <ListUl>
        {movies.map(({ id, title, poster, voteAverage, voteCount }) => {
          return (
            <ListLi key={id}>
              <ListLink to={`/movies/${id}`} state={{ from: location }}>
                <ListTitleP>
                  {title ? title : 'Movie without a title'}
                </ListTitleP>
                <img src={`${imgBaseUrl}${poster}`} alt={title} />
                <ListWrapDiv>
                  <ListP>
                    Vote average:{' '}
                    <ListParagraphSpan>{voteAverage}</ListParagraphSpan>
                  </ListP>
                  <ListP>
                    Vote count:
                    <ListParagraphSpan> {voteCount}</ListParagraphSpan>
                  </ListP>
                </ListWrapDiv>
              </ListLink>
            </ListLi>
          );
        })}
      </ListUl>
    </>
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
