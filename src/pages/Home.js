import { useState, useEffect } from 'react';
import { fetchTrendMovies } from '../api/fetchApi';

import TrendingList from '../components/TrendingList/TrendingList';

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchTrendMovies().then(({ results }) => {
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
  }, []);

  return (
    movies && (
      <div>
        <TrendingList movies={movies} />
      </div>
    )
  );
}
