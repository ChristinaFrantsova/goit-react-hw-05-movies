import styled from '@emotion/styled';

export const LoaderBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(95, 90, 90, 0.8);
`;

export const LoaderDiv = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
`;
