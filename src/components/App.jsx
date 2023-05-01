import { Link, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <div>
        <nav>
          <Link>Home</Link>
          <Link>Movies</Link>
        </nav>
      </div>
      <Routes>
        <Route>Home</Route>
        <Route>Movies</Route>
      </Routes>
    </div>
  );
}
