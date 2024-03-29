import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { fetchMoviesByName } from '../api/fetchApi';
import SearchBar from '../components/SearchForm/SearchForm';
import MoviesCard from '../components/TrendingList/TrendingList';

export default function Movies() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query') ?? '';

  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (query !== '') {
      fetchMoviesByName(query).then(({ results }) => {
        const moviesArr = [];

        results.map(
          ({ id, original_title, poster_path, vote_average, vote_count }) => {
            const movie = {
              id,
              title: original_title,
              poster: poster_path,
              voteAverage: vote_average,
              voteCount: vote_count,
            };

            return moviesArr.push(movie);
          },
        );

        setMovies(moviesArr);
      });
    }
  }, [query]);

  return (
    <>
      <SearchBar />
      {movies && (
        <div>
          <MoviesCard movies={movies} />
        </div>
      )}
    </>
  );
}
