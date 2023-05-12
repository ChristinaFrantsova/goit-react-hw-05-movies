import { useState, useEffect } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from '../Api/api';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [foundMovies, setFoundMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  // console.log(searchParams.get('query'));

  useEffect(() => {
    if (!query) {
      return;
    }
    setIsLoading(true);
    getSearchMovie(query)
      .then(response => setFoundMovies(response.data.results))
      // setFoundMovies(response.data.results)
      // console.log(response.data.results)
      .catch(error => console.log(error.message))
      .finally(() => setIsLoading(false));
  }, [query]);

  const handleSumbit = query => {
    setSearchParams({ query: query });
  };

  return (
    <div>
      <Searchbar onSubmit={handleSumbit} />
      {isLoading && <Loader />}
      {foundMovies && <MoviesList movies={foundMovies} />}
    </div>
  );
};
export default Movies;
