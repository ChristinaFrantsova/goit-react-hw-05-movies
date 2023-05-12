import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BiCameraMovie } from 'react-icons/bi';
import { useState } from 'react';
import { SearchbarMovies, Form, Button, Span, Input } from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const onInputChange = event => {
    setSearchValue(event.target.value.toLowerCase());
  };

  const onFormSubmit = event => {
    event.preventDefault();
    if (searchValue.trim() === '') {
      return toast.error('🦄 Please enter a more specific movie name!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }

    onSubmit(searchValue);
    reset();
  };

  const reset = () => {
    setSearchValue('');
  };

  return (
    <SearchbarMovies>
      <Form onSubmit={onFormSubmit}>
        <ToastContainer />
        <Button type="submit">
          <BiCameraMovie style={{ width: '30px', height: '30px' }} />
          <Span className="SearchFormButtonLabel">Search</Span>
        </Button>

        <Input
          className="SearchFormInput"
          type="text"
          name="input"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={searchValue}
          onChange={onInputChange}
        />
      </Form>
    </SearchbarMovies>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
