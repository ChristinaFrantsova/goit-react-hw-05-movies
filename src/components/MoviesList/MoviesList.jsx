// import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { List, Item, Img, Title } from './MoviesList.styled';
import posterImg from '../../images/posterImg.png';
const baseURL = 'https://image.tmdb.org/t/p/original';

const MoviesList = ({ mainTitle, movies }) => {
  const location = useLocation();
  return (
    <>
      <h2>{mainTitle}</h2>
      <List>
        {movies.map(({ id, title, poster_path }) => (
          <Item key={id}>
            <Link
              style={{
                textDecoration: 'none',
                color: '#5a5a5a',
              }}
              to={`/movies/${id}`}
              state={{ from: location }}
            >
              <Img
                src={poster_path ? baseURL + poster_path : posterImg}
                alt={title}
              />
              <Title>{title}</Title>
            </Link>
          </Item>
        ))}
      </List>
    </>
  );
};

// MoviesList.propTypes = {
//   mainTitle: PropTypes.string,
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string,
//       poster_path: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
// };

export default MoviesList;
