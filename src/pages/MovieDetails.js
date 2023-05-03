import CardMovie from '../components/CardMovie/CardMovie';
import { fetchMoviesDetail } from '../api/fetchApi';
import { Suspense, useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    fetchMoviesDetail(movieId).then(setMovieDetails);
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }

  const back = location.state?.from ?? '/';

  return (
    <>
      <Link to={back}>&#8592;Go back</Link>
      <CardMovie movie={movieDetails} />
      <div>
        <NavLink to="cast" state={{ from: back }}>
          Cast
        </NavLink>
        <NavLink to="reviews" state={{ from: back }}>
          Reviews
        </NavLink>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
