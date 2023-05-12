import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../Api/api';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getTrendingMovies()
      .then(response => setTrendingMovies(response.data.results))
      .catch(error => console.log(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <MoviesList movies={trendingMovies} mainTitle="Trending Today" />
    </>
  );
};

export default Home;
