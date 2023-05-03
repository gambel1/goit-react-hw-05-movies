import {fetchTrendMovies} from '../../api/fetchApi';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function TrendingList(/*{ movies }*/) {
  const [films, setFilms] = useState([]);
  const location = useLocation();
  // const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    fetchTrendMovies()
      .then(films => {
        setFilms(films.results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Trending</h1>
      <ul>
        {films.map(({ id, original_title}) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}></Link>
            {/* <img>{imgBaseUrl}</img> */}
          </li>
        ))}
      </ul>
    </div>

    // <ul>
    //   {movies.map(({ id, original_title }) => (
    //     <li key={id}>
    //       <Link to={`/movies/${id}`} state={{ from: location }}>
    //         {original_title}
    //         <img src={imgBaseUrl} alt=""></img>
    //         {/* <p>{title ?? original_name}</p> */}
    //       </Link>
    //     </li>
    //   ))}
    // </ul>
  );
}
