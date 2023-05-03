import TrendingList from '../components/TrendingList/TrendingList';
import { useEffect, useState } from 'react';
import { fetchTrendMovies } from '../api/fetchApi';
export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendMovies().then(setMovies);
  }, []);

  return (
    <>
      <TrendingList movies={movies} />
    </>
  );
}
