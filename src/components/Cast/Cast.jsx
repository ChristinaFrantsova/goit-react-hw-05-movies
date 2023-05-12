import { getMovieCast } from 'Api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import profileImg from '../../images/profileImg.jpg';
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
    <div>
      {isLoading && <Loader />}
      <ul>
        {cast.map(({ credit_id, profile_path, character, name }) => {
          return (
            <li key={credit_id}>
              <img
                src={profile_path ? baseURL + profile_path : profileImg}
                width="150"
                height="200"
                alt={name}
              />
              <p>
                <b>Character:</b> {character}
              </p>
              <p>
                <b>Actor:</b> {name}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Cast;
