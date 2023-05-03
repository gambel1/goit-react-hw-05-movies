import SearchForm from '../components/SearchForm/SearchForm';
import TrendingList from '../components/TrendingList/TrendingList';
import { fetchMoviesByName } from '../api/fetchApi';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) {
      return;
    }

    fetchMoviesByName(query).then(setMovies);
  }, [searchParams]);

  const handleChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams(query !== '' ? { query } : {});
  };

  return (
    <>
      <SearchForm onChange={handleChange} onSubmit={handleSubmit} />
      <TrendingList movies={movies} />
    </>
  );
}
