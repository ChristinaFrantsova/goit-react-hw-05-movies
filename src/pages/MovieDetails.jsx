import { getMovieDetails } from 'Api/api';
import { useState, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import Loader from 'components/Loader/Loader';
import posterImg from '../images/posterImg.png';
const baseURL = 'https://image.tmdb.org/t/p/original';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    getMovieDetails(movieId)
      .then(response => setMovie(response.data))
      // setMovie(response.data)
      // console.log(response.data)
      .catch(error => console.log(error.message))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  const { poster_path, title, vote_average, overview, genres, release_date } =
    movie;
  //   console.log(genres);

  return (
    <>
      <Link to={location.state?.from}>
        <MdKeyboardDoubleArrowLeft style={{ width: '30px', height: '30px' }} />
        <span>Go Back</span>
      </Link>
      {isLoading && <Loader />}
      <div>
        <div>
          <img
            src={poster_path ? baseURL + poster_path : posterImg}
            alt={title}
            width="300"
            height="450"
          />
        </div>
        <div>
          <h2>
            {title} ({release_date && release_date.slice(0, 4)})
          </h2>
          <p>User score: {Math.floor(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul>
            {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </ul>
        </div>
      </div>
      <ul>
        <h3>Aditional information</h3>
        <li>
          <Link to="cast" state={{ from: location.state?.from }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location.state?.from }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
