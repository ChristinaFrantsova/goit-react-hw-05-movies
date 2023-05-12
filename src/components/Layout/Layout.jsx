import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../Loader/Loader';
import { Container, Header, List, Link } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <List>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </List>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
