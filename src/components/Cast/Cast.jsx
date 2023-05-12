import { getMovieCast } from 'Api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import profileImg from '../../images/profileImg.jpg';
import { List, Item, Img, Title, Text } from './Cast.styled';
const baseURL = 'https://image.tmdb.org/t/p/original';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getMovieCast(movieId)
      .then(response => setCast(response.data.cast))
      //   setCast(response.data.cast)
      //   console.log(response.data.cast)
      .catch(error => console.log(error.message))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      <List>
        {cast.map(({ credit_id, profile_path, character, name }) => {
          return (
            <Item key={credit_id}>
              <Img
                src={profile_path ? baseURL + profile_path : profileImg}
                alt={name}
              />
              <Title>
                <Text>Character:</Text> {character}
              </Title>
              <Title>
                <Text>Actor:</Text> {name}
              </Title>
            </Item>
          );
        })}
      </List>
    </>
  );
};
export default Cast;
