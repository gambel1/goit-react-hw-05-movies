import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  const navItems = [
    { href: '/', text: 'Home' },
    { href: 'movies', text: 'Movies' },
  ];

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              {navItems.map(({ href, text }) => (
                <li key={href}>
                  <Link to={href}>{text}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="container">
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
}
