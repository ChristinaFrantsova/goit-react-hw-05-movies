import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { getMovieReviews } from 'Api/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getMovieReviews(movieId)
      .then(response => setReviews(response.data.results))
      //   console.log(response.data.results)
      // setReviews(response.data.results)
      .catch(error => console.log(error.message))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>There is no any reviews for this movie.</p>;
  }

  return (
    <div>
      {isLoading && <Loader />}
      <ul>
        {reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Reviews;
