import { Header, HeaderUl, HeaderLink, Main } from './Layout.styled';
// import { Button } from 'antd';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout({ title }) {
  const navItems = [
    { href: '/', text: 'Home' },
    { href: 'movies', text: 'Movies' },
  ];

  return (
    <>
      <Header>
        <div className="container">
          <nav>
            <HeaderUl>
              {navItems.map(({ href, text }) => (
                <li key={href}>
                  <HeaderLink to={href}>{text}</HeaderLink>
                </li>
              ))}
            </HeaderUl>
          </nav>
        </div>
      </Header>
      <Main>
        <div className="container">
          {/* <h1>{title}</h1> */}
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      </Main>
    </>
  );
}
