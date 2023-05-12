import styled from '@emotion/styled';

export const Button = styled.link`
  background: inherit;
  outline: none;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 5px 15px;
  color: inherit;
  transition: all 0.3s ease;
  &:hover {
    background: linear-gradient(45deg, #79bfc9, #274b54);
    color: #79bfc9;
    background-size: cover;
  }
`;
