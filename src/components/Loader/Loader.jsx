import { Triangle } from 'react-loader-spinner';
import { LoaderBackdrop, LoaderDiv } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderBackdrop>
      <LoaderDiv>
        <Triangle
          height="80"
          width="80"
          color="#352b4b"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </LoaderDiv>
    </LoaderBackdrop>
  );
};

export default Loader;
