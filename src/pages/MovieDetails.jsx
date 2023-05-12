import { getMovieDetails } from 'Api/api';
import { useState, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import Loader from 'components/Loader/Loader';
import posterImg from '../images/posterImg.png';
import {
  Div,
  Img,
  Info,
  MainTitle,
  ScoreTitle,
  Title,
  AditionalTitle,
  LinkNav,
  List,
  Arrow,
} from './MovieDetails.styled';
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
      <Arrow to={location.state?.from}>
        <MdKeyboardDoubleArrowLeft
          style={{ color: '#404b80', width: '30px', height: '30px' }}
        />
        <span>Go Back</span>
      </Arrow>

      {isLoading && <Loader />}
      <Div>
        <div>
          <Img
            src={poster_path ? baseURL + poster_path : posterImg}
            alt={title}
          />
        </div>
        <Info>
          <MainTitle>
            {title} ({release_date && release_date.slice(0, 4)})
          </MainTitle>
          <ScoreTitle>
            <b>User score:</b> {Math.floor(vote_average * 10)}%
          </ScoreTitle>
          <Title>Overview</Title>
          <p>{overview}</p>
          <Title>Genres</Title>
          <ul>
            {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </ul>
        </Info>
      </Div>
      <List>
        <AditionalTitle>Aditional information:</AditionalTitle>
        <li>
          <LinkNav to="cast" state={{ from: location.state?.from }}>
            Cast
          </LinkNav>
        </li>
        <li>
          <LinkNav to="reviews" state={{ from: location.state?.from }}>
            Reviews
          </LinkNav>
        </li>
      </List>
      <Outlet />
    </>
  );
};

export default MovieDetails;
