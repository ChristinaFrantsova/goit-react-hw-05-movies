import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { getMovieReviews } from 'Api/api';
import { Div, Item, Title, Text } from './Reviews.styled';

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
    <Div>
      {isLoading && <Loader />}
      <ul>
        {reviews.map(({ id, author, content }) => {
          return (
            <Item key={id}>
              <Title>{author}</Title>
              <Text>{content}</Text>
            </Item>
          );
        })}
      </ul>
    </Div>
  );
};
export default Reviews;
